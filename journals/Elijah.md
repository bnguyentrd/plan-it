## January 4th, 2023 - Wednesday

Today, I worked on:

* Creating issues and setting up docker compose

Set up the application with the Docker Containers running.
Created some issues and assigned features to those issues.
Volunteered to work on Feature 4 - events
Set up PostgreSQL database

## January 5th, 2023 - Thursday

Today, I worked on:

* Creating the events microservice

Went through the tutorial and successfully
created the events microservice. Got the service succesfully
running on port 8001. Going to focus on creating some sample
entries and testing both the GET and POST methods.


## January 6th, 2023 - Friday

Today, I worked on:

* Creating the CRUD End Points for the Events Microservice

Got Some api endpoints functioning in the localhost:8001,
going to try and create sample data to test out the functions.
Set up routers, and a querie repo in the events microservice.


## January 7th, 2023 - Saturday

Today, I worked on:

* Setting up PgAdmin and fixing end points to successfully
create an event

Finished setting up the Pg Admin in the docker
compose file, and successfully connected the database.
Solved issue where password for database was returning an error.
Had to change some lines in the compose file to create a user
then set a password for the username. After deleting all volumes, images,
and containers in Docker, linking database server was successful.


## January 8th, 2023 - Sunday

Today, I worked on:

* Solving issue where database was showing it
existed but no tables were created

Solved Post Method for the event service, Originally
was returning a 400 status error. Problem was that i was missing
the migrations file completely, and had to configure the table
with proper values and set limits. As well as configuring the init
and main files. After congifuring the migrations files, i had to
run a docker command to run the migrations repo and confirm that
the database had successfully registered the events table. Saw that
the event table was now in the events db tried the post endpoint
again but noticed that i was recieving an error; However primary
keys were being generated solution was to use a try and except method
in the routers.events file.

New issue arised when trying to list an event using the id number.


## January 9th, 2023 - Monday

Today, I worked on:

* Finalizing all EndPoints for the events service

Finalized all CRUD endpoints, solved issues in the queries events.py file.
Solved issue when retrieving a single event using the ID value, simple error
just needed to return the record.



## January 10th, 2023 - Tuesday

Today, I worked on:

* Creatung an Event Post form in the front end

Created an Event Form, no css or styling just wanted to verify that
the configurations and urls actually allowed for the Front End to
directly input data in the database


## January 11th, 2023 - Wednesnday

Today, I worked on:

* Trying to intergrate the OpenWeather API

Got started on intergrating a third party API, did not succeed. Created
keys.py file and configured gitignore to not leak the API keys. Created a function
that retireved the lat and lon of an area in order to recieve the description
of the weather for that area in real time.


## January 12th, 2023 - Thursday

Today, I worked on:

* Creating a list page for the events

Brought total number of errors in console down from 12 to 4.
No styling or CSS just needed to verfiy that i can display the data in the
frontend. Created a Store repo in the GHI to store my eventsAPI, then called that API
in the List Form.


## January 13th, 2023 - Friday

Today, I worked on:

* Successfully got a functioning List page for events

Created a store folder that held the queries for the events on the list page,
was able to see all of the listed events with all the proper data. Started researching on
how to implement a third party API while using fastAPI


## January 16th, 2023 - Monday

Today, I worked on:

* Marthur Luther King JR holiday, worked on OpenWeatherAPI

minimal work, tried some solutions to implement weather api.
No success


## January 17th, 2023 - Tuesday

Today, I worked on:

* Successfully got the open weather API to function

Had to refactor events service to include city and state
variables instead of just a location, once the backend was working
after making the changes mentioned, reconfigured the routers file in
events to implement the weather on creation.

## January 18th, 2023 - Wednesday

Today, I worked on:

* implementing a delete button, creating a event detail page

Tried implementing a delete button in the list page for events,
but returned a 422 status error. Decided to create a detail page that would house
both the delete and update buttons. As well as the checklist feature


## January 19th, 2023 - Thursday

Today, I worked on:

* Successfully got a functioning detail page for events

Got the event detail page to function using the id number from
existing events. Tested URL to verify that inputted URLS would display an
image. Working on implementing delete and put methods for the event
detail page
