---
layout: ../layouts/Layout.astro
title: NotifyLapSet API
description: Notify the database of a lap being set.
---
## Description

Notify the database of a lap being set.

## Endpoint

```http
POST https://api.trackdayr.com/v1/NotifyLapSet
```

## Body form-data

| Name          | Type   | Required | Description                          |
|---------------|--------|----------|--------------------------------------|
| key           | string | ✓        | TrackDayR WebAPI authentication key. |
| steamid       | uint64 | ✓        | SteamID of the author of the lap     |
| leaderboardid | int32  | ✓        | ID of the leaderboard of the lap     |
| score         | int32  | ✓        | Lap time score                       |
| ugcid         | uint64 | ✓        | ID of UGC file with lap info         |

## Response example

```json
{
  "status": "success"
}
```
