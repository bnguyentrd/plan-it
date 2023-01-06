from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
# from queries.pool import pool

class Error(BaseModel):
    message: str


class EventIn(BaseModel):
    title: str
    location: str
    from_date: date
    to_date: date
    description: str
    url : Optional[str]
    weather: Optional[str]


class EventOut(BaseModel):
    id: int
    title: str
    location: str
    from_date: date
    to_date: date
    description: str
    url : Optional[str]
    weather: Optional[str]


class EventRepository:
    def get_one(self, event_id: int) -> Optional[EventOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                            , title
                            , location
                            , from_date
                            , to_date
                            , description
                            , url
                            , weather
                        FROM events
                        WHERE id = %s
                        """,
                        [event_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_event_out
        except Exception as e:
            print (e)
            return {"message": "Event Could Not Be Found"}
            pass
