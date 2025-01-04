const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3001;

// Static file
app.use(express.static(path.join(__dirname,'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', handlebars.engine({
    extname:'.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));
console.log(path.join(__dirname,'resources/views'));

// Midleware API
app.use(cors());

// Create API test
app.get("/", (req,res) => {
    res.render('test');
});

app.get("/api/home", (req,res) => {
    res.json({
        message: `Server started in port ${port} by Tran Quoc Phuong`,
        users: ["Tran","Quoc","Phuong"]
    });
});

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
});