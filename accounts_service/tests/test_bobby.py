from fastapi.testclient import TestClient
from queries.accounts import AccountQueries, DuplicateAccountError
from main import app


client = TestClient(app)


dummyAcc = {
    "username": "bob",
    "email": "bob@gmail.com", 
    "password": "password"
 }

expected_dummy_response = {
    'access_token': '',
    'account': {
        'email': 'bob@gmail.com', 
        'id': 1, 
        'username': 'bob'
        },
    'token_type': 'Bearer'
}

def test_create_account():
    class dummyAccQuery:
        def create(self, info, hashed_password):
            return {
                "id": "1",
                "username": "bob",
                "email": "bob@gmail.com",
                "hashed_password": "$2b$12$809yUgWByxrE0DZDWNcWE.vyviJ2/d1MnNrNv/kvAtdKN2Bcn5VZu",
            }

        def get(self, username):
            return {
                "id": "1",
                "username": "bob",
                "email": "bob@gmail.com",
                "hashed_password": "$2b$12$809yUgWByxrE0DZDWNcWE.vyviJ2/d1MnNrNv/kvAtdKN2Bcn5VZu",
            }

    app.dependency_overrides[AccountQueries] = dummyAccQuery

    response = client.post("/api/accounts/new", json=dummyAcc)

    assert response.status_code == 200

    test_response = response.json()
    test_response["access_token"] = ''

    assert test_response == expected_dummy_response

def test_duplicate_account():
    class fakeDuplicateAccQuery:
        def create(self, info, hashed_password):
            raise DuplicateAccountError

    app.dependency_overrides[AccountQueries] = fakeDuplicateAccQuery

    response = client.post("/api/accounts/new", json=dummyAcc)
    
    assert response.status_code == 400
    assert response.json() == {
        "detail": "Cannot create an account with those credentials"
    }
