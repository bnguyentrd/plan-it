from fastapi import APIRouter, Depends, FastAPI, Response
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



  # @router.delete("/api/users/{id}", response_model=bool)
  # def delete_user(id: int, queries: UserQueries = Depends()):
  #   queries.delete_user(id)
  #   return True


@router.delete("/api/users/{id}", response_model=bool)
def delete_user(
    id: int,
    response: Response,
    repo: UserRepository = Depends(),
) -> bool:
    return repo.delete(id)
