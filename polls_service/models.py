from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, ARRAY, Boolean
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class Question(Base):
	__tablename__ = "question"
	id = Column(Integer, primary_key=True)
	title = Column(String(200))
	question_text = Column(String(400))
	belongs_to = Column(Integer, nullable=True)
	is_active = Column(Boolean, default=True)

	choices = relationship('Choice', back_populates="question")


class Choice(Base):
	__tablename__ = "choice"
	id = Column(Integer, primary_key=True)
	question_id = Column(Integer, ForeignKey('question.id', ondelete='CASCADE'))
	choice_text = Column(String(200))
	votes = Column(Integer, default=0)
	voted = Column(ARRAY(Integer), nullable=True, default=[])


	question = relationship("Question", back_populates="choices")
