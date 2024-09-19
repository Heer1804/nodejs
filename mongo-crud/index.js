const express = require('express');
const db = require('./config/database');
const bodyParser = require('body-parser');
const user = require('./models/userSchema');

const port = 8086;

const app = express();

app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    user.find({}).then((data) => {
        console.log(data);
        return res.render('index', {
            data
        });
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.post('/insertData', (req, res) => {
    let { username, email,phoneno, password,address,gender,hobbies} = req.body;
    user.create({
        username: username,
        email: email,
        phone: phoneno,
        password: password,
        address:address,
        gender:gender,
        hobbies:hobbies
       
    }).then((data) => {
        console.log(data);
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })

})

app.listen(port, (err) => {
    if (!err) {
        db
        console.log("Server Start http://localhost:" + port);
    }
})