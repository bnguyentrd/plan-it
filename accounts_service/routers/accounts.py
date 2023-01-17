from fastapi import (
  Body,
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
  EmailIn,
  EmailOut,
  AccountIn,
  AccountOut,
  AccountsOut,
  AccountQueries,
  DuplicateAccountError)

from typing import Optional, Union

import re

def is_valid_email(email: str) -> bool:
    pattern = re.compile(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
    return pattern.match(email) is not None





router = APIRouter()




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


@router.get("/api/accounts/{id}", response_model=Optional[AccountOut])
def account_detail(
  id: int,
  response: Response,
  # repo: AccountQueries = Depends(authenticator.get_current_account_data),
  account: dict = Depends(authenticator.get_current_account_data),
  repo: AccountQueries = Depends(),
) -> AccountOut:
  print("this is the repooooooooooooooooooooooooooooooooooooooooooooooooo", repo)
  user = repo.get_one(id)
  if user is None:
    response.status_code= 404
  return user


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


@router.post("/api/accounts/new", response_model=AccountToken | HttpError)
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


# working but includes all attributes for input
# @router.put("/api/accounts/{id}", response_model=Union[AccountOut, Error])
# def update_account(
#     id: int,
#     user: AccountIn,
#     account: dict = Depends(authenticator.get_current_account_data),
#     repo: AccountQueries = Depends(),
# ) -> Union[Error, AccountOut]:
#     return repo.update(id, user)


# @router.put("/api/accounts/{id}", response_model=Union[EmailOut, Error])
# def update_account(
#     id: int,
#     email_update: EmailIn,
#     account: dict = Depends(authenticator.get_current_account_data),
#     repo: AccountQueries = Depends(),
# ) -> Union[Error, AccountOut]:
#     repo.update_email(id, email_update.email)
#     return repo.get_one(id)


@router.put("/api/accounts/{id}", response_model=Union[EmailOut, Error])
def update_email(
    id: int,
    email: Optional[EmailOut] = Body(None),
    account: dict = Depends(authenticator.get_current_account_data),
    repo: AccountQueries = Depends(),
) -> Union[Error, EmailOut]:
    if email and email.email:
        if not is_valid_email(email.email):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Invalid Email')
        return repo.update_email(id, email.email)
    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Email is required')
