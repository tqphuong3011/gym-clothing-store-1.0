const newsRouter = require('./news');
const siteRouter = require('./site');
const productsRouter = require('./products');

function route(app) {
    // Create API test

    app.use('/news', newsRouter);
    app.use('/products', productsRouter);
    app.use('/', siteRouter);

    // app.get("/news", (req,res) => {
    //      res.render('news');
    // });

    // app.get("/", (req,res) => {
    //      res.render('test');
    // });

    // app.get("/api/search", (req,res) => {
    //      res.render('search');
    // });

    // app.get("/login", (req,res) => {
    //      res.render('login');
    // });

    // app.post("/login", (req,res) => {
    //      console.log(req.body)
    //      res.render('login');
    // });

    // app.get("/api/home", (req,res) => {
    //      res.json({
    //      message: `Server started in port ${port} by Tran Quoc Phuong`,
    //      users: ["Tran","Quoc","Phuong"]
    //      });
    // });
}

module.exports = route;
