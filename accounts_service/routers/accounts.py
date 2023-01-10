from fastapi import (
  Depends,
  HTTPException,
  status,
  Response,
  APIRouter,
  Request)

from jwtdown_fastapi.authentication import Token
from .authenticator import authenticator
from pydantic import BaseModel


from queries.accounts import (
  Error,
  AccountIn,
  AccountOut,
  AccountsOut,
  AccountQueries,
  DuplicateAccountError)

from typing import Optional, Union

router = APIRouter()


# @router.post("/api/things")
# async def create_thing(
#     account_data: Optional[dict] = Depends(authenticator.get_current_account_data),
# ):
#     if account_data:
#         return personalized_list
#     return general_list

@router.get("/api/protected", response_model=bool)
async def get_protected(
  account_data: dict = Depends(authenticator.get_current_account_data),
):
  return True

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


# ATTEMPT 3 Only works for users that exist USER DETAIL
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



# ATTEMPT 2 USER DETAIL
# @router.get("api/users/{id}", response_model=Optional[UserOut])
# def get_user_detail(queries: UserQueries = Depends()):
#     return {
#       "user": queries.get_one_user()
#     }


# ATTEMPT 1 USER DETAIL
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




# CREATE ACCOUNT BASIC WORKING
# @router.post("/api/accounts")
# def create_account(
#     user: AccountIn,
#     repo: AccountQueries = Depends()
# ):
#     return repo.create(user)


@router.get("/token", response_model=AccountToken | None)
async def get_token(
  request: Request,
  account: AccountOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
      return {
        "access_token": request.cookies[authenticator.cookie_name],
        "type": "Bearer",
        "account": account,
      }





@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(
        username=info.username, email=info.email, password=info.password
    )
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())








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
