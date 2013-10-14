var databaseUrl = "mydb"
;
var collections = ["albums", "reports"]
;
var db = require("mongoskin").connect(databaseUrl, collections, function(err, open) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("connetion opened");
    }
});
;
var lib = require('./lib')
;