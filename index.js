const express = require("express");
const app = express();

app.use(express.json());

const user_routes = require("./routes/user.routes");


app.use(user_routes);

app.listen(3000, () => {
    console.log("server running on 3000 port");
});