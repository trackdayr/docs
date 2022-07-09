## GetLapsOfUser

Retrieve all user laps across all leaderboards sorted by rank.

```http
GET http://trackdayr.com/api/v1/GetLapsOfUser`
```

Query Params:

| Name    | Type   | Required | Description                          |
| ------- | ------ | -------- | ------------------------------------ |
| key     | string | ✓        | TrackDayR WebAPI authentication key. |
| steamid | uint64 | ✓        | SteamID a the user                   |

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
