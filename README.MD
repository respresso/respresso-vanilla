# Respresso Vanilla demo.

This demo uses Typescript but it'd be the same in JS.

You'll need java installed on your machine.

## Configuration

In *respresso.json* you can customize:
- projectToken: Change it to you project's token
- targetDirectory: it should be under src as CRA does not import from elsewhere
- resources: only import what you need and you can change the version number, too

## Include resources into your web application

To start using Respresso in your app takes almost zero time and effort. After configuring your Respresso project, just issue `npm run sync` and you can start using the resources.

### Localization

Respresso files are imported in *src/messages.ts*.

### SASS

Color definitions from Respresso are imported in *src/index.scss*.

### Images

Just include your svg files as in *index.html*.

### Fonts

TBD
