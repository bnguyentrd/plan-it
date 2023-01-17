# from queries.acls import get_weather
# from events import EventRepository, EventOut
# import os
# from queries.keys import OPEN_WEATHER_API_KEY

# OPEN_WEATHER_API_KEY = os.environ["OPEN_WEATHER_API_KEY"]

# def event_location(OPEN_WEATHER_API_KEY, event_id):
#     event_repo = EventRepository
#     res = event_repo.get_id(event_id=event_id)
#     if res:
#         return res
#     else:
#         try:
#             event_res = get_weather(OPEN_WEATHER_API_KEY, event_id)
#             event_id = event_res["id"]
#             weather = event_res["description"]
#             event_weather = EventOut(
#                 event_id=event_id,
#                 weather=weather
#             )
#             return event_repo.create_event(event=event_weather)
#         except Exception as e:
#             print(e)
