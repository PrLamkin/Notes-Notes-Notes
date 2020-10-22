const express = require("express")
const fs = require("fs")

var app = express();
var PORT = process.env.PORT || 3080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/assets/api-routes")(app)

require("./routing/html-routes")(app)
require("./routing/api-routes")(app)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
});