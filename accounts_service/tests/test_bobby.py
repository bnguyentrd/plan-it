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

# test_create_account tests the functionality of the
# create an account end point, which attempts to log
# the user in after successful account creation
# and responds with the access_token, token_type, and 
# account info
def test_create_account():
    class dummyAccQuery:
        # Simulate a create() to create an account, returning the 
        # details including password in a hashed form
        def create(self, info, hashed_password):
            return {
                "id": "1",
                "username": "bob",
                "email": "bob@gmail.com",
                "hashed_password": "$2b$12$809yUgWByxrE0DZDWNcWE.vyviJ2/d1MnNrNv/kvAtdKN2Bcn5VZu",
            }

        # Simulate a get() to get an account's details including 
        # password in a hashed form
        def get(self, username):
            return {
                "id": "1",
                "username": "bob",
                "email": "bob@gmail.com",
                "hashed_password": "$2b$12$809yUgWByxrE0DZDWNcWE.vyviJ2/d1MnNrNv/kvAtdKN2Bcn5VZu",
            }

    # Override the original AccountQueries dependency with a dummy version
    app.dependency_overrides[AccountQueries] = dummyAccQuery

    # Test the POST request and assign the response to the variable response
    response = client.post("/api/accounts/new", json=dummyAcc)

    # Check the status code if it was successful
    assert response.status_code == 200

    # After receiving the response,
    # given that if the response does have an access_token key,
    # it means that the creation process was successful
    # so it does not matter what the value is inside the access_token
    # therefore we can erase the contents of access_token
    test_response = response.json()
    test_response["access_token"] = ''

    # Assert that the response matches the expected response
    assert test_response == expected_dummy_response

# test_duplicate_account tests the functionality of the same end point
# in handling a DuplicateAccountError, which is triggered when 
# a user attempts to create an account using details of an existing 
# account
def test_duplicate_account():
    class fakeDuplicateAccQuery:
        # Simulate a create() to create an account, but raises a 
        # DuplicateAccountError due to duplicate details used 
        # to create the account
        def create(self, info, hashed_password):
            raise DuplicateAccountError

    # Override the original AccountQueries dependency with a fake version
    app.dependency_overrides[AccountQueries] = fakeDuplicateAccQuery

    # Test the POST request and assign the response to the variable response
    response = client.post("/api/accounts/new", json=dummyAcc)
    
    # Check if the response status code is appropriate for the error 
    # Check if the response body is as expected
    assert response.status_code == 400
    assert response.json() == {
        "detail": "Cannot create an account with those credentials"
    }
