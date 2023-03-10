# authenticator.py
import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountQueries, AccountOut, AccountOutWithPassword


class PlanitAuthenticator(Authenticator):
    async def get_account_data(
        self,
        username: str,
        accounts: AccountQueries,
    ):
        # Use your repo to get the account based on the
        # email (which could be an email)
        return accounts.get(username)

    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(),
    ):
        # Return the accounts. That's it.
        return accounts

    def get_hashed_password(self, account: AccountOutWithPassword):
        # Return the encrypted password value from your
        # account object
        return account["hashed_password"]

    # suspected culprit
    # def get_account_data_for_cookie(self, account: AccountOut):
    #     # Return the username and the data for the cookie.
    #     # You must return TWO values from this method.
    #     return account.username, AccountOut(**account.dict())

    def get_account_data_for_cookie(self, account: AccountOut):
        # Return the username and the data for the cookie.
        # You must return TWO values from this method.
        return account["username"], AccountOut(**account)


authenticator = PlanitAuthenticator(os.environ["SIGNING_KEY"])
