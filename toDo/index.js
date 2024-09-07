const express = require('express');

const port = 8083;

let app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

let lists = [];

app.get('/', (req, res) => {
    return res.render('index', {
        lists
    });
});

// app.post('/insertData', (req, res) => {
//     let { id, task, editId } = req.body;
//     if (editId) {
//         let data = lists.map((val) => {
//             if (val.id == editId) {
//                 val.task = task;
//             }
//             return val;
//         });
//         lists = data;
//     } else {
//         lists.push({ id, task });
//     }

//     return res.redirect('/');
// });

app.post('/insertData', (req, res) => {
    let { id, task, editId } = req.body;

    if (!task.trim()) {
        console.log('Empty task submission');
        return res.redirect('/');
    }

    if (editId) {
        let data = lists.map((val) => {
            if (val.id == editId) {
                val.task = task;
            }
            return val;
        });
        lists = data;
    } else {
        lists.push({ id, task });
    }

    return res.redirect('/');
});

app.get('/delItem/:id', (req, res) => {
    let { id } = req.params;
    console.log(id);

    let data = lists.filter((list) => list.id != id);
    lists = data;
    return res.redirect('/');
});

app.get('/editData/:id', (req, res) => {
    let { id } = req.params;
    console.log(id);

    const data = lists.find((list) => list.id == id);

    if (!data) {
        console.log(`Task with ID ${id} not found for editing`);
        return res.status(404).send("Task not found.");
    }

    return res.render('update', { data });
});

app.listen(port, (err) => {
    if (!err) {
        console.log("Server started on http://localhost:" + port);
    }
});

