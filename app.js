const express = require('express'); //vi "require" dom 2vå paketen vi har laddat ner i terminalen
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express(); //vi skapar en ny express applikation via const = app

const items = ["Buy Food", "Cook Food", "Eat Food"]; //vi skapar en tom array";
const workItems = []; 

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) { //skapar en route via app.get som skickar användaren till en sida med hello när edn går till förstasidan. 

    let day = date.getDate();

     res.render("list", {listTitle: day, newListItems: items});

    });

     app.post("/", function(req, res) {
              
        let item = req.body.newItem;
        
        if(req.body.list === "Work") {
            workItems.push(item);
            res.redirect("/work");
        } else {
            items.push(item);
            res.redirect("/");
        }


    });

    app.get("/work", function(req, res){
        res.render("list", {listTitle: "Work List", newListItems: workItems});
    });

    app.get("/about", function(req, res){
        res.render("about");
    }
    );

    app.post("/work", function(req, res) {
        let item = req.body.newItem;
        workItems.push(item);
        res.redirect("/work");
    });




app.listen(3000, function(){ //vi lyssnar på port 3000 och loggar att servern har startat på port 3000
    console.log("Server started on port 3000"); 
});