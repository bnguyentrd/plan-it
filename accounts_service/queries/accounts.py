import os
from queries.pool import pool
from fastapi import HTTPException, FastAPI
from pydantic import BaseModel
# import psycopg2

# from pydantic import BaseModel, EmailStr
from typing import Optional, Union


# pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])
class AccountIn(BaseModel):
    username: str
    email: str
    password: str


# class Account(AccountIn):
#     id = PydanticObjectId
#     roles: List[str]


class Username(BaseModel):
    username: str


class Error(BaseModel):
    message: str


class AccountOut(BaseModel):
    id: int
    username: str
    email: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountsOut(BaseModel):
    accounts: list[AccountOut]


class EmailIn(BaseModel):
    # username: str
    email: str


class UsernameIn(BaseModel):
    username: str


class DuplicateAccountError(ValueError):
    pass


# connection = psycopg2.connect(
#     host="host",
#     database="database",
#     user="username",
#     password="password"
# )

class AccountQueries:
    def get_all_accounts(self) -> list[AccountOut]:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
          SELECT id, username, email, hashed_password
          FROM accounts
          ORDER BY id
            """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get(self, username: str) -> AccountOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                SELECT id, username, email, hashed_password
                FROM accounts
                WHERE username = %s
                """,
                    [username],
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def get_one(self, id: int) -> Optional[AccountOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                SELECT id, username, email
                FROM accounts
                WHERE id = %s
                """,
                    [id],
                )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_user_out(record)

    #   def create(self, info: AccountIn, hashed_password: str) -> AccountOutWithPassword:
    #     with pool.connection() as conn:
    #         with conn.cursor() as cur:
    #             params = [info.username, info.email, hashed_password]
    #             cur.execute(
    #                 """
    #                 INSERT INTO accounts (username, email, hashed_password)
    #                 VALUES (%s, %s, %s)
    #                 RETURNING id, username, email, hashed_password
    #                 """,
    #                 params,
    #             )
    #             record = None
    #             row = cur.fetchone()
    #             if row is not None:
    #                 record = {}
    #                 for i, column in enumerate(cur.description):
    #                     record[column.name] = row[i]
    #             return record

    def create(
        self, info: AccountIn, hashed_password: str
    ) -> AccountOutWithPassword:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    params = [info.username, info.email, hashed_password]
                    cur.execute(
                        """
                    INSERT INTO accounts (username, email, hashed_password)
                    VALUES (%s, %s, %s)
                    RETURNING id, username, email, hashed_password
                    """,
                        params,
                    )
                    record = None
                    row = cur.fetchone()
                    if row is not None:
                        record = {}
                        for i, column in enumerate(cur.description):
                            record[column.name] = row[i]
                    return record
        except Exception as e:
            print(e)
            return {"message": "Username or email already exist"}

    def delete(self, id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                    DELETE FROM accounts
                    WHERE id = %s
                    """,
                        [id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    #   def update(self, id: int, user: AccountIn) -> Union[AccountOut, Error]:
    #         try:
    #             with pool.connection() as conn:
    #                 with conn.cursor() as db:
    #                     db.execute(
    #                         """
    #                         UPDATE accounts
    #                         SET username = %s, email = %s
    #                         WHERE id = %s
    #                         """,
    #                         [
    #                             user.username,
    #                             user.email,
    #                             id
    #                         ]
    #                     )
    #                     return self.user_in_to_out(id, user)

    #         except Exception as e:
    #             print(e)
    #             return {"message": "Could not update user data"}

    def updateEmail(self, id: int, user: dict):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE accounts
                        SET email = %s
                        WHERE id = %s
                        """,
                        [
                            user["email"],
                            # user["username"],
                            id,
                        ],
                    )
                    return True

        except Exception as e:
            print(e)
            return {"message": "Could not update user data"}

    def updateUsername(self, id: int, user: dict):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE accounts
                        SET username = %s
                        WHERE id = %s
                        """,
                        [
                            # user["email"],
                            user["username"],
                            id,
                        ],
                    )
                    return True

        except Exception as e:
            print(e)
            return {"message": "Could not update user data"}

    def user_in_to_out(self, id: int, user: AccountOut):
        old_data = user.dict()
        return AccountOut(id=id, **old_data)

    def record_to_user_out(self, record):
        return AccountOut(id=record[0], username=record[1], email=record[2])

