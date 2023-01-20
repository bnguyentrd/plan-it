from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.events import (
    Error,
    EventIn,
    EventRepository,
    EventOut
)

from queries.acls import get_weather


router = APIRouter()

@router.get("/events/{event_id}", response_model=Optional[EventOut])
def get_one_event(
    event_id: int,
    response: Response,
    repo: EventRepository = Depends(),
) -> EventOut:
    event = repo.get_one(event_id)
    if event is None:
        response.status_code = 404
    else:
        return event


@router.post("/events", response_model=Union[EventOut, Error])
def create_event(
    event: EventIn,
    response: Response,
    repo: EventRepository = Depends(),
):
    try:
        event.weather = get_weather(event.city, event.state)["description"]
        # print("::::::::::", event)
        return repo.create(event)
    except Exception:
        response.status_code = 400


@router.get("/events", response_model=List[EventOut])
def get_all(
    repo: EventRepository = Depends(),
):
    return repo.get_all()


@router.put("/events/{events_id}", response_model=Union[EventOut, Error])
def update_event(
    event_id: int,
    event: EventIn,
    repo: EventRepository = Depends(),
) -> Union[Error, EventOut]:
    return repo.update(event_id, event)


@router.delete("/events/{events_id}", response_model=bool)
def delete_event(
    event_id: int,
    repo: EventRepository = Depends(),
) -> bool:
    return repo.delete(event_id)
