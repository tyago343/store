const express = require ('express');
const app = require ('express')();
const bodyParser = require ('body-parser');
const path = require ('path');
const UserRouter = require ('../routes/User-routes.js');
const db = require ('../db/index.js');
db.sync({force:true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));




app.use('/api/v1/users', UserRouter);



app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});
app.listen(8080,()=>{
    console.log('Server listening')
})
module.exports=app;