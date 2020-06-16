const lodash = require('lodash');

lodash.map(['Andrey', 'John', 'Alex', 'Jane'], (item) => {
    console.log('Hello ${name}!')
});