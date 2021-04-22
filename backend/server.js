const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send(`Good job, port ${process.env.PORT}`);
});


app.listen(process.env.PORT, console.log("Express listening on port# ", process.env.PORT));
