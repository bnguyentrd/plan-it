# import os
# from queries.pool import pool
# from fastapi import HTTPException
# from pydantic import BaseModel
# from typing import Optional, Union

# class Error(BaseModel):
#     message: str

# class PollsIn(BaseModel):
#     title: str
#     posted: str
#     event_id: str

# class PollsOut(BaseModel):
#     id:int
#     title: str
#     posted: str

# class PollOptionsIn(BaseModel):
#     option_name: str
#     votes: int

# class PollOptionsOut(BaseModel):
#     id: int
#     option_name: str
#     votes: int

# class PollQueries:
#     with pool.connection() as conn:
#         with conn.cursor() as cur:
