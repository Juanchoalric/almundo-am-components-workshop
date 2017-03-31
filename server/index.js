/**
 * Created by sebastiandebin on 31/03/17.
 */
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/:greeting',(req,res,next)=>{
    const {greeting} =  req.params;
    const {to} =  req.query;
    res.status(200).send(  greeting +" "+to);
});


app.listen(PORT, ()=>{
   console.log("Server running on " + PORT);
});

