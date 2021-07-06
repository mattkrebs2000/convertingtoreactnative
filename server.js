const express = require("express");
const app = express();


const route = 3001; 


app.get("/", (req, res) => {
    res.send("this is what shall appear")
})

app.listen(route , () => `server listening on port ${route}`)