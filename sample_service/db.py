import os
from psycopg_pool import ConnectionPool
from models import UserOut
from fastapi import HTTPException
# from typing import Optional

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

class UserQueries:
  def get_all_users(self) -> list[UserOut]:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
            """
          SELECT id, first_name, last_name, avatar, email, username
          FROM users
          ORDER BY id
            """)

        results = []
        for row in cur.fetchall():
          record = {}
          for i, column in enumerate(cur.description):
            record[column.name] = row[i]
          results.append(record)

        return results

  def get_one_user(self) -> list[UserOut]:
    with pool.connection() as conn:
      with conn.cursor() as cur:
        cur.execute(
            """
          SELECT *
          FROM users
          WHERE id = {id}
            """)

        user = cur.fetchone()

        if user is None:
          raise HTTPException(status_code=404, detail="User Not Found")

        return user

        # results = []
        # for row in cur.fetchall():
        #   record = {}
        #   for i, column in enumerate(cur.description):
        #     record[column.name] = row[i]
        #   results.append(record)

        # return results

# not sure if this is doing anything..but its not breaking the code so far
  def delete_user(user_id: int):
    with pool.connection() as conn:
        with conn.cursor() as db:
            result = db.execute(
                """
                DELETE FROM users
                WHERE id = {id}
                """
            )
            return result, {"message": "User deleted successfully"}


  # def get_one(self, user_id: int) -> Optional[UserOut]:
  #       try:
  #           with pool.connection() as conn:
  #               with conn.cursor() as db:
  #                   result = db.execute(
  #                       """
  #                       SELECT id
  #                            , first_name
  #                            , last_name
  #                            , avatar
  #                            , email
  #                            , username
  #                       FROM users
  #                       WHERE id = %s
  #                       """,
  #                       [user_id]
  #                   )
  #                   record = result.fetchone()
  #                   if record is None:
  #                       return None
  #                   return self.record_to_user_out(record)
  #       except Exception as e:
  #           print(e)
  #           return {"message": "Could find that user"}



  # def record_to_user_out(self, record):
  #       return UserOut(
  #           id=record[0],
  #           first_name=record[1],
  #           last_name=record[2],
  #           avatar=record[3],
  #           email=record[4],
  #           username=record[5],
  #       )
