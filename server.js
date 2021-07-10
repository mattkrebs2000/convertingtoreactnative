const express = require("express");
const app = express();
const routelocation = require("./routes/route");

const route = 3001; 

// app.get("/", (req, res) => {
//     res.send("this is what shal")
// });

// app.get("/things/", (req, res) => {
//     res.send("this is what shal appearrrrrrr")
// });


app.use("/api", routelocation)

app.listen(route, () => console.log(`server started on port: ${route}`));