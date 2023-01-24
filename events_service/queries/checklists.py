from pydantic import BaseModel
from typing import List, Optional, Union
from queries.pool import pool


class ChecklistIn(BaseModel):
    event_id: int
    items: list
    status: list


class ChecklistOut(BaseModel):
    id: int
    event_id: int
    items: list
    status: list


class ChecklistRepository:
    def get_all(self) -> List[ChecklistOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                        SELECT id, event_id, items, status
                        FROM checklists
                        ORDER BY id
                        """
                )
                return [
                    self.record_to_checklist_out(record) for record in result
                ]

    def get_one(self, checklist_id: int) -> Optional[ChecklistOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                        SELECT id, event_id, items, status
                        FROM checklists
                        WHERE id = %s
                        """,
                    [checklist_id],
                )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_checklist_out(record)

    def create(self, checklist: ChecklistIn) -> ChecklistOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO checklists
                        (event_id, items, status)
                    VALUES
                        (%s, %s, %s)
                    RETURNING id
                    """,
                    [checklist.event_id, checklist.items, checklist.status],
                )
                id = result.fetchone()[0]
                return self.checklist_in_to_out(id, checklist)

    def update(
        self, checklist_id: int, checklist: ChecklistIn
    ) -> ChecklistOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    UPDATE checklists
                    SET event_id = %s, items = %s, status = %s
                    WHERE id = %s
                    """,
                    [
                        checklist.event_id,
                        checklist.items,
                        checklist.status,
                        checklist_id,
                    ],
                )
                return self.checklist_in_to_out(checklist_id, checklist)

    def delete(self, checklist_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                            DELETE FROM checklists
                            WHERE id = %s
                            """,
                        [checklist_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def record_to_checklist_out(self, record):
        return ChecklistOut(
            id=record[0], event_id=record[1], items=record[2], status=record[3]
        )

    def checklist_in_to_out(self, id: int, checklist: ChecklistIn):
        old_data = checklist.dict()
        return ChecklistOut(id=id, **old_data)
