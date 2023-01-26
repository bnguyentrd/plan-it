from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.events import Error, EventIn, EventRepository, EventOut
from authenticator import authenticator

# test
# from ...accounts_service.queries.accounts import AccountQueries

from queries.acls import get_weather


router = APIRouter()

# TEST
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
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: EventRepository = Depends(),
):
    try:
        # event.weather = get_weather(event.city, event.state)["description"]
        user_id = account_data["id"]
        if account_data["email"]:
            return repo.create(event, user_id)
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
