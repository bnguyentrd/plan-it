from fastapi import APIRouter, Depends, Response, Request, HTTPException, status
from queries.accounts import AccountQueries
import models
from queries.accounts import AccountOut
from queries.accounts import AccountIn, AccountQueries, AccountsOut, AccountOut, Error, DuplicateAccountError
from typing import Optional, Union
from pydantic import BaseModel
# from .authenticator import authenticator

from jwtdown_fastapi.authentication import Token

router = APIRouter()


# @router.post("/api/things")
# async def create_thing(
#     account_data: Optional[dict] = Depends(authenticator.get_current_account_data),
# ):
#     if account_data:
#         return personalized_list
#     return general_list

class AccountToken(Token):
  account: AccountOut

class HttpError(BaseModel):
  detail: str

class AccountForm(BaseModel):
  username: str
  email: str
  password: str


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



# @router.post("/api/accounts", response_model=AccountToken | HttpError)
# async def create_account(
#     info: AccountIn,
#     request: Request,
#     response: Response,
#     accounts: AccountQueries = Depends(),
# ):
#     hashed_password = authenticator.hash_password(info.password)
#     try:
#         account = accounts.create(info, hashed_password)
#     except DuplicateAccountError:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="Cannot create an account with those credentials",
#         )
#     form = AccountForm(
#         username=info.username, email=info.email, password=info.password
#     )
#     token = await authenticator.login(response, request, form, accounts)
#     return AccountToken(account=account, **token.dict())








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
