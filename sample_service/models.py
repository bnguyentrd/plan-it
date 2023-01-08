from pydantic import BaseModel
from pool import pool
from typing import Optional, Union


class UserOut(BaseModel):
  id: int
  first_name: str
  last_name: str
  avatar: str
  email: str
  username: str

class UsersOut(BaseModel):
  users: list[UserOut]


class UserIn(BaseModel):
    first_name: str
    last_name: str
    avatar: str
    email: str
    username: str

class Error(BaseModel):
    message: str


class UserRepository:
    def create(self, user: UserIn) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO users
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
                        DELETE FROM users
                        WHERE id = %s
                        """,
                        [id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False



    def get_one(self, user_id: int) -> Optional[UserOut]:
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
                            FROM users
                            WHERE id = %s
                            """,
                            [user_id]
                        )
                        record = result.fetchone()
                        if record is None:
                            return None
                        return self.record_to_user_out(record)
            except Exception as e:
                print(e)
                return {"message": "Could find that user"}



    def record_to_user_out(self, record):
            return UserOut(
                id=record[0],
                first_name=record[1],
                last_name=record[2],
                avatar=record[3],
                email=record[4],
                username=record[5],
            )



    def update(self, user_id: int, user: UserIn) -> Union[UserOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE users
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
                            user_id
                        ]
                    )
                    return self.user_in_to_out(user_id, user)

        except Exception as e:
            print(e)
            return {"message": "Could not update user data"}


    def user_in_to_out(self, id: int, user: UserOut):
        old_data = user.dict()
        return UserOut(id=id, **old_data)
