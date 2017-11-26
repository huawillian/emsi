# EMSI Website

Evangelical Mission and Seminary International website created using Google's Polymer Web Component Library and Google's Firebase Database, Authentication, and Hosting services

## Active Deployed URL

Experimental Site: https://emsi-e77d5.firebaseapp.com/ 

Released Site: TBD

## Description

Spreading the gospel to the chinese community

Headquartered in Towaco, New Jersey U.S.A (36 Alpine Road, Towaco, NJ 07082). EMSI was founded by Pastor Moses Yang. EMSI has branches in 4 continents: Europe, North America, Asia, and Africa. EMSI is made up of the following organizations - Evangelical Bible Institute, Christian Evangelical Mission, and Christian Evangelical Overseas Outreach.

CEM has 9 churches in the eastern United States, 5 in the western United States, 4 in Belgium, 1 in France, 12 in the Netherlands, 4 in Portugal, 2 in Italy, 1 in Hungary, 3 in South Africa, 3 in Japan, 1 in Taipei Taiwan, and 8 in Spain for a total of 53 churches. The primary mission is to establish churches, shepherd the flock, and to plant new churches.

To reach out to people all over the world we have create this amazing website.

This website will be responsible for:

1. Displaying EMSI related data on the web and mobile devices
2. Finding all nearby churches via Google Maps API
3. Administering church details and users by delegating admin roles to different users using Firebase Authentication Services and Database Validation Rules and an intuitive dashboard
4. Multi-lingual content, primarily in English and Chinese
5. Seminary course management for international Seminary Students
6. Online Bookstore including EMSI publication

The website is completely serveless development, relying on Google's Cloud Platform and services. The Firebase database is protectect via Validation rules. Users are securly authenticated through Firebase authentication's Email / Password module. Front end development product documents are extremely modular and intuitive by leveraging Google's Polymer Web Component library. Component files are separated into custom, page, or util components, styled by external css files in styles folder and imported as dom modules. The end result is a well optimized and mobile web app where people can immediately find a nearby church. 

## Getting Started

1. Download or Clone to repository 
2. Install Node.js https://nodejs.org/en/ 
3. Install npm https://www.npmjs.com/
4. Install bower https://www.npmjs.com/package/bower 
5. Install Polymer-CLI https://www.polymer-project.org/1.0/start/toolbox/set-up#install-the-polymer-cli
6. Install Firebase-CLI https://firebase.google.com/docs/hosting/deploying 
7. Install bower_components via shell command: `bower install`
8. Serve locally via shell command: `polymer serve`

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `default/` subfolder containing builds that are run through HTML,
CSS, and JS optimizers based off of polymer.json build configuration.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Deploying to Firebase

Follow the steps: https://firebase.google.com/docs/hosting/deploying 





