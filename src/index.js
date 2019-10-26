let express = require('express');
let app = express(); 
// import or reference  the route file  from route folder
let personRoute = require('./Routes/person');
let customerRoutes = require('./Routes/customer');
let path = require('path');
// body-parser is a piece of  express middleware that read the form' input and store it in object through req.body 
let bodyParser = require('body-parser');


// it is taking any incoming json string and create attr called body
app.use(bodyParser.json())
// middleware
app.use((req,res,next) => { // next is reference to the next function in the pipeline
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    
    next();
})
// tell express to register this route
app.use(personRoute);
app.use(customerRoutes)
// to attach the express static via a static function , that will tell express to use a specific static file also known a middleware
app.use(express.static('public'));
//middleware handler for 404 not found
app.use((req,res,next) => {
    res.status(404).send('we think you are lost !!! ');
    next()
})

//middleware handler for 500 - internal server error
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'))

})
//express to listen to the port

let PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server is running on ${PORT}`))