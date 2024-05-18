const express = require('express');
const Middlewares = require("./middlewares/middlewares");
const ejsRoutes = require("./routes/get.Route");
const postRoutes = require("./routes/post.Route");
const route404 = require("./routes/404Route")
require('dotenv').config();
const PORT = process.env.PORT || 8080;


const app = express();


//****************** ALL MIDDLEWARES ******************

Middlewares(app);

//***************** ROUTES FOR RENDERING EJS PAGES *****************

app.use('/', ejsRoutes)

//***************** ROUTES FOR HANDELNING CRUD OPERATIONS *****************

.use('/', postRoutes)

//***************** ROUTE FOR INVALID_URL *****************

.use("*", route404)

// Server starting 
.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});