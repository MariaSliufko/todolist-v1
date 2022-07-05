const express = require('express'); //vi "require" dom 2vå paketen vi har laddat ner i terminalen
const bodyParser = require('body-parser');

const app = express(); //vi skapar en ny express applikation via const = app

let items = ["Buy Food", "Cook Food", "Eat Food"]; //vi skapar en tom array";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) { //skapar en route via app.get som skickar användaren till en sida med hello när edn går till förstasidan. 

    let today = new Date();
  
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString('sv-SE', options);
   

     res.render("list", {kindOfDay: day, newListItems: items});

    });

     app.post("/", function(req, res) {
        let item = req.body.newItem;

        items.push(item);
        
        res.redirect("/");


    });



app.listen(3000, function(){ //vi lyssnar på port 3000 och loggar att servern har startat på port 3000
    console.log("Server started on port 3000"); 
});