from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool

# from queries.acls import get_weather

# from queries.locations import locations


class Error(BaseModel):
    message: str


class EventIn(BaseModel):
    title: str
    city: str
    state: str
    from_date: date
    to_date: date
    description: str
    url: Optional[str]
    weather: Optional[str]


class EventOut(BaseModel):
    id: int
    title: str
    city: str
    state: str
    from_date: date
    to_date: date
    description: str
    url: Optional[str]
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
                          , city
                          , state
                          , from_date
                          , to_date
                          , description
                          , url
                          , weather
                        FROM events
                        WHERE id = %s
                        """,
                        [event_id],
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return self.record_to_event_out(record)
        except Exception as e:
            print(e)
            return {"message": "Event Could Not Be Found"}

    def delete(self, event_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM events
                        WHERE id = %s
                        """,
                        [event_id],
                    )
                    return True

        except Exception as e:
            print(e)
            return False

    def update(self, event_id: int, event: EventIn) -> Union[EventOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE events
                        SET title = %s
                          , city = %s
                          , state = %s
                          , from_date = %s
                          , to_date = %s
                          , description = %s
                          , url = %s
                          , weather = %s
                        WHERE id = %s
                        """,
                        [
                            event.title,
                            event.city,
                            event.state,
                            event.from_date,
                            event.to_date,
                            event.description,
                            event.url,
                            event.weather,
                            event_id,
                        ],
                    )
                    return self.event_in_to_out(event_id, event)
        except Exception as e:
            print(e)
            return {"message": "Changes Could Not Be Made"}

    def get_all(self) -> Union[Error, List[EventOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, title, city, state,\
                              from_date, to_date, description, url, weather
                        FROM events
                        ORDER BY from_date
                        """
                    )
                    return [
                        self.record_to_event_out(record) for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not retrieve all Events"}

    def create(self, event: EventIn) -> Union[EventOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO events
                            (title, city, state,\
                                  from_date, to_date,\
                                      description, url, weather)
                        VALUES
                            (%s, %s, %s, %s, %s, %s, %s, %s)
                        RETURNING id
                        """,
                        [
                            event.title,
                            event.city,
                            event.state,
                            event.from_date,
                            event.to_date,
                            event.description,
                            event.url,
                            event.weather,
                        ],
                    )
                    id = result.fetchone()[0]
                    return self.event_in_to_out(id, event)
        except Exception:
            return {"message": "Failed to Create Event"}

    def event_in_to_out(self, id: int, event: EventIn):
        old_data = event.dict()
        return EventOut(id=id, **old_data)

    def record_to_event_out(self, record):
        return EventOut(
            id=record[0],
            title=record[1],
            city=record[2],
            state=record[3],
            from_date=record[4],
            to_date=record[5],
            description=record[6],
            url=record[7],
            weather=record[8],
        )
