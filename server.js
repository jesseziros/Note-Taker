const express = require("express");
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

let app = express();

let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
