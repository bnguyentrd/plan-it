# import os
import sendgrid
from sendgrid.helpers.mail import Content, Email, Mail
from fastapi import APIRouter


router = APIRouter()

# sg = sendgrid.SendGridAPIClient(
#     # apikey=os.environ.get("SENDGRID_API_KEY")
#     apikey=('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')
# )
# from_email = Email("my@gmail.com")
# to_email = Email("planit.contactus@gmail.com")
# subject = "A test email from Sendgrid"
# content = Content(
#     "text/plain", "Here's a test email sent through Python"
# )
# mail = Mail(from_email, subject, to_email, content)
# response = sg.client.mail.send.post(request_body=mail.get())

# # The statements below can be included for debugging purposes
# print(response.status_code)
# print(response.body)
# print(response.headers)


@router.post("/send-email")
async def send_email():
    sg = sendgrid.SendGridAPIClient(
        # apikey=os.environ.get("SENDGRID_API_KEY")
        apikey=(
            "SG.BItvnL0TTJqEJW3TWr946g.\
                TxdP3qj6DMvRM8FlQ75soW0PiSwd17v480kT2UoxzXo"
        )
    )
    from_email = Email("my@gmail.com")
    to_email = Email("planit.contactus@gmail.com")
    subject = "A test email from Sendgrid"
    content = Content("text/plain", "Here's a test email sent through Python")
    mail = Mail(from_email, subject, to_email, content)
    response = sg.client.mail.send.post(request_body=mail.get())

    # The statements below can be included for debugging purposes
    print(response.status_code)
    print(response.body)
    print(response.headers)
