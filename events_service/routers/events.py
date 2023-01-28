from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.events import Error, EventIn, EventRepository, EventOut


from queries.acls import get_weather, get_photo


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

def get_weather_getter():
    return get_weather

def get_photo_getter():
    return get_photo


@router.post("/events", response_model=Union[EventOut, Error])
def create_event(
    event: EventIn,
    response: Response,
    repo: EventRepository = Depends(),
    get_weather = Depends(get_weather_getter),
    get_photo = Depends(get_photo_getter),
):
    try:
        
        event.weather = get_weather(event.city, event.state)["description"]
        event.url = get_photo(event.city, event.state)["picture_url"]
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
    event.weather = get_weather(event.city, event.state)["description"]
    event.url = get_photo(event.city, event.state)["picture_url"]
    return repo.update(event_id, event)


@router.delete("/events/{events_id}", response_model=bool)
def delete_event(
    event_id: int,
    repo: EventRepository = Depends(),
) -> bool:
    return repo.delete(event_id)
