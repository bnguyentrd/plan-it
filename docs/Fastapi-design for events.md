### Event Service

The event service allows a user to create an event, once the relevant information
is filled up an image url will be generated based on the city and location of the
desired event. Users will also be able to view the current weather of the event
upon creating a new event. Once an event is created the user will be redirected to
the detail page for that said event. From there the event can either be cancelled,
or if changes need to be made they will allowed to update certain fields and see the
changes of their event be listed.


#### Event Service End Points

---

Event List - http://localhost:3000/events

Event Create Form - http://localhost:3000/create

Event Detail Page - http://localhost:3000/details/%7Bid%7D/

Event Update Page - http://localhost:3000/update/%7Bid%7D/

---


#### Example Body for creating an Event

_

  {
    "title": "exex",
    "city": "Los Angeles",
    "state": "CA",
    "from_date": "2023-01-27",
    "todate": "2023-01-28",
    "description": "Test",
    "url": "string", (leave Blank)
    "weather": "string" (Leave Blank)
  }
