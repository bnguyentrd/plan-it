from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# longer one is for deployment, shorter for local
<<<<<<< HEAD
SQLALCHEMY_DATABASE_URL = (
    "postgresql://polls:password@postgres/polls"
    #"postgresql://postgres:5f16cd70ae6ab2c1@srv-captain--postgres-polls/postgres"
)
=======
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:5f16cd70ae6ab2c1@srv-captain--postgres-polls/postgres"  # noqa: E501
>>>>>>> 43299fe8011bb6cd48093fd49f828afbd8dcc8b6

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
