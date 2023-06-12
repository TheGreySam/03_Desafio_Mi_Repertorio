
const express = require('express')
const path = require('path');

const app = express();
const PUERTO = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')) 
});

app.listen(PUERTO, () => {
    console.log(`Server corriendo en puerto ${PUERTO}`)
})