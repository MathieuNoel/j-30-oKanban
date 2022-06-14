require('dotenv').config()
const express = require('express');
const app = express()
const router = require('./app/router');

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('./public')); 

app.use(router);

app.listen(3000, () => {
    console.log('App listening on port 3000',`http://localhost:${3000}`);
});