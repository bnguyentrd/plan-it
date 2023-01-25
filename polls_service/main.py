from fastapi import FastAPI, HTTPException, Response, Depends
from fastapi.middleware.cors import CORSMiddleware
import os
from .poll_schema import (
    QuestionInfo,
    Question,
    QuestionEdit,
    QuestionCreate,
    ChoiceCreate,
    ChoiceList,
    ChoiceBase,
    QuestionBase,
)
from typing import List
from sqlalchemy.orm import Session

import crud
from database import SessionLocal, engine
from models import Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


@app.post("/questions/", response_model=QuestionInfo)
def create_question(question: QuestionCreate, db: Session = Depends(get_db)):
    return crud.create_question(db=db, question=question)


@app.get("/questions/", response_model=List[Question])
def get_questions(db: Session = Depends(get_db)):
    return crud.get_all_questions(db=db)


def get_question_obj(db, qid):
    obj = crud.get_question(db=db, qid=qid)
    if obj is None:
        raise HTTPException(status_code=404, detail="Question not found")
    return obj


@app.get("/questions/{qid}", response_model=QuestionInfo)
def get_question(qid: int, db: Session = Depends(get_db)):
    return get_question_obj(db=db, qid=qid)


@app.put("/questions/{qid}", response_model=QuestionInfo)
def edit_question(qid: int, question: QuestionEdit, db: Session = Depends(get_db)):
    get_question_obj(db=db, qid=qid)
    obj = crud.edit_question(db=db, qid=qid, question=question)
    return obj


@app.delete("/questions/{qid}")
def delete_question(qid: int, db: Session = Depends(get_db)):
    get_question_obj(db=db, qid=qid)
    crud.delete_question(db=db, qid=qid)
    return {"detail": "Question deleted", "status_code": 204}


@app.post("/questions/{qid}/choice", response_model=ChoiceList)
def create_choice(qid: int, choice: ChoiceCreate, db: Session = Depends(get_db)):
    get_question_obj(db=db, qid=qid)
    return crud.create_choice(db=db, qid=qid, choice=choice)


@app.put("/choices/{choice_id}/vote", response_model=ChoiceList)
def update_vote(choice_id: int, db: Session = Depends(get_db)):
    return crud.update_vote(choice_id=choice_id, db=db)
