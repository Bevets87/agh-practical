# AGH Practical

## Getting Started
Install Express using [`npm`](https://www.npmjs.com/):

```bash
npm install --save-dev express
``` 

Install Jest using [`npm`](https://www.npmjs.com/):

```bash
npm install --save-dev jest
```

## Available Scripts
### `npm run exercise:one`

Launches Exercise One tests in the interactive watch mode. [Jest](https://github.com/facebook/jest) must be installed.

### `npm run exercise:two`

Launches a development server at http://localhost:3000/ to test Exercise Two 

## Exercise One 
Write a function that takes a positive integer of at least three digits, and return the next largest integer that is formed by the same digits, if no larger integer can be formed (i.e. current input integer is max number) then return `false`. 

## Exercise Two
Using the starter code, implement a `get` request to this [URL](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&page=1&api_key=e6qeMVwVAobScq3QGBBCsWdk4haOxrTmcBfB3RPI) to display at least one image at a time from the resulting photos list. 
