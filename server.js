
const port = process.env.PORT || 3000;
var express = require('express') // funktion som anropar express metoden
var app = express(); //express funktionen deklareras in i variabeln app


app.get('/', function (req, res) { // funktion som anropar. Anger vad adressen ska heta vid "/"
  res.send ({namn: "nelly", kurser: ["programmering","webb"]}) // Skickar  texten 
})

app.get('/omoss', function (req, res) { // funktion som anropar. Anger vad adressen ska heta vid "/"
  res.send ("lite om oss") // Skickar  texten 
})
app.get('/pris', function (req, res) { // funktion som anropar. Anger vad adressen ska heta vid "/"
  res.send ("kostar inget att använda vårt tjänst") // Skickar  texten 
})


app.use(express.static(__dirname +'/Frontend'));


const hbs = require('hbs');
hbs.registerPartials(__dirname + "/views/partial") //lägg koden innan app.set("view engine", "hbs");
app.set('view engine', 'hbs');

app.get('/hem', (req,res)=> {res.render('om_oss.hbs',{ År: new Date().getFullYear(),Header: 'header.hbs'});
});

app.get('/datum', (req, res) => {res.render('page',{ År: new Date().getFullYear() });// Skapr en funktion variabel med dagens datum. 
});

hbs.registerHelper('key', ()=> {});


//app.listen(3000);// Lyssnar på den angivna kannalen 3000 min egna sida


app.listen(port);




