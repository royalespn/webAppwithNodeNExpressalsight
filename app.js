let express = require('express');
let debug = require('debug')('iman-app'); 
let morgan = require('morgan');
let path = require('path');

let app = express();
app.use(morgan('tiny'));


app.get('/', (req, res)=>{
 res.sendFile(path.join(__dirname,'view/index.html'));
});

app.listen(3000, ()=>{
   // console.log("running express on port 3000");
   debug("running express on port: 3000");
});