from fastapi.testclient import TestClient
from queries.events import EventRepository
from main import app
from routers.events import get_photo_getter, get_weather_getter


client = TestClient(app)

expected_post_response = {
    "id": 1,
    "title": "testing",
    "city": "Tucson",
    "state": "AZ",
    "from_date": 2023 - 1 - 10,
    "to_date": 2023 - 1 - 12,
    "description": "testing test",
    "url": "none",
    "weather": "None",
}


class MockEventRepository:
    def create(self, new_event):
        return expected_post_response


def fake_weather_getter():
    return lambda city, state: {"description": "weather"}


def fake_photo_getter():
    return lambda city, state: {"picture_url": "photo"}


def test_create_event():
    req_body = {
        "id": 1,
        "title": "ex",
        "city": "Tucson",
        "state": "AZ",
        "from_date": 2023 - 1 - 10,
        "to_date": 2023 - 1 - 12,
        "description": "testing test",
        "url": "none",
        "weather": "None",
    }

    app.dependency_overrides[EventRepository] = MockEventRepository
    app.dependency_overrides[get_weather_getter] = fake_weather_getter
    app.dependency_overrides[get_photo_getter] = fake_photo_getter

    res = client.post("/events", json=req_body)

    assert res.status_code == 200

    app.dependency_overrides = {}


# class TestEventQueries(unittest.TestCase):
#     def test_get_events(self):

#         event_queries = EventRepository()
#         events = event_queries.get_all()
#         self.assertIsInstance(events, list)
#         for event in events:
#             self.assertIsInstance(event, EventOut)
#             self.assertIsInstance(event.id, int)
#             self.assertIsInstance(event.title, str)
#             self.assertIsInstance(event.city, str)
#             self.assertIsInstance(event.state, str)
#             self.assertIsInstance(event.from_date, date)
#             self.assertIsInstance(event.to_date, date)
#             self.assertIsInstance(event.description, str)
#             self.assertIsInstance(event.url, str)
#             self.assertIsInstance(event.weather, str)


# if __name__ == "__main__":
#     unittest.main()
