from fastapi import APIRouter, Depends
from db import UserQueries
import models
from models import UserIn, UserRepository, UsersOut

router = APIRouter()



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
