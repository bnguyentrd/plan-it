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

-

<!--
Petra and I had a hard time figuring out the logic
for what happens when a customer signs up. We
finally came to the conclusion that not only did we
have to create the `User` record, but we also needed
to create associated preference records **and** had
to log them in.

Today, database transactions finally clicked. It
happened while we were trying to insert the
preferences for the customer. We had a bug in the
code, so the `User` record got created, but none
of the preferences. All of the inserts should
succeed or fail together. So, we used a transaction
to do that. -->
