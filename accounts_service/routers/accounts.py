from fastapi import APIRouter, Depends, Response
from queries.accounts import AccountQueries
import models
from queries.accounts import AccountOut
from queries.accounts import AccountIn, AccountQueries, AccountsOut, AccountOut, Error
from typing import Optional, Union

router = APIRouter()


# @router.post("/api/things")
# async def create_thing(
#     account_data: Optional[dict] = Depends(authenticator.get_current_account_data),
# ):
#     if account_data:
#         return personalized_list
#     return general_list




@router.get("/api/accounts", response_model=AccountsOut)
def accounts_list(queries: AccountQueries = Depends()):
    return {
      "accounts": queries.get_all_accounts()
    }


# ATTEMPT 3 Only works for users that exist
# @router.get("/api/users/{id}", response_model=UserOut)
# def user_detail(
#   id: int,
#   response: Response,
#   repo: UserRepository = Depends(),
# ) -> UserOut:
#   user = repo.get_one(id)
#   if user is None:
#     response.status_code= 404
#   return user



@router.get("/api/accounts/{id}", response_model=Optional[AccountOut])
def account_detail(
  id: int,
  response: Response,
  repo: AccountQueries = Depends(),
) -> AccountOut:
  user = repo.get_one(id)
  if user is None:
    response.status_code= 404
  return user



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





@router.post("/api/accounts")
def create_account(
    user: AccountIn,
    repo: AccountQueries = Depends()
):
    return repo.create(user)



@router.delete("/api/accounts/{id}", response_model=bool)
def delete_account(
    id: int,
    response: Response,
    repo: AccountQueries = Depends(),
) -> bool:
    return repo.delete(id)


  # attempt 1 = FAIL
  # @router.delete("/api/users/{id}", response_model=bool)
  # def delete_user(id: int, queries: UserQueries = Depends()):
  #   queries.delete_user(id)
  #   return True




@router.put("/api/accounts/{id}", response_model=Union[AccountOut, Error])
def update_account(
    id: int,
    user: AccountIn,
    repo: AccountQueries = Depends(),
) -> Union[Error, AccountOut]:
    return repo.update(id, user)

# FAIL
# @router.put("/api/users/{user_id}", response_model=UserOut)
# def update_user(
#     user_id: int,
#     user: UserIn,
#     repo: UserRepository = Depends()
# ) -> UserOut:
#     return repo.update(user_id, user)

# FAIL
# @router.put("/api/users/{user_id}", response_model=UserIn)
# def update_user(
#     user_id: int,
#     user: UserIn,
#     repo: UserRepository = Depends(),
# ) -> UserIn:
#     return repo.update(user_id, user)
