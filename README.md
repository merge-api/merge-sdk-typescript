## @mergeapi/merge-sdk-typescript@2.0.0

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Tests

There is a single rough test for the SDK which calls one api from each category. To run it, you must set 
configuration variables with the relevant api key and access token for each category. Additionally, the HRIS
section of the test checks an optional filtering query parameter.

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @mergeapi/merge-sdk-typescript@2.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
