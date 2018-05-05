const express = require('express');
const parser = require('body-parser');

const app = express();
const PORT = 5000;

const propertyRoute = require('./routes/property.route');

app.use(express.static('server/public'));
app.use(parser.json());
app.use('/property', propertyRoute);

app.listen(PORT, () => {
    console.log(`greetings from port ${PORT}`);
});