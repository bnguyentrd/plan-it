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

## Jan 18

Today, I worked on:

- Docker-compose yml
- Troubleshooting to get seperate microservices running
- Troubleshooting uncovered errors after merging

Today Elijah announced that he got his events microservice running properly on both the frontend and backend but up to this point,
he was still only running his service off of the old docker-compose yml file so Bobby and I had to figure out how to configure it properly.
We eventually got it to work and verified that his code was indeed working. Now that we have a better understanding of the git workflow,
Bobby and I are merging our code so that his updated Navigation menu is populating on most pages. This was important because it allowed me to
see how the Navigation menu was behaving depending on the state of the user's login status. I am now currently trying to wrap my head around
how a page rerenders so that it is considered a SPA. If the nav menu is it's own component that needs to rerender
everytime there's a change to the logged in status of the user, how do i rerender the nav component?

As of now, when logged in, clicking logout link successfully logs out and redirects the user to the main page but the logout link still visible despite
the user being logged out. I am verifying this by using the docs on the backend to check if the token is null.

## Jan 19

Today, I worked on:

- Fixing the lint test issue
- Deployment
- CI/CD setup

Today I worked on figuring out why all my pushes to my dev branch was constantly failing. It was because of the lint test but after following
the lecture video, I couldnt run "black" like how Andrew did in the lecture. I found in the documentation that you had to use "python -m" before
using black commands in the terminal. After that test finally passed, I noticed that the unit test was failing which was expected because we havent written
any unit tests yet. I hope that isn't a prerequisite for deployment because that's what we're trying to do today as a team. After getting everybody up to speed
with the code, we did our first merge request to main today and learned how to approve it from gitlab. Since our main branch is now up to date, we started working on deployment and expect to run into many errors because of its seemingly long list of complex steps. So far our first issue is that we dont have an
image to copy from the container registry. Bobby and I also brainstormed some footer designs for the frontend to implement if we manage to get our mvps done. Currently watching videos and reading documentation for deployment setup.

## Jan 20

Today, I worked on:

- Deployment
- CI/CD setup/configuration
- unit test

Today I worked on figuring out deployment and finally got my builds and to stop failing and also got pages to deploy after much trial and error. I now have a clean pipeline but now im running into another issue. When trying to make a request to anything regarding my specific microservice for accounts, I get a generic 500 Internal error. However, I'm still getting a 200 response when I request to get a token despite the token being null so I know that im able to get some kind of response. I think the issue is that my migrations isnt going through when I deploy since I cant see my tables anywhere when accessing pgAdmin. I suspect that somewhere in my configuration, I'm not linking up my database correctly. This has been a huge blocker for the past two days so on my off time, I started working on a unit test to test an endpoint to get an account. I suppose my first "ah-ha!" moment was that I realized these journals needed an "ah-ha" moment at the end of each entry. Another one for today would probably be the unit test.
It was nice to see the unit test behave the way I expected it to, and then purposefully breaking my code to see the unit test fail.

## Jan 23

Today, I worked on:

- Deployment

Today I did not have as much time to write much code since I attended the optional lectures on deployment. After changing a few lines of code in my Dockerfile
and my docker-compose-yml file, I was finally able to connect my database to accounts. On the deployed backend docs page, Im no longer getting a 500 error and can successfully create an account and view all acounts. I did some extra research on implementing zustand which is an alternative to react redux. Currently, the logout, login, and signup links in the nav menu is behaving properly based on the client's logged in state. The only issue now is that upon initial loading of the app, the login link is not appearing, I have to go to account detail which will redirect me to the login page to test it. Since I dont have enough
knowledge on using zustand or redux just yet, I have to spend time on more research and will hopefully be able to help my teammates on their issues.


## Jan 24

Today, I worked on:

- Deployment

Today I spent all day working on deployment again. I was able to deploy Elija's events microservice but not without running into a "Mixed Content" Error. After Andrew's suggestion, I went into my code to remove all trailing backslashes and reran the pipeline but I was still getting the error. It wasn't until refreshing the webpage with the option to clear the cache did it finally work. The next hurdle was configuring Graham's microservice since his microservice was implementing SQLalchemy. Since his microservice's file structure was different, it was difficult to figure out which variables needed to be modified for his dockerfile. My "a-ha!" moment today was figuring out the refresh/cache clearing issue and my second "a-ha" moment was figuring out that the dockerfile for Graham's code needed to have COPY commands for every python file in his code. I only have one more microservice to implement and moving forward, we can finally start troubleshooting the functionality of the deployed apps since im sure there will be differences in functionality compared to running things locally.


## Jan 25

Today, I worked on:

- Authentication

Today I spent all day getting nowhere trying to figure out deployment again. I had made decent progress trying to manage state using zustand but it wasn't quite where I wanted it to be. Unfortunately, when asking for help, the SEIRS and instructors were limited in their ability to troubleshoot with me since they never used it before. They also said I was using my auth code incorrectly by calling on getinternaltoken. I eventually refactored my code backto the boilerplate auth code and learned that the order in which I can my functions from auth matters which was a huge "ah-ha" moment. Although I didnt finish and felt like i made very little progress, I had a moment where I realized that everything im learning now was so complex that if I had to explain this to myself in module 1, I would be overwhelmed so overall im proud of my progress. I just hop I dont drag down my teammates especially after putting in so many late nights since the beginning of this module.




## Jan 26

Today, I worked on:

- Authentication

Today I was finally able to get authentication working for accounts. Users are now able to log in, logout, and signup. Managing the state now works as intended by using ternary operators to display links that are dependent on the logged in state of the user. Although we still need more functionality for our mvp, our instructor recommended that I should make sure that deployment was up and running. The biggest issue with that is that my teammates code is not where they want to be so they are currently dealing with merge requests but after every merge request, there are a lot of conflicts to resolve. Its not until everything is updated can I make the final merge to main to make sure we have a functioning deployed site on gitlab and caprover. 
