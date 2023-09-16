const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname +'/public'));

app.get('/', (req, res) => {
    res.send('Hello World 12345!')
})
app.get('/home', (req, res) => {
    //res.send('Hello Home')
    res.sendFile(__dirname+"/home.html")
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname+"/about.html")
})
app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+"/contact.html")
})
app.get('/process', (req,res)=>{
        var a = req.query.txt1;
        var b = req.query.txt2;
        var c = parseInt(a) + parseInt(b);
        res.send(`A Value is ${a} B Value is ${b} Sum is ${c} `);
})
app.get('/about/akash', (req, res) => {
    res.send('Hello About us Akash')
})

app.get('/product/', (req,res)=>{
    res.send("<h1>Product </h1>" )
})
//http://127.0.0.1:3000/product/1
app.get('/product/:id/', (req,res)=>{
    var aid = req.params.id;
    res.send("<h1>Product id is " + aid + "</h1>" )
})
//http://127.0.0.1:3000/product/1/edit
app.get('/product/:id/:action', (req,res)=>{
    var aid = req.params.id;
    var act = req.params.action;
    res.send("<h1>Product id is " + aid +" Action is" + act + "</h1>" )
})
//http://127.0.0.1:3000/search?q=iphone
app.get('/search', (req, res) => {
    var q = req.query.q;
    res.send('Search items: ' + q)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})