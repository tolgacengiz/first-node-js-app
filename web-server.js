const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/facts/:factId', (request, response) => {
    const catFactsFilePath = path.join(__dirname, 'facts.json');

    fs.readFile(catFactsFilePath, 'utf8', (err, data) => {
        if (err) {
            response.send({
                status: 'Error occurred',
                message: err.message,
            });
        } else {
            const allFactsObject = JSON.parse(data);

            const foundFact = allFactsObject.all.find((fact) => {
                return fact._id === request.params.factId
            });

            response.send(foundFact);
        }
    });

    // response.send({ id: request.params.factId })
});

app.get('/facts', (request, response) => {
    const catFactsFilePath = path.join(__dirname, 'facts.json');

    fs.readFile(catFactsFilePath, 'utf8', (err, data) => {
        if (err) {
            response.send({
                status: 'Error occurred',
                message: err.message,
            });
        } else {
            const allFactsObject = JSON.parse(data);

            response.send(allFactsObject);
        }
    });

    // response.send([{ foo: 'bar' }, { foo: 'bar' }])
});


app.listen(8080);