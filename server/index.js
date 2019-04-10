const express = require ('express');
const app = require ('express')();
const bodyParser = require ('body-parser');
const path = require ('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public/dist')));
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});
app.listen(8080,()=>{
    console.log('Server listening')
})
module.exports=app;