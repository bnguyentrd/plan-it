import unittest
from routers.accounts import AccountQueries, AccountOut


class TestAccountQueries(unittest.TestCase):
    def test_get_all_accounts(self):

        # Arrange
        account_queries = AccountQueries()

        # Act
        accounts = account_queries.get_all_accounts()

        # Assert
        self.assertIsInstance(accounts, list)
        for account in accounts:
            self.assertIsInstance(account, AccountOut)
            self.assertIsInstance(account.id, int)
            self.assertIsInstance(account.username, str)
            self.assertIsInstance(account.email, str)


if __name__ == "__main__":
    unittest.main()
