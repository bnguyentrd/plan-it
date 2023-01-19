## Journals

Please keep all of your individual journals in this directory.

Each team member is required to keep a development journal, which should be a single markdown file with an entry for each day the project was worked on.

Recommended naming convention is `first_last.md`.

## January 2, 2023

Today, I worked on:

- Finished wireframe, endpoint design, and got started on writing Gitlab issues [x]

Today I started contributing with my team members on finishing
up our first iteration of our API endpoint design and successfully
forked and cloned our repository. I validated my account with GitLab
so that our pipeline isn't failing anymore.

## January 3, 2023

Today, I worked on:

- Project setup [x]

Today I lead our first daily stand up and used my notes
from Learn and Andrew's Lectures to compile a starting
code base to successfully see a GET response for "get_users_list"
using Fast API. I lead a group code-a-long session by
screensharing and acted as the "driver" whilst providing
a substantial amount of the code base and pushed my code
to my branch so that my team members could have a working copy.

## January 4, 2023

Today, I worked on:

- Create User POST REQUEST []

Screenshared for the entire coding session again. Most of our session today was revolving around decomposing yesterday's code to try to implement that same boilerplate code to a different function: Create User POST REQUEST. We were having issues with generating an id for a new user but James gave us some guidance and reading material. I learned that a lot of this is trial and error but it also involves taking a step back to freshen up my memory on how to write code for fast API. I had to comb through a lot of the videos concerning fast API from our winter study guide. Not much else was done on this project today because our LEARN Explorations was quite extensive.

## January 5, 2023

Today, I worked on:

- Create User POST REQUEST [x]
- Delete User DELETE REQUEST [x]
- User Detail GET REQUEST [x]

Although we're supposed to be doing pair-coding, our team came
to an agreement that it was beneficial for all to work together
on establishing a few user requests first so that we have
a working boilerplate on how to write our Fast API requests.

I screenshared my code for the entire coding session again to try to figure out how to get our post
request working. After much troubleshooting, our code seemed to "magically"
work although we still cant pinpoint what we did differently in order for it to function. My main concern is that upon starting my container, my
database container will automatically shut down, but upon restarting that individual container, it will stay on and function with no problems. I suspect that the container automatically shuts down because something in our code for that particular container depends on something else to successfully load. I will have to talk to a SEIR about this because this topic is a bit too open ended to find an answer online.

I also managed to finish writing the code to delete a user, and get user detail by myself but have yet to mark that issue as done since it needs a peer review.

## January 6, 2023

Today, I worked on:

- Figuring out Authentication
- Setting up pgAdmin
- Fully fixed USER DETAIL GET REQUEST [x]

Today I successfully got the User Detail PUT REQUEST to update user details successfully. I also noticed that the GET REQUEST for user detail was only working for users that exist but was returning a 500 error for users. I fixed that to return a 404 error instead to display null. We also started to work setting up pgAdmin and hopefully be able to start implementing authentication and authorization.

## January 9, 2023

Today, I worked on:

- Figuring out Authentication []
- Front End CSS Styling

Today I was able to successfully setup the authorization requests. Users are now able to log in and the backend will authorize a session token.
I was able to setup an example endpoint that would be locked for users who are not logged in. If a user is logged in, they should be able to see a generic boolean response as true and if users are not logged in, it should return a 401 response saying "Invalid token". Now the rest of the team should be able to implement this example to their respective endpoints to require users to log in before accessing locked features/endpoints on our app.

I also helped Bobby with some frontend code today, mainly css styling elements when trying to implement a carousel. We finally got a very barebones carousel working but it could be improved upon. I foresaw that getting authorization would be a huge blocker and so now I need to figure out what other issues I can tackle.

## January 10, 2023

Today, I worked on:

- Figuring out Authentication []
- Front End CSS Styling
- Front End Form [x]

Today I continued to work on authentication and realized that simply injecting "authenticator.get_current_account_data"
into Depends was giving me an error when I tried to apply it to a different request. I wanted to test it on a different
request coming from a different microservice other than users but we still didnt have our docker compose yaml file
configured properly so I took care of that along with setting up pgAdmin. Now I can see the events microservice running properly
but since I didnt touch anything in that microservice, I figured it was best to do some pair coding with Elijah tomorrow on that issue. Since I'm currently waiting on that, I moved onto writing a basic SignUpForm.js page and was able to successfully
create a user from the frontend and see it reflected on the backend. Now it just needs some styling. Moving forward, I can share the boilerplate code for my team members should they need to make a post request on any of their respective forms.

## January 12, 2023

Today, I worked on:

- Authentication
- Front End Styling Sign Up Form

Today I continued to work on Authentication and was finally able to login as a user. To verify that I could access
locked requests, I made a request to view account details which was also successful. The only issue now is that
we dont understand how to make sure that the data we're viewing as a logged in user is unique to said logged in user.
I havent had much time to look into it since we had a lot of explorations again and I was preoccupied with both my CSM
meeting and an interview. Hopefully, after looking at andrew's new zip files, I can gain some insight on what my code
is missing.


## Jan 13

Today, I worked on:

- Authentication
- Put Request to edit user data

Today I worked on allowing users to edit their account info and realized that the JSON body for the put request on the backend contains serveral attributes but the way we designed out frontend was to allow users to click a button to edit only one of those attributes. I am now dealing with a 422 unprocessible entity error which makes sense since I don't know how to set the attributes of the other fields to default to
the current user's data.

## Jan 17

Today, I worked on:

- Authentication

Today I worked on the put request to edit logged in user's account data again. I was able to successfully change the user's email from the front end by submitting a change to a single attribute but im not sure it's the cleanest way to write my code. At this point, I might have to make shallow copies of that code to with a different method to allow users to edit their username and email respectively. Im not even sure if I can have several put requests to the same endpoint so for now im bypassing that issue by using restful endpoints with the drawback of writing a separate detailed method in my queries.
