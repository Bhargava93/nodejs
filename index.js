const express = require("express");
const app = express();

app.use(express.json())


// curd oprations

// desc: create user
// method: post
// path: http://localhost:3000/createUser

app.post("/createUser", (req, res) => {

    console.log("req object====", req.body);
    res.send({ message: "user has created successfully", data: req.body });

});

// desc: fetch user deatils
// method: get
// path: http://localhost:3000/fetchUsers

app.get("/fetchUsers/:id", (req, res) => {

    console.log("query====", req.params);
    let array = [{
        "id": "1",
        "firstname": "bhargava",
        "surname": "kondreddy",
        "mobile": 7569610097,
        "gender": "male"
    },
    {
        "id": "2",
        "firstname": "Pranay",
        "surname": "bandlapalli",
        "mobile": 9876543210,
        "gender": "male"
    },
    {
        "id": "3",
        "firstname": "dhana",
        "surname": "uppithi",
        "mobile": 7093878067,
        "gender": "male"
    }
    ]

    // let result=array.filter(ele =>{
    //     // console.log(ele);
    //     if(ele["id"] === req.params.id){
    //         return ele;
    //     }
    // })

    let result = array.filter(ele => ele["id"] === req.params.id);
    console.log("result===", result);

    res.send({
        "message": "user details",
        "data": result
    });
})


app.listen(3000, () => {
    console.log("server running on 3000 port");
});

// http://localhost:3000
// http://127.0.0.0:3000