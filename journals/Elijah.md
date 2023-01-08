## January 4th, 2022 - Wednesday

Today, I worked on:

* Creating issues and setting up docker compose

Set up the application with the Docker Containers running.
Created some issues and assigned features to those issues.
Volunteered to work on Feature 4 - events
Set up PostgreSQL database

## January 5th, 2022 - Thursday

Today, I worked on:

* Creating the events microservice

Went through the tutorial and successfully
created the events microservice. Got the service succesfully
running on port 8001. Going to focus on creating some sample
entries and testing both the GET and POST methods.


## January 6th, 2022 - Friday

Today, I worked on:

* Creating the CRUD End Points for the Events Microservice

Got Some api endpoints functioning in the localhost:8001,
going to try and create sample data to test out the functions.
Set up routers, and a querie repo in the events microservice.


## January 7th, 2022 - Saturday

Today, I worked on:

* Setting up PgAdmin and fixing end points to successfully create an event

Finished setting up the Pg Admin in the docker
compose file, and successfully connected the database. Solved issue where password for database was returning an error. Had to change some lines in the compose file to create a user then set a password for the username.
After deleting all volumes, images, and containers in Docker, linking database server was successful.


## January 8th, 2022 - Sunday - 1:00AM

Today, I worked on:

* Solving issue where database was showing it existed but no tables were created

Solved Post Method for the event service, Originally was returning a 400 status error.
Problem was that i was missing the migrations file completely, and had to configure the table with proper values and set limits. As well as configuring the init and main files.
After congifuring the migrations files, i had to run a docker command to run the migrations repo and confirm that the database had successfully registered the events table. Saw that the event table was now in the events db tried the post endpoint again but noticed that i was recieving an error; However primary keys were being generated - solution was to use a try and except method in the routers.events file.

New issue arised when trying to list an event using the id number.
