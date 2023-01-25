# from .keys import OPEN_WEATHER_API_KEY
import json
import requests



def get_lat_lon(city, state):
    url = "http://api.openweathermap.org/geo/1.0/direct"
    params = {
        "q": f"{city}, {state}, USA",
        "appid": "3e1eb45a606106a2ec6fed8a4ccfe16a",
    }
    res = requests.get(url, params=params)
    json = res.json()
    lat = json[0]['lat']
    lon = json[0]['lon']
    return lat, lon


def get_weather(city, state):
    lat, lon = get_lat_lon(city, state)
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "lat": lat,
        "lon": lon,
        "appid": "3e1eb45a606106a2ec6fed8a4ccfe16a",
        "units": "imperial",
    }
    res = requests.get(url, params=params)
    json = res.json()
    return {
        "temp": json["main"]["temp"],
        "description": json["weather"][0]["description"],
    }


