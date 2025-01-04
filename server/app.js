const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express();
const PORT = 8080;

// HTTP logger
app.use(morgan('combined'))


// Template engine


// Midleware API
app.use(cors())


app.get("/", (req,res) => {
    res.json({
        message: `Server started in port ${PORT} by Tran Quoc Phuong`,
        users: ["Tran","Quoc","Phuong"]
    });
});

app.get("/api/home", (req,res) => {
    res.json({
        message: `Server started in port ${PORT} by Tran Quoc Phuong`,
        users: ["Tran","Quoc","Phuong"]
    });
});

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
})