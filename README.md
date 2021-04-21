# Standard Particle Model Interactive

This interactive was built by Tyler Machado on behalf of Science News. It outputs an interactive version of the standard model of particle physics, using the React.js framework. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folders

### build

This is populated by the _build_ command, and is the public-facing, deployment-ready version of the app. Nothing in here should be edited directly.

### node_modules

This is where the JavaScript dependencies that run this interactive live; this also should not be edited directly, and everything inside should be controlled by NPM. Also, this folder should not be uploaded to hosting services, generally speaking.

### public

This is where certain static files live as well as the basic HTML template that the JavaScript-powered app is built atop. Things in here can be edited but it likely won't be necessary.

### src

This is where the functionality of the interactive lives, specifically in App.js for the structure/interactions, and App.scss for the styling/layout. Names and symbols of particles, and names and descriptions of particle types, are kept in three different JSON files located in the _data_ subfolder.

## Available Scripts

### `npm install`

When this interactive is downloaded locally, this command installs all the JavaScript dependencies locally. This is a required step to get up and running locally.

### `npm run start`

Starts a development version of the interactive locally in your browser; visit http://localhost:3000 in your browser to view.

### `npm run build`

Creates a production version of the interactive located in the _build_ folder. The contents therein can then be deployed to Azure for hosting.

### `npm run deploy`

Deploys a staging version of the interactive to whichever Github repository is hooked up as the remote. See [the react-gh-pages repo](https://github.com/gitname/react-gh-pages) for more info on how this works.

Note: due to changing the homepage property in package.json to the Azure URL, this will likely not work presently.

