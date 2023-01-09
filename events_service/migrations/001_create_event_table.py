steps = [
    [
        """
        CREATE TABLE events(
            id SERIAL PRIMARY KEY NOT NULL,
            title VARCHAR(100) NOT NULL,
            location VARCHAR(100) NOT NULL,
            from_date DATE NOT NULL,
            to_date DATE NOT NULL,
            description VARCHAR(1000) NOT NULL,
            url VARCHAR(300),
            weather VARCHAR(300)
        );
        """,
        """
        DROP TABLE events;
        """
    ]
]
