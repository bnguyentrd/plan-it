### January 27, 2023


### January 26, 2023


### January 25, 2023


### January 24, 2023


### January 23, 2023


### January 20, 2023


### January 19, 2023
Worked with group on deployment,


### January 18, 2023
Was able to get the foreign key relationship working, and all of the endpoints are done. Going to start working on frontend. Need to start merging my stuff with everyone elses and start getting ready to push to main.


### January 17, 2023
endpoints are done, but still having issues with this foreign key. I think I have something figured out, but need to test to make sure that when a checklist is created, that there is a corresponding event that already exists before one can be created.


### January 13, 2023
Most of my queries are done, Just need to add on to update and delete data. Also need to set up a one-to-many foreign key relationship with the events table. Not sure how to do that yet, but shouldn't be too hard. Should have the database and endpoints done by tomorrow.



### January 12, 2023
Figured out the batabase issue, needed to run 'python -m migrations up' in the docker container. Have since added it to my docker startup script so it should hopefully work from now on. Going to start working on the queries to work with the data.


### January 11, 2023

Got the endpoints to show on the fast-API docs page, but still need to make the queries, and the database (for checklists) is still not being created for some reason. Need to ask Elijah tomorrow how he got his running.


### January 10, 2023

Continued to work with group on auth, and helped resolve some docker issues

Started working on my database table, and have been running into some issues. I think I know how I want the data to be structured, but I can't create the table for some reason. Looking back throught the explorations, and recordings but nothing yet.


### January 9, 2023

Worked with Group on authorization requests. We were able to get users to log in to the applicatio. We also got the a backend endpoint (just a test one for now) that was protected via said authentication.

Began work on Checklist functionality of the "events" microservice backend. Not sure how i'm going to design the table for it yet. the variability of how large each checklist could be might add some complexity. idk


### January 6, 2023

Finished endpoints for creating, deleting, and getting user details
Got our events microservice running
finalized our issues

Today we will start looking into authentication to the user microservice,
and may make some slight changes to our issues.


### January 5, 2023

Today I worked on:

* fixing the create user method with the rest of the team.


### January 4, 2023

Today I worked on:

* creating issues in gitlab
worked with team to list all (current) issues in gitlab
