---
title: Dedicated Server
description: How to run and configure a TrackDayR dedicated server.
sidebar:
  label: Dedicated Server
---

The dedicated server lets you run your own custom TrackDayR server, either on your own computer or on a virtual
machine from a game hosting provider.

It is made by the MadCow team for the TrackDayR community.

## Download and installation

[DOWNLOAD HERE](https://tdrmods.com/posts/dedicated-server "TrackDayR Dedicated Server")

Extract the archive wherever you want, then edit the `.tdrServer` file before starting the server.

Tested with TrackDayR version 1.0.118.019.

## The .tdrServer file

The server is configured through a `.tdrServer` file written in JSON:

```json
{
    "userName": "EU-SERVER-USER-2",
    "roomName": "PRIVATE-TEST-SERVER-EU-TRACKDAY",
    "trackName": "LacrMxMini",
    "region": "eu",
    "password": "",
    "maxPlayer": 25,
    "sessionLength": 1000.0,
    "sessionType": 2,
    "options": {
        "timePreset": 1,
        "bikeCategory": 15,
        "BikeClass": "",
        "LeanLimitlHelp": true,
        "LeanLateralHelp": true,
        "LeanForwardHelp": true,
        "GearBox": false,
        "ForceHelmet": false,
        "Erosion": 1,
        "Collision": 1,
        "ManualClutch": false
    }
}
```

### Server settings

| Field         | Value                                             |
| ------------- | ------------------------------------------------- |
| userName      | The name the server shows up with                 |
| roomName      | The name of the room players will see in the list |
| trackName     | The track loaded by the server                    |
| region        | The region of the server, for example `eu`        |
| password      | Leave empty for a public server                   |
| maxPlayer     | Maximum number of players allowed in the room     |
| sessionLength | Length of the session                             |
| sessionType   | `2` trackday, `3` race                            |

### Options

| Field           | Value                                                                        |
| --------------- | ---------------------------------------------------------------------------- |
| timePreset      | `1` sunrise, `2` noon, `3` afternoon, `4` sunset, `5` night                    |
| bikeCategory    | The category allowed on the server, see [Bike Modding](/modding/bike/)         |
| BikeClass       | The class allowed on the server, leave empty to allow them all                 |
| LeanLimitlHelp  | `true` or `false`, lean limit assistance                                       |
| LeanLateralHelp | `true` or `false`, lateral lean assistance                                     |
| LeanForwardHelp | `true` or `false`, forward and backward lean assistance                        |
| GearBox         | `true` for automatic gearbox, `false` for manual                               |
| ForceHelmet     | `true` to force the first person camera on every player                        |
| Erosion         | `0` no erosion, `1` normal, `2` high                                           |
| Collision       | `0` collisions disabled, `1` collisions enabled                                |
| ManualClutch    | `true` or `false`, manual clutch                                               |

## Whitelist

You can restrict the access to your server to a list of approved players, by declaring their grid position
and their Steam ID.

## Support

For help with the dedicated server you can join the MadCow team [Discord server](https://discord.gg/eFjwdjxeEQ).
