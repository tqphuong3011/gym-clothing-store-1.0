const express = require('express');
const morgan = require('morgan');
const expressHBS = require('express-handlebars');
const cors = require('cors');
const path = require('path');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3001;

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Middleware RQ
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Express middleware
app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    '.hbs',
    expressHBS.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Midleware API
app.use(cors());

// Routes init
route(app);

// Listen port
app.listen(port, () => {
    console.log(`Server started in port ${port}`);
});
