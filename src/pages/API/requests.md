---
layout: ../../layouts/Layout.astro
title: APIs supported requests
description: Docs intro
---

# APIs supported requests

## GetLapsOfUser

Retrieve all user laps across all leaderboards sorted by rank.

```http
GET http://trackdayr.com/api/v1/GetLapsOfUser`
```

Query Params:

| Name     | Type   | Required | Description                          |
|----------| ------ | -------- |--------------------------------------|
| key      | string | ✓        | TrackDayR WebAPI authentication key. |
| steam_id | uint64 | ✓        | SteamID of the user                  |

Response example:

```json
{
    "count": 3,
    "laps": [
        {
            "leaderboard_id": 6771593,
            "rank": 1,
            "steam_id": "76561198071076296",
            "score": 8942182,
            "ugcid": "1833539952286466609"
        },
        {
            "leaderboard_id": 7398312,
            "rank": 2,
            "steam_id": "76561198071076296",
            "score": 8760656,
            "ugcid": "1805374272888135502"
        },
        {
            "leaderboard_id": 8624475,
            "rank": 4,
            "steam_id": "76561198071076296",
            "score": 8899472,
            "ugcid": "1851557775279400553"
        }
    ]
}
```

## GetNearestFriendsToChallenge

Retrieve all user laps across all leaderboards sorted by rank.

```http
GET http://trackdayr.com/api/v1/GetNearestFriendsToChallenge`
```

Query Params:

| Name     | Type   | Required | Description                          |
|----------| ------ | -------- |--------------------------------------|
| key      | string | ✓        | TrackDayR WebAPI authentication key. |
| steam_id | uint64 | ✓        | SteamID of the user                  |

Response example:

```json
{
    "count": 4,
    "laps": [
        {
            "leaderboard_id": 6941074,
            "rank": 5,
            "steam_id": "76561198128513686",
            "score": 8964935,
            "ugcid": "1850429666823138425",
            "gap": 153
        },
        {
            "leaderboard_id": 6771593,
            "rank": 4,
            "steam_id": "76561199054973464",
            "score": 8940394,
            "ugcid": "1863939249779684805",
            "gap": 1788
        },
        {
            "leaderboard_id": 6764254,
            "rank": 5,
            "steam_id": "76561198103876283",
            "score": 8859559,
            "ugcid": "1688269370744656589",
            "gap": 4147
        },
        {
            "leaderboard_id": 7371430,
            "rank": 5,
            "steam_id": "76561198328970858",
            "score": 8756177,
            "ugcid": "1832401149792362627",
            "gap": 9451
        }
    ]
}
```

## NotifyNewLapSet

Notify that a lap is added or updated.

```http
POST http://trackdayr.com/api/v1/NotifyNewLapSet`
```

Query Params:

| Name           | Type   | Required | Description                                 |
|----------------|--------| -------- |---------------------------------------------|
| key            | string | ✓        | TrackDayR WebAPI authentication key.        |
| steam_id       | uint64 | ✓        | SteamID of the user that made the lap       |
| leaderboard_id | int32  | ✓        | ID of the leaderboard where the lap was set |

Response example:

```json
{
    "Steam": {
        "Leaderboards": 253,
        "Laps": 2585
    },
    "local": {
        "Leaderboards": 253,
        "Laps": 2585
    },
    "difference": {
        "Leaderboards": 0,
        "Laps": 0
    }
}
```
