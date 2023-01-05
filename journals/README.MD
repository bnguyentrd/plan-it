## Journals

Please keep all of your individual journals in this directory.

Each team member is required to keep a development journal, which should be a single markdown file with an entry for each day the project was worked on.

Recommended naming convention is `first_last.md`.

## January 2, 2023

Today, I worked on:

<!-- * Getting a customer's data for the account page
  with Asa

Asa and I wrote some SQL. We tested it out with
Insomnia and the UI. We had to coordinate with
Petra who was working on the GHI with Azami.

Today, I found the F2/Rename symbol functionality
in Visual Studio Code! It allows me to rename a
variable without causing bugs. I am going to be
using this a lot! -->

* Finished wireframe, endpoint design, and got started on writing Gitlab issues

Today I started contributing with my team members on finishing
up our first iteration of our API endpoint design and successfully
forked and cloned our repository. I validated my account with GitLab
so that our pipeline isn't failing anymore.



## January 3, 2023

Today, I worked on:

* Signing up a customer with Petra

Today I lead our first daily stand up and used my notes
from Learn and Andrew's Lectures to compile a starting
code base to successfully see a GET response for "get_users_list"
using Fast API. I lead a group code-a-long session by
screensharing and acted as the "driver" whilst providing
a substantial amount of the code base.












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
to do that.
