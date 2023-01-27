import unittest

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


class TestGetChoices(unittest.TestCase):
    def test_get_choices(self):
        client = TestClient(app)
        response = client.get("/choices")
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()
