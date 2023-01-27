from .keys import PEXELS_API_KEY, OPEN_WEATHER_API_KEY
import json
import requests

# import os

# OPEN_WEATHER_API_KEY = os.environ["OPEN_WEATHER_API_KEY"]


def get_lat_lon(city, state):
    url = "http://api.openweathermap.org/geo/1.0/direct"
    params = {
        "q": f"{city}, {state}, USA",
        "appid": OPEN_WEATHER_API_KEY,
    }
    res = requests.get(url, params=params)
    json = res.json()
    lat = json[0]["lat"]
    lon = json[0]["lon"]
    return lat, lon


def get_weather(city, state):
    lat, lon = get_lat_lon(city, state)
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "lat": lat,
        "lon": lon,
        "appid": OPEN_WEATHER_API_KEY,
        "units": "imperial",
    }
    res = requests.get(url, params=params)
    json = res.json()
    return {
        "temp": json["main"]["temp"],
        "description": json["weather"][0]["description"],
    }


def get_photo(city, state):
    url = "https://api.pexels.com/v1/search"
    headers = {"Authorization": PEXELS_API_KEY}
    params = {"query": f"{city} {state}", "per_page": 1}
    res = requests.get(
        url,
        params=params,
        headers=headers,
    )
    content = json.loads(res.content)
    try:
        return {"picture_url": content["photos"][0]["src"]["original"]}
    except KeyError:
        return {"picture_url": None}
