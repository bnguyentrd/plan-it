from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.events import (
    Error,
    EventIn,
    EventRepository,
    EventOut
)

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
    return event


@router.post("/events", response_model=Union[EventOut, Error])
def create_event(
    event: EventIn,
    response: Response,
    repo: EventRepository = Depends(),
):
    response.status_code = 400
    return repo.create(event)
