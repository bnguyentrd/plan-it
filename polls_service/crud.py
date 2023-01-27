from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse


from models import Question, Choice
import poll_schema

# Question


def create_question(db: Session, question: poll_schema.QuestionCreate):
    obj = Question(**question.dict())
    db.add(obj)
    db.commit()
    return obj


def get_all_questions(db: Session):
    questions = db.query(Question).all()
    questions = jsonable_encoder(questions)
    return JSONResponse(questions)


def get_question(db: Session, qid):
    question = db.query(Question).filter(Question.id == qid).first()
    question = jsonable_encoder(question)
    return JSONResponse(question)


def edit_question(db: Session, qid, question: poll_schema.QuestionEdit):
    obj = db.query(Question).filter(Question.id == qid).first()
    obj.question_text = question.question_text
    obj.title = question.title
    obj.is_active = question.is_active
    db.commit()
    return obj


def delete_question(db: Session, qid):
    db.query(Question).filter(Question.id == qid).delete()
    db.commit()


# Choice
def get_choices(db: Session):
    obj = db.query(Choice).all()
    obj = jsonable_encoder(obj)
    return JSONResponse(obj)


def create_choice(db: Session, qid: int, choice: poll_schema.ChoiceCreate):
    obj = Choice(**choice.dict(), question_id=qid)
    db.add(obj)
    db.commit()
    return obj


def update_vote(choice_id: int, db: Session):
    obj = db.query(Choice).filter(Choice.id == choice_id).first()
    obj.votes += 1
    db.commit()
    return obj
