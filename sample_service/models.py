from pydantic import BaseModel
from pool import pool

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
                return self.create(id, user)
                # return id
