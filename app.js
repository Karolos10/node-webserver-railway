
require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Karlos Rodriguez',
        titulo: 'Curso de node'
    });
  })

//Servir conteno estatico

app.use( express.static( 'public' ));

/* app.get('/',  (req, res) => {
  res.send('Home page')
}) */
app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Karlos Rodriguez',
        titulo: 'Curso de node'
    });
})
app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Karlos Rodriguez',
        titulo: 'Curso de node'
    });
})
app.get('*',  (req, res) => {
  res.sendFile( __dirname + '/public/404.html' );
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })