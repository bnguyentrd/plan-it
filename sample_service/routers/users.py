from fastapi import APIRouter, Depends, Response
from db import UserQueries
import models
from models import UserIn, UserRepository, UsersOut, UserOut, Error
from typing import Optional, Union

router = APIRouter()

@router.get("/api/users", response_model=UsersOut)
def users_list(queries: UserQueries = Depends()):
    return {
      "users": queries.get_all_users()
    }


# ATTEMPT 3 SUCCESS
@router.get("/api/users/{id}", response_model=UserOut)
def user_detail(
  id: int,
  response: Response,
  repo: UserRepository = Depends(),
) -> UserOut:
  return repo.get_one(id)


# ATTEMPT 2
# @router.get("api/users/{id}", response_model=Optional[UserOut])
# def get_user_detail(queries: UserQueries = Depends()):
#     return {
#       "user": queries.get_one_user()
#     }


# ATTEMPT 1
# @router.get("api/users/{id}", response_model=Optional[UserOut])
# def get_one_user(
#     id: int,
#     response: Response,
#     repo: UserRepository = Depends(),
# ) -> UserOut:
#     user = repo.get_one(id)
#     if user is None:
#         response.status_code = 404
#     return user





@router.post("/api/users")
def create_user(
    user: UserIn,
    repo: UserRepository = Depends()
):
    return repo.create(user)



@router.delete("/api/users/{id}", response_model=bool)
def delete_user(
    id: int,
    response: Response,
    repo: UserRepository = Depends(),
) -> bool:
    return repo.delete(id)


  # attempt 1
  # @router.delete("/api/users/{id}", response_model=bool)
  # def delete_user(id: int, queries: UserQueries = Depends()):
  #   queries.delete_user(id)
  #   return True

@router.delete("/token")
def log_out():
  pass

@router.post("/token")
def log_in():
  pass


@router.put("/api/users/{user_id}", response_model=Union[UserOut, Error])
def update_user(
    user_id: int,
    user: UserIn,
    repo: UserRepository = Depends(),
) -> Union[Error, UserOut]:
    return repo.update(user_id, user)


# @router.put("/api/users/{user_id}", response_model=UserOut)
# def update_user(
#     user_id: int,
#     user: UserIn,
#     repo: UserRepository = Depends()
# ) -> UserOut:
#     return repo.update(user_id, user)


# @router.put("/api/users/{user_id}", response_model=UserIn)
# def update_user(
#     user_id: int,
#     user: UserIn,
#     repo: UserRepository = Depends(),
# ) -> UserIn:
#     return repo.update(user_id, user)
