from pydantic import BaseModel
from typing import List


# Choice schema


class ChoiceBase(BaseModel):
    choice_text: str
    votes: int = 0


class ChoiceCreate(ChoiceBase):
    pass


class ChoiceList(ChoiceBase):
    id: int
    voted: List[int] = None

    class Config:
        orm_mode = True


# Question schema


class QuestionBase(BaseModel):
    title: str
    question_text: str


class QuestionCreate(QuestionBase):
    pass


class QuestionEdit(QuestionBase):
    is_active: bool


class Question(QuestionBase):
    id: int

    class Config:
        orm_mode = True


class QuestionInfo(Question):
    choices: List[ChoiceList] = []
