const express = require('express');
const cors = require('cors')
const app = express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from my own smarty pant! with auto restart')
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['apple', 'orange', 'mango'])
});

app.get('/fruits/apple/fazle', (req, res) => {
    res.send('sour sour fazle flavor')
})

const users = [
    {id:1, name:'sabana', email:'sabana@gmail.com', phone:"01723454624"},
    {id:2, name:'shabnoor', email:'shabnoor@gmail.com', phone:"01723454624"},
    {id:3, name:'suchorita', email:'suchorita@gmail.com', phone:"01723454624"},
    {id:4, name:'suchonda', email:'suchonda@gmail.com', phone:"01723454624"},
    {id:5, name:'srabonti', email:'srabonti@gmail.com', phone:"01723454624"},
    {id:6, name:'sabila', email:'sabila@gmail.com', phone:"01723454624"},
    {id:7, name:'sohana', email:'sohana@gmail.com', phone:"01723454624"},
]




app.get('/users', (req, res) => {
    console.log('query', req.query);
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
    }
    else{

        res.send(users)
    }
    
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id ===  +id);
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port);
})

