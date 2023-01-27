# Plan-it

Created by:
- Bobby Nguyen
- Elijah
- Connor
- Graham
- Steven Tran


## Project Description
Plan-it is a comprehensive, user-friendly web-application that streamlines the event planning process by providing a one-stop-shop for managing all aspects of an event, from creating and customizing invitations to tracking RSVPs and managing guest lists.

- Plan-it is a web-application that allows users to manage events and invite their friends
- Users can sign up, log in, and delete an account.
- Logged in users can edit their username, profile picture, and email.
- Logged in users can create events to participate in and invite their friends via email.
- Logged in users can create a general checklist for events
- Logged in users can vote on a poll for events they're participating in.


Front-end deployed via Gitlab Pages.
Back-end deployed via Caprover.


## Initializing the Project

1. Fork and clone this project using this link: https://gitlab.com/plan-it1/module3-project-gamma
2. Copy and clone HTTPS link into a directory of your choice
3. Open a command terminal and cd into your chosen directory
4. Run `docker volume create postgres-data`
5. Run `docker-compose build`
6. Run `docker-compose up`
7. Ensure all containers are running properly in your Docker Desktop
8. To view app in your browser, navigate to : http://localhost:3000


## Functionality
- When users access the app, they will have access to sign up for an account
- Users will have the ability to log in, logout, edit their username and email, and delete their account.
- Logged in users


## Testing

To verify that this application works on your computer, follow these steps after Initializing the Project.

1. Open accounts_service container
2. Run `python -m pytest`
