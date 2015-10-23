# Pulse Front-End

## Installation

The front-end of Pulse sits on top of [Node.js](https://nodejs.org). After installing Node, you can install local dependencies via `npm install`.

## Development/Deployment

**For development**:
```
npm start
```
The application will be available at [http://localhost:8080](http://localhost:8080).

**For deployment**:
```
npm run build
```

## Testing

Unit tests can be run via `npm test`. This uses Karma underneath the hood; if you would like to customize your Karma command line options, feel free to `npm install -g karma-cli`.

## Optional

Under the hood, we rely on [Grunt](http://gruntjs.com/), [Karma](http://karma-runner.github.io/), and [Webpack](https://webpack.github.io/). If you'd like to customize the options that get passed to any of these tools, you can install them globally via `npm install -g grunt-cli karma-cli webpack`.
