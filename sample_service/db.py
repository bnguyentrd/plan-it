import os
from psycopg_pool import ConnectionPool
from models import UserOut

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






