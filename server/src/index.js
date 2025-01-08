const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;
const route = require('./routes');

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Midleware RQ
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    '.hbs',handlebars.engine({
        extname: '.hbs',
    }),
);
                app.set('view engine', '.hbs');
                app.set('views', path.join(__dirname, 'resources/views'));
                console.log(path.join(__dirname, 'resources/views'));

// Midleware API
app.use(cors());

// Routes init
route(app);

// Listen port
                app.listen(port, () => {
                    console.log(`Server started in port ${port}`);
                });
