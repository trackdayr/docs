---
layout: ../layouts/Layout.astro
title: GetLeaderboardInfo API
description: Retrieve track and bike of a leaderboard.
---
## Description

Retrieve track and bike of a leaderboard.

## Endpoint

```http
GET https://api.trackdayr.com/v1/GetLeaderboardInfo
```

## Query Params

| Name          | Type   | Required | Description                                         |
|---------------|--------|----------|-----------------------------------------------------|
| key           | string | ✓        | TrackDayR WebAPI authentication key.                |
| leaderboardid | int32  | ✓        | ID of the leaderboard                               |
| bikename      | bool   |          | Specify if the bike is provided as name or category |

## Response example

### `bikename=false` or param not provided

```json
{
  "track": "cremonatrack",
  "bike_cat": 3
}
```

### `bikename=true`

```json
{
  "track": "cremonatrack",
  "bike_name": "ss300"
}
```
