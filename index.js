const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.post("/signup", (req, res)=>{

})

app.get("/login", (req, res)=>{
    
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
