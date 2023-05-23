"use strict";

const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.send("hello world");
});

router.post("/User", (req, res) => {
    // console.log("req===",req);
    res.send({ message: "user created successfully", data: req.body });
});

router.get("/User", (req, res) => {
    let array = [{
        "id": 24,
        "name": "prajwal",
        "email": "srikanth13@gmail.com",
        "city": "kadiri"
    }, {
        "id": "1",
        "name": "swetha",
        "email": "badaswetha9@gmail.com",
        "city": "anantapur"
    }, {
        "id": "3",
        "name": "Srinivasulu Sure",
        "email": "abcgedjj@hotmail.com",
        "city": "hyderabad"
    }, {
        "id": 2,
        "name": "Dhana",
        "email": "dhananjaya7674@gmail.com",
        "city": "mysore"
    },
    {
        id: 1,
        name: "bhargava",
        email: "bhargava@gmail.com",
        city: "bangalore"
    }]
    res.send({ message: "user list", data: array });
});

router.get("/User/:id", (req, res) => {

    console.log("req===", req.params.id);
    let array = [{
        "id": 24,
        "name": "prajwal",
        "email": "srikanth13@gmail.com",
        "city": "kadiri"
    }, {
        "id": "10",
        "name": "swetha",
        "email": "badaswetha9@gmail.com",
        "city": "anantapur"
    }, {
        "id": "20",
        "name": "Srinivasulu Sure",
        "email": "abcgedjj@hotmail.com",
        "city": "hyderabad"
    }, {
        "id": "2",
        "name": "Dhana",
        "email": "dhananjaya7674@gmail.com",
        "city": "mysore"
    },
    {
        id: "1",
        name: "bhargava",
        email: "bhargava@gmail.com",
        city: "bangalore"
    }]

    // let result = array.filter((ele)=>{
    //     if(ele.id == req.params.id){
    //         return ele.id;
    //     }
    // })

    let result = array.filter(ele => ele.id === req.params.id);

    res.send({ message: "user list", data: result });
});

router.get("/getUser", (req, res) => {
    console.log("req=====", req.query);
    let array = [{
        "id": 24,
        "name": "prajwal",
        "email": "srikanth13@gmail.com",
        "city": "kadiri"
    }, {
        "id": "10",
        "name": "swetha",
        "email": "badaswetha9@gmail.com",
        "city": "anantapur"
    }, {
        "id": "20",
        "name": "Srinivasulu Sure",
        "email": "abcgedjj@hotmail.com",
        "city": "hyderabad"
    }, {
        "id": "2",
        "name": "Dhana",
        "email": "dhananjaya7674@gmail.com",
        "city": "mysore"
    },
    {
        id: "1",
        name: "bhargava",
        email: "bhargava@gmail.com",
        city: "bangalore"
    }]

    let result = array.filter(ele => ele.email === req.query.email);

    res.send({ message: "user list", data: result });

});

module.exports = router;