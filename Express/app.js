const express = require("express")
const path = require("path");
const app = express();
const port = 80;

// For Serving static files 
app.use('/static', express.static('static'))

// set the template engine as pug 
app.set('view engine', 'pug')

// set the views directory 
app.set('views', path.join(__dirname, 'views'))

// pug demo endpoint 
app.get('/',(req,res)=>{
    res.status(200).render('demo', { title: 'Hey Vivek', message: 'Hello there!' })
});



app.get('/about',(req,res)=>{
    res.send("this is my first about  express app ")
});
app.post('/about',(req,res)=>{
    res.send("this is my first about  express app ")
});

app.listen(port,()=>{
    console.log(`this is Apllication Started on port ${port}`)
})
