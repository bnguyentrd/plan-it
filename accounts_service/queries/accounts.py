import os
from queries.pool import pool
from fastapi import HTTPException
from pydantic import BaseModel
from typing import Optional, Union

# pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

class AccountIn(BaseModel):
    first_name: str
    last_name: str
    avatar: str
    email: str
    username: str

class Error(BaseModel):
    message: str

class AccountOut(BaseModel):
  id: int
  first_name: str
  last_name: str
  avatar: str
  email: str
  username: str

class AccountOutWithPassword:
    hashed_password: str

class AccountsOut(BaseModel):
  accounts: list[AccountOut]

class DuplicateAccountError(ValueError):
    pass

class AccountQueries:
  def get_all_accounts(self) -> list[AccountOut]:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
            """
          SELECT id, first_name, last_name, avatar, email, username
          FROM accounts
          ORDER BY id
            """)

        results = []
        for row in cur.fetchall():
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
          results.append(record)

        return results

  def get_one(self, id: int) -> Optional[AccountOut]:
    try:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id
                        , first_name
                        , last_name
                        , avatar
                        , email
                        , username
                    FROM accounts
                    WHERE id = %s
                    """,
                    [id]
                )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_user_out(record)
    except Exception as e:
        print(e)
        return {"message": "Could find that user"}






  def create(self, user: AccountIn) -> AccountOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO accounts
                        (first_name, last_name, avatar, email, username)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        user.first_name,
                        user.last_name,
                        user.avatar,
                        user.email,
                        user.username

                    ]
                )
                id = result.fetchone()[0]
                # return self.create(id, user)
                # return id, user
                return user

  def delete(self, id: int) -> bool:
    try:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM accounts
                    WHERE id = %s
                    """,
                    [id]
                )
                return True
    except Exception as e:
        print(e)
        return False

  def update(self, id: int, user: AccountIn) -> Union[AccountOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE accounts
                        SET first_name = %s
                          , last_name = %s
                          , avatar = %s
                          , email = %s
                          , username = %s
                        WHERE id = %s
                        """,
                        [
                            user.first_name,
                            user.last_name,
                            user.avatar,
                            user.email,
                            user.username,
                            id
                        ]
                    )
                    return self.user_in_to_out(id, user)

        except Exception as e:
            print(e)
            return {"message": "Could not update user data"}

  def user_in_to_out(self, id: int, user: AccountOut):
      old_data = user.dict()
      return AccountOut(id=id, **old_data)

  def record_to_user_out(self, record):
        return AccountOut(
            id=record[0],
            first_name=record[1],
            last_name=record[2],
            avatar=record[3],
            email=record[4],
            username=record[5],
        )















#   def get_one_user(self) -> list[UserOut]:
#     with pool.connection() as conn:
#       with conn.cursor() as cur:
#         cur.execute(
#             """
#           SELECT *
#           FROM users
#           WHERE id = {id}
#             """)

#         user = cur.fetchone()

#         if user is None:
#           raise HTTPException(status_code=404, detail="User Not Found")

#         return user

#         # results = []
#         # for row in cur.fetchall():
#         #   record = {}
#         #   for i, column in enumerate(cur.description):
#         #     record[column.name] = row[i]
#         #   results.append(record)

#         # return results

# # not sure if this is doing anything..but its not breaking the code so far
#   def delete_user(user_id: int):
#     with pool.connection() as conn:
#         with conn.cursor() as db:
#             result = db.execute(
#                 """
#                 DELETE FROM users
#                 WHERE id = {id}
#                 """
#             )
#             return result, {"message": "User deleted successfully"}
