const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));
app.use(bodyParser.urlencoded({extended: true}));

// setup router later
// 