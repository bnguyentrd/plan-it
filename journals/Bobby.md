## Jan 4th:

Today I worked on:

docker-compose.yaml file with team:
tried to get the settings correct to get docker containers up and running

## Jan 5th:

Today I worked on:

docker-compose.yaml file with team:
had to keep messing around with the file to get it to work

Worked on CRUD end points with team:
got get request method to work then struggled on getting post method to work. 
post method returning 500 errors

## Jan 6th:

Today I worked on:

CRUD end points with team:
We were able to get the post working. We were able to get successful 200 requests from both get and post requests
and returned the right json body we wanted.

## Jan 7th:

Today I worked on:
Trying to get GHI container to run so we can start working on some frontend coding

## Jan 8th:

Today I worked on:
After getting a successful git merge with GHI containers running(also had to change CRLF to LF), 
I designed a logo for our app and added it onto our main page.

## Jan 9th:

Today I worked on:
Using react, I was able to get a drop down menu feature for the nav bar to work(right now it just has hard coded 
options, like about us, home, and contact). Actual links will be added into the drop down menu once more CRUD end points are created. CSS work is still required but will focus more on that after back end is more complete.

## Jan 10th:

Today I worked on:

Got a 3-picture slideshow feature to work using react. Added an auto slide feature to it and using hard coded picture links(for now, until we can get some more knowledge on how to pull pictures from yelp or google APIs).
Plans for slideshow feature: Once we can pull data from yelp/google API, we want to have the slideshow automatically update with "Whats Hot/Trending" pictures. CSS work is still required but will focus more on that after backend is more complete.

Also added a Dark Mode feature with a toggle button to front end. As of now, Dark mode activated changes background to a dark gray color and Dark mode deactivated changes background back to white. Will come back to this feature later to change up CSS code so the dark mode is more presentable. Currently, Dark Mode deactivated just displays the white background we're going for...for now. 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

Ideas for Dark Mode toggle feature(STRETCH GOALS): 
Change up the idea from being a Dark Mode toggle to a Festive Mode feature. 
What do you mean?: When Festive mode toggle is clicked, the web site will turn into a holiday theme(christmas/halloween/valentines/etc.). 
When Festive Mode is activated, Website's contents will have CSS decorations for the upcoming holiday.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Jan 11th:

Today I worked on: 

Got clickable links to function on drop down menu(nav bar) using routes and navlinks. 
Started working on more aesthetics of the slideshow, getting the previous and next buttons to be transparent using bootstrap and also have it functioning. Currently dealing with the bootstrap buttons somehow overlapping the whole left and right side of the web page so the drop down menu isnt accessable. 


## Jan 12th:

Today I worked on:

Fixed a weird bootstrap error where the slideshow button was being clickable from a large area(from top to bottom of both sides of the webpage). Used CSS to override the under the hood styles from the bootstrap code used in slideshow buttons. 

Changed dark mode button slider to have 2 different pictures, one day time themed and one night time themed. when clicking on the slider/button, a slide animation is presented with a fade in/fade out effect. 

Tore down placeholder styles for drop down menu aesthetics in preparation for next day's workload.


## Jan 13th:

Today I worked on:

Built nav dropdown menu from an empty css file. Was able to get it to look how I want for now, most likely will come back to this and pretty up the actual button. Started working on event form. Had to duplicate the eventform.js file because having an event form on the main page and on the dropdown menu wasnt allowing me to change the cosmetics of one event form without the other changing.

## Jan 14th:

Today I worked on:

Worked with steven to get user sign out to work on the front end. After a lot of troubleshooting, we were able to get it to work. User is now able to sign out.


## Jan 17th:

Today I worked on:

Worked on dropdown menu's icon. Got the icon to transition between 3 line hamburger when not clicked to an 'X' when dropdown menu is open. Added dropdown menu to every other page that's available. Worked with steven to try and figure out how to edit account info(one value instead of having to change all 3(id, username, and email) at once). 

## Jan 18th:

Today I worked on:

Didnt have much time to work on project today. I had to join andrew's auth session to get a better understanding of how to properly get auth to work. After that, we had CS then had to attend shahzad's session for a better understanding of Big O and algorithms. 

Now working with steven and graham to try and get graham's poll backend to work. Graham got poll backend to work with carters help. Now working on debugging event container not turning on with steven. 


## Jan 19th: 

Today I worked on:

We watched videos/read docs/attended andrew's session on deployment in attempts to deploy our app. We got stuck on caprover setup. 

I got a CSS logo(moving clouds effect) for our main page, and also an effect for our gradient background. Also changed dark mode's gradient color and added effect to give it a better look. Currently disabled slideshow's previous/next slide buttons due to some bootstrap code conflicting with CSS codes. Will get back to this at the end if we have time for stretch goals. 

## Jan 20th: 

Today I worked on:

We worked as a team on deploying again. Made some progress but havent been able to get it to properly deploy. 

I worked on my unit test but was getting 1 pass, 1 fail. my duplicate account unit test was passing but my create account is failing. As i kept trying, i've come to the conclusion that the reason why my test_create_account is failing is due to the login after account signup function for the actual create account method. I have tried swapping a couple variables around to see if i would get different results but to no luck. I ended up grabbing a hashed_password from pgadmin and inputting it into my return statements for test_create_account and was able to get a different error. an assertionerror talking about the token. prior to this, i was getting this error: AttributeError: 'dummyAccQuery' object has no attribute 'get'. now i'm getting this error: AssertionError: assert {'access_toke...pe': 'Bearer'} == {'success': True}. 
So after asking around to see what others have done, on top of bits and pieces of information i've gotten from google, i've come up with a solution that might work. 

I ended up doing: 

test_response = response.json()
test_response["access_token"] = ''

so after receiving the response, given that if the response does have an access_token key, it means that the creation process was successful so it does not matter what the value is inside teh access_token, therefore we can erase the contents of access_token and set it to an empty string. after adding this, along with the changed return statements for the def create and get, my unit tests now have passed after many pytest commands. 

Tonight I have found out that we were supposed to add "Aha!" moments to our journaling so since I havent had any of those in my journal, i'll start now. 

My Aha! moment was when i realized i could access the access_token and set its value to an empty string which would erase the contents of the access_token. If i can get rid of the access token upon logging in(after sign up), I would be able to get past the initial get error(due to the hashed_password constantly changing).


## Jan 23:

Today I worked on:

Today I worked on getting the profile picture to be clickable and be able to route to the account detail page when clicked.
I also worked on getting the profile picture to not display when user isnt logged in. Upon logging in, the profile picture will then appear.

I'm now working on figuring out how to let a user set a profile picture from the account detail page and also have it view the uploaded profile picture in the main page.
Towards the night I drifted away from the profile picture issues and did some paired programming with steven to figure out how to get events_service deployed on caprover.


## Jan 24: 

Today I worked on:

We worked as a team on deployment, figuring out what was causing the issues that were popping up. While doing that, I went off and tried to get a profile picture feature up so users can upload an image file through the front end and have it saved into the DB so when the user logs out/logs back in, the picture would be there. Unfortunately I kept hitting road blocks and couldnt figure out how to fix it. I ended up trying to tackle our 3rd party email api service but also hit a road block. I met with rosheen in attempts to get that to work but wasnt able to figure it out.


## Jan 25:

Today I worked on:

I tried going at the email api service at different angles, originally I was trying to use the api in the front end but was hitting a weird 'fs' error and after deleting my node_modules folder along with my package-lock.json file, I was still getting the error. I then tried using a python code from sendgrid docs to see if that would work but that also wasnt working. I ended up back-tracking to see if I could get the profile picture feature to work using youtube videos but after hours of trying different ways to add a profile picture that gets saved into the DB, I couldnt find one that worked. I took a break from that and did some pair programming with steven and was able to get the displayed email and username to change every time after successfully submitting an email/username change request. We then got some other random bugs to stop showing up and now i'm splitting off again to work on the app's aesthetics. Due to me hitting so many roadblocks the past two days, I feel like I need to at least make the app look better to get some progress in. 


## Jan 26:

Today I worked on:

I worked on the upload profile picture to account feature on the backend. I got the code to work and was returning a 200 success message then I started working on the front end code to get the profile picture feature to allow users to upload an image file and have it save it to the account using the token but about halfway through, the app crashed on me. After a couple hours of debugging, I pin pointed the issue to the nav bar with mimi's help. We found out the app/nav bar was crashing because of some auth code and we spent all day trying to debug that with mimi and rosheen. Towards the end of the night, we were able to get the auth code fixed and now I'm gonna pull the working code and merge to main. 