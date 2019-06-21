/*
=====================
=      DrawMe       =
=        By         =
=   Wolfleader101   =
=                   =
=====================
*/
const colors = require('colors');
const express = require('express');
const app = express();
const path = require('path');
const port = 3302;


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(`${port}`);

console.log(`Server up and ready!\nServer on port ${port}`.green.bold);

console.log(`To access DrawMe go to http://localhost:${port}`.bold.magenta);
console.log("Have fun!".rainbow);

