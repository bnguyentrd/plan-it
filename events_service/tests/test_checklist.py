from fastapi.testclient import TestClient
from main import app
from queries.checklists import ChecklistIn, ChecklistOut


client = TestClient(app)

expected_post_response = {
    "id": 1,
    "event_id": 1,
    "items": ["list"],
    "status": ["false"],
}


class MockChecklistIn:
    def create_checklist(self, new_checklist):
        return expected_post_response


def test_create_truck():
    # Arrange
    req_body = {"event_id": 1, "items": ["list"], "status": ["false"]}

    app.dependency_overrides[ChecklistIn] = MockChecklistIn

    # Act
    res = client.post("/checklists", json=req_body)
    # actual = res.json()

    # Assert
    assert res.status_code == 200

    # clean up
    app.dependency_overrides = {}
