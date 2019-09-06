# Introduction 


Respresso is a centralized resource manager for shared [Android](https://github.com/pontehu/respresso-client-android), [iOS](https://github.com/pontehu/respresso-client-ios) and [web](https://github.com/pontehu/respresso-sync-for-clients#web) projects.
It allows you to simply import the latest assets into your workspace.
You may store several versions of the same resource in the cloud and pick the ones you need to import.
Respresso currently supports five types of resources:
* Images
* Localization
* Fonts
* Colors
* Raw


# Usage

Using Respresso should be intuitive to anyone who has used npm before.
Configurations are stored in the *respresso.json*, while your current assets’ metadata are stored in *respresso.lock*.

⚠️ You'll need java installed on your machine.

## Configuration

In *respresso.json* you can customize:
- projectToken: received during initialization of your project in the Respresso web interface
- targetDirectory: it should be under src as CRA does not import from elsewhere
- resources: only import what you need and you can change the version number, too

The currently accepted resource names are:
* image
* color
* localization
* font
* raw
        
Accepted version formats are:
* [major].[minor].[patch]         eg. 1.2.0
* [major].[minor].[patch]+         eg. 1.2.0+ (not available in strict mode)
* [major].[minor]+                eg. 1.2+ (not available in strict mode)

## Include resources into your web application

To start using Respresso in your app takes almost zero time and effort. 

1. Add to your dev devendencies:   
```
npm install respresso --dev
```
2. Add a sync script into your *package.json*:
```
"scripts": {
	"sync": "respresso sync",
        ...
        }
```
3. After configuring your Respresso project, just issue ```npm run sync``` and you can start using the resources.


# Respresso Vanilla demo

> This demo uses Typescript but it'd be the same in JS.  

## Try it

1. Install any packages that it depends on   
```npm install```
2. Sync resource files   
```npm run sync```
3. Start running the server  
```npm start```

### Localization	

Respresso files are imported in *src/messages.ts*.	

### SASS	

Color definitions from Respresso are imported in *src/index.scss*.	

### Images	

Just include your svg files as in *index.html*.	

### Fonts	

Find a sample use of fonts in *src/index.scss*.
