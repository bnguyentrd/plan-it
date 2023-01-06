from fastapi import APIRouter, Depends, FastAPI
from db import UserQueries
import models
from models import UserIn, UserRepository, UsersOut, UserOut

router = APIRouter()
# app = FastAPI()

@router.get("/api/users", response_model=UsersOut)
def users_list(queries: UserQueries = Depends()):
  return {
    "users": queries.get_all_users()
  }



@router.post("/api/users")
def create_user(
    user: UserIn,
    repo: UserRepository = Depends()
):
    return repo.create(user)



# @router.post('/')
# def create_user(user: UsersOut):
#     response = user.post('/api/users/', json=user)
#     return response.json()
