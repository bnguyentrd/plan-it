##

### GET Token

- Endpoint method: GET (Get Token)
- Endpoint path: /token

- Good Response:
  {
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMTQxYjA3ZC03NDU3LTQ0ZmYtYTBhYi0wM2Y4NTVlNDIyMzUiLCJleHAiOjE2NzQ3Njk3MjYsInN1YiI6ImJ5ZSIsImFjY291bnQiOnsiaWQiOjIsInVzZXJuYW1lIjoiYnllIiwiZW1haWwiOiJieWVAZ21haWwuY29tIn19.doM_ammOUgLBW0IWxwVesUnmZFlQrhRGxgFpFYWSuec",
  "token_type": "Bearer",
  "account": {
  "id": 2,
  "username": "bye",
  "email": "bye@gmail.com"
  }
  }
- Bad Response:
  null

---

- Endpoint method: POST (Login)
- Endpoint path: /token

- Response:
  {
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNzE3NDU2Mi1mNTRmLTRlYzktOWE2Ni00ZmZhYTUyMzNjNzMiLCJleHAiOjE2NzQ3NzM5NjIsInN1YiI6ImJ5ZSIsImFjY291bnQiOnsiaWQiOjIsInVzZXJuYW1lIjoiYnllIiwiZW1haWwiOiJieWVAZ21haWwuY29tIn19.RiOgO7r2zrOrcodwv2wjK_T3UER5O41aF4GdIzFJMx4",
  "token_type": "Bearer"
  }
- Bad Response:
  {
  "detail": "Incorrect username or password"
  }

---

- Endpoint method: DELETE (Logout)
- Endpoint path: /token

- Response:
  true

---

- Endpoint method: GET (Accounts List)
- Endpoint path: /api/accounts

- Response:
  {
  "accounts": [
  {
  "id": 2,
  "username": "bye",
  "email": "bye@gmail.com"
  }
  ]
  }

---

- Endpoint method: GET (Account Detail)
- Endpoint path: /api/accounts{id}

- Response:
- JSON Body Example:
  {
  "accounts": [
  {
  "id": 2,
  "username": "bye",
  "email": "bye@gmail.com"
  }
  ]
  }

---

- Endpoint method: PUT (Update Account)
- Endpoint path: /api/accounts{id}

- Response:
  {
  "username": "string",
  "email": "string",
  "password": "string"
  }
- JSON Body:

---

- Endpoint method: DELETE (Delete Account)
- Endpoint path: /api/accounts{id}

- Response:
  true

---

- Endpoint method: POST (Create Account)
- Endpoint path: /api/accounts/new

- Response:
  {
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZmNmZDg1Zi1jMjVmLTQwNTEtOTgwMC1hYWQxMzYzZmNhNmIiLCJleHAiOjE2NzQ3NzQ1NzEsInN1YiI6InlvbG8iLCJhY2NvdW50Ijp7ImlkIjo0LCJ1c2VybmFtZSI6InlvbG8iLCJlbWFpbCI6InlvbG9AZ21haWwuY29tIn19.t4sAPh0MSKWdfWjp7L86GerzdSVGbh3f55wpxooGBUI",
  "token_type": "Bearer",
  "account": {
  "id": 4,
  "username": "yolo",
  "email": "yolo@gmail.com"
  }
  }
- JSON Body Example:
  {
  "username": "string",
  "email": "string",
  "password": "string"
  }

---

- Endpoint method: PUT (Update Email)
- Endpoint path: /api/accounts/{id}/email

- Response:
  true
- JSON Body Example:
  {
  "email": "youOnlyLiveOnce@gmail.com"
  }

---

- Endpoint method: PUT (Update Username)
- Endpoint path: /api/accounts/{id}/username

- Response:
  true
- JSON Body Example:
  {
  "username": "sayonara"
  }

---
