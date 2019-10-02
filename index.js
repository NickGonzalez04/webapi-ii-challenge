const express = require('express');


//bring in the router component 
const dbRouter = require('./data/db-router');

//server with express
const server = express();

server.use(express.json());

//call all endpoints
server.use('/api/posts', dbRouter);




// server test request 
server.get('/', (req, res)=> {
    res.send('Hello From the server');
})








// Listen on port 
server.listen(7000, () => {
   console.log('\n*** Server Running on http://localhost:7000 ***\n')
})