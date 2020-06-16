const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'products.sql');

const textFileContent = fs.readFileSync(filePath, 'utf8');
const arrayOfLine = textFileContent.split('\n');

arrayOfLine.forEach((line) => {
    const formattedLine = line
        .replace('insert into products (id, price, name, date) values (', '')
        .replace(');', '');

    const arrayOfValues = formattedLine.split(', ');

    console.log(arrayOfValues[2]);
});