/*
=====================
=      DrawMe       =
=        By         =
=   Wolfleader101   =
=     V 0.0.1       =
=====================
*/
const express = require('express');
const app = express();
const path = require('path');
const port = 3302;


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(`${port}`);

console.log(`Server up and ready!\nServer on port ${port}`);
