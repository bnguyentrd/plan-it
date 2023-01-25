from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union

from queries.checklists import (
    ChecklistRepository,
    ChecklistIn,
    ChecklistOut
)


router = APIRouter()

@router.get("/checklists/{checklist_id}", response_model=ChecklistOut)
def get_one_checklist(checklist_id: int, response: Response, repo: ChecklistRepository = Depends()) -> ChecklistOut:
    checklist = repo.get_one(checklist_id)
    if checklist is None:
        response.status_code = 404
    else:
        return checklist






@router.get("/checklists", response_model=list[ChecklistOut])
def get_all(
    repo: ChecklistRepository = Depends(),
):
    return repo.get_all()



@router.get("/event/checklists/{event_id}", response_model=list[ChecklistOut])
def get_by_event(event_id: int, response: Response, repo: ChecklistRepository = Depends()) -> list[ChecklistOut]:
    checklist = repo.get_by_event(event_id)
    if checklist is None:
        response.status_code = 404
    else:
        return checklist




@router.post("/checklists", response_model=ChecklistOut)
def create_checklist(checklist: ChecklistIn, repo: ChecklistRepository = Depends()):
        return repo.create(checklist)





@router.put("/checklists/{checklist_id}", response_model=ChecklistOut)
def update_checklist(checklist_id: int, checklist: ChecklistIn, repo: ChecklistRepository = Depends()) -> ChecklistOut:
    return repo.update(checklist_id, checklist)



@router.delete("/checklists/{checklist_id}", response_model=bool)
def delete_checklist(checklist_id: int, repo: ChecklistRepository = Depends()) -> bool:
    return repo.delete(checklist_id)
