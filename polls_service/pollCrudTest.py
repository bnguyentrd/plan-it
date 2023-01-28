import unittest
from main import get_db, app, get_crud
import poll_schema

from fastapi.testclient import TestClient



class FakeCrud():
    def get_choices(self, db):
        return poll_schema.ChoiceList

def get_fake_crud():
        return FakeCrud()

class TestGetQuestions(unittest.TestCase):
    def test_get_questions(self):
        client = TestClient(app)
        app.dependency_overrides[get_db] = lambda:None
        app.dependency_overrides[get_crud] = get_fake_crud()
        response = client.get("/questions")
        self.assertEqual(response.status_code, 200)



class TestGetChoices(unittest.TestCase):
    def test_get_choices(self):
        client = TestClient(app)
        app.dependency_overrides[get_db] = lambda:None
        app.dependency_overrides[get_crud] = get_fake_crud()
        response = client.get("/choices")
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()
