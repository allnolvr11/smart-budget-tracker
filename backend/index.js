const express = require("express");
const cors = require("cors");
const Roles = require("./routes/roles");
require('dotenv').config();

const app = express();
app.use(cors());

app.use("/api", Roles);

const port = process.env.PORT;

if (!port) {
    throw new console.error("Error"); 
}

app.listen(port, () => console.log(`Server running on port:${port}`));


