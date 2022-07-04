const express = require('express'); //vi "require" dom 2vå paketen vi har laddat ner i terminalen
const bodyParser = require('body-parser');

const app = express(); //vi skapar en ny express applikation via const = app

app.set('view engine', 'ejs');

app.get("/", function(req, res) { //skapar en route via app.get som skickar användaren till en sida med hello när edn går till förstasidan. 
  
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
            case 1:
                day = "Monday";
                break;
                case 2:
                    day = "Tuesday";
                    break;
                    case 3:
                        day = "Wednesday";
                        break;
                        case 4:
                            day = "Thursday";
                            break;
                            case 5:
                                day = "Friday";
                                break;
                                case 6:
                                    day = "Saturday";
                                    break;
    
        default:
        console.log("Error: Current day is equal to " + currentDay);
     };

     res.render("list", {
        kindOfDay: day
     });

    });



app.listen(3000, function(){ //vi lyssnar på port 3000 och loggar att servern har startat på port 3000
    console.log("Server started on port 3000"); 
});