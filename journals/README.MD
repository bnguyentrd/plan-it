## Journals

Please keep all of your individual journals in this directory.

Each team member is required to keep a development journal, which should be a single markdown file with an entry for each day the project was worked on.

Recommended naming convention is `first_last.md`.

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
