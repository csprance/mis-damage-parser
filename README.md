# mis-damage-parser
Parses damageLog files from Miscreated web servers to collect telemetry data.

## How to get started
* Install node and npm.
* `npm install --save mis-damage-parser`
* use it in your code to parse a damage file from a server it will return an array of js objects


## Commands
### install
`npm install`

Dependency module install
### build

`npm run build`

Do some magic with ES6 to create ES5 code.

### test

`npm run test`

Run test with [karma](https://karma-runner.github.io) + [jasmine](http://jasmine.github.io/2.5/introduction.html)

### develop
`npm run dev` : Run develop server

You can see result in

* OS X : http://0.0.0.0:8080,

* Windows : http://localhost:8080

### clean

 `rm -f dist/*`

 Delete existing dist files

## Description `package.json`

When you create an extension module to the node it can be deployed as a central repository via npm. `package.json` files were created characters contains information module for deployment, some applications written in the node can be managed using the `package.json` file. If not necessarily to be distributed in the form of expansion modules when you develop applications using `package.json` file is convenient because it allows dependency management for the expansion modules.

`package.json` file is basically faithful to follow the specification of which is CommonJS file in JSON format. Also directly create or may be automatically generated via npm init command. And information on the extension used for the application may automatically add the information to the module through the `npm install -save`.

## License
```
MIT License

Copyright (c) 2017 Chris Sprance
```
