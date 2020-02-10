let express = require('express');
let router = express.Router();

// this created router can be accessed via localhost 3000
    router.get('/person', (req,res)=> {
        // queryString => is basically a query property on the request object
        // localhost 3000/person?name 'anything after question mark is a part of queryString and it's a key value pair
        //localhost 3000/person?name=thomas&age=24
        // this is part of the querystring
        if(req.query.name){
            res.send(`you have requested a person ${req.query.name  }`)
        }else{
        res.send('you are connected');
        }
    });
// params property on the request object
// adding sub route
//localhost 3000/person/thomas
// this is part of route
    router.get('/person/:name', (req,res) => {
        res.send(`you have requested a person ${req.param.name}`)
})

router.get('/error', (req,res) => {
    throw new Error('this is a forced error')
})
// that allow us to import it in js file  
module.exports = router;