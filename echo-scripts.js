const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'products-01.sql');

try {
    const textFileContent = fs.readFileSync(filePath, 'utf8');

    const arrayOfLine = textFileContent.split('\n');

    arrayOfLine.forEach((line) => {
        const formattedLine = line
            .replace('insert into products (id, price, name, date) values (', '')
            .replace(');', '');

        const arrayOfValues = formattedLine.split(', ');

        console.log(arrayOfValues[2]);
    });
} catch (error) {
    console.log(error);
}



fs.readFile(filePath, 'utf8', (error, data) => {
    if (error !== null) {
        console.log(error)
    } else {
        console.log(error, 'File exist\n', data);
    }
});