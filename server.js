require('./config/connection');
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));


const routes = require('./routers/routes');

app.use(express.json(), routes, cors());
app.listen(port, () => { console.log(`Run server...${port}`) });



app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(filePath);
});