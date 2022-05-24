const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const navigationRouter = require('./src/routers/navigationRouter');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/public/')));

app.set('views','./src/views');
app.set('view engine', 'ejs');

app.use('/', navigationRouter);

app.get('/', (req, res)=>{
   res.render('index');
});

 app.listen(PORT, () => {
    debug(`listening on port ${PORT}`)
 });