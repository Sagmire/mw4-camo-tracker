# MW4 Camo Tracker

A small Windows app for tracking every Call of Duty: Modern Warfare 4 weapon camo.
There's one tab per weapon class, and each weapon has a checkbox for its 8 Military camos,
3 Special camos, Gold, Platinum, Harmonic Break and Divergence, with the challenge for each.
A switch at the top shows each challenge's Multiplayer, DMZ or Warzone requirement (or all three).
The Mastery tab covers the Multiplayer and DMZ mastery camos and the four Pyroclast prestige camos.

## Install

Download `MW4-Camo-Tracker-Setup-<version>.exe` from the [latest release](../../releases/latest) and run it.
Windows may say "Windows protected your PC" because the app isn't signed: click **More info → Run anyway**.

The app checks for updates each time it opens. A new version downloads in the background,
then a **Restart to update** button appears (or it installs the next time you close the app).

Your progress is saved on your PC and is kept through updates.

## About the challenge data

Requirements come from the game's challenge data as collected by CODMunity (Han 86 and SANG 9mm
also match the official Call of Duty blog). The MAR-9 is community-reported and shown in italics.
If the game says something different, the game is right.

## Working on it

- `npm install`, then `npm start` runs the app.
- `npm run dist` builds the installer into `dist/`.
- To publish an update: bump `version` in `package.json`, commit, then push a matching tag
  (`git tag v1.1.0 && git push origin v1.1.0`). GitHub builds it and publishes the release.
