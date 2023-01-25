steps = [
    [
        """
        CREATE TABLE events(
            id SERIAL PRIMARY KEY NOT NULL,
            title VARCHAR(100) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(100) NOT NULL,
            from_date DATE NOT NULL,
            to_date DATE NOT NULL,
            description VARCHAR(1000) NOT NULL,
            url VARCHAR(300),
            weather VARCHAR(300)
        );

         CREATE TABLE checklists(
            id SERIAL PRIMARY KEY NOT NULL,
            event_id INT NOT NULL,
            items VARCHAR[],
            status BOOL[],
            CONSTRAINT fk_event FOREIGN KEY(event_id) REFERENCES events(id)
        );
        """,
        """
        DROP TABLE checklists;
        DROP TABLE events;
        """,
    ]
]
