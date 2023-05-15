const express = require("express");
const app = express();


app.use(express.json());

// app.use(bhargava())

// Basic crud operations

// crud
// c - create
// r - read
// u - update
// d - delete

// desc: create user
// method: post
// url: /createUser

app.post("/createUser", (req, res) => {

    console.log("function invoked: createuser");
    console.log("req===",req.body);

    res.send({ status: true, message: "user created", data:req.body });

});

app.get("/family",(req,res)=>{
   

});

app.listen(3000, () => {
    console.log("server running on 3000 port ");
    console.log("url: http://localhost:3000");
});
