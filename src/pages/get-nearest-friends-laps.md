---
layout: ../layouts/Layout.astro
title: GetNearestFriendsLaps API
description: Retrieve if exists the closest friend lap for every track/bike combination.
---
## Description

Retrieve if exists the closest friend lap for every track/bike combination.

## Endpoint

```http
GET https://api.trackdayr.com/v1/GetNearestFriendsLaps
```

## Query Params

| Name    | Type   | Required | Description                          |
|---------|--------|----------|--------------------------------------|
| key     | string | ✓        | TrackDayR WebAPI authentication key. |
| steamid | uint64 | ✓        | SteamID of the user                  |
| from    | int32  |          | Range start or 0                     |
| to      | int32  |          | Range end or max number of entries   |

## Response example

```json
{
  "data": [
    {
      "leaderboard_id": 9242127,
      "steam_id": "76561198328970858",
      "score": 8950913,
      "ugc_id": "1894352079942395830",
      "gap": 5
    },
    {
      "leaderboard_id": 6941033,
      "steam_id": "76561199054973464",
      "score": 8948506,
      "ugc_id": "1862813973889317422",
      "gap": 135
    },
    {
      "leaderboard_id": 9253827,
      "steam_id": "76561199054973464",
      "score": 8965967,
      "ugc_id": "-1",
      "gap": 152
    }
  ],
  "meta": {
    "total": 32
  }
}
```
