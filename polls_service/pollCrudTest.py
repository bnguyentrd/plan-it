import unittest
<<<<<<< HEAD
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

=======

from fastapi.testclient import TestClient
from main import app


class TestGetQuestions(unittest.TestCase):
    def test_get_questions(self):
        client = TestClient(app)
        response = client.get("/questions")
        self.assertEqual(response.status_code, 200)
        # self.assertIsInstance(response.json(), list)
        # for question in response.json():
        #     self.assertIsInstance(question, dict)
        #     self.assertIn("id", question)
        #     self.assertIn("title", question)
        #     self.assertIn("question_text", question)
        #     self.assertIn("is_active", question)
>>>>>>> 43299fe8011bb6cd48093fd49f828afbd8dcc8b6


class TestGetChoices(unittest.TestCase):
    def test_get_choices(self):
        client = TestClient(app)
<<<<<<< HEAD
        app.dependency_overrides[get_db] = lambda:None
        app.dependency_overrides[get_crud] = get_fake_crud()
        response = client.get("/choices")
        self.assertEqual(response.status_code, 200)

=======
        response = client.get("/choices")
        self.assertEqual(response.status_code, 200)


>>>>>>> 43299fe8011bb6cd48093fd49f828afbd8dcc8b6
if __name__ == "__main__":
    unittest.main()
