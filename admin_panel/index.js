
const express = require('express')

const port = 8084

let app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.render('index', {
    });
})

app.listen(port,(err)=>{
    if(!err){
        console.log("server start on http://localhost:"+port);
    }
})
