const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//Home Page Information
app.get('/',(req, res) => {
    res.send('Wow! i am excited to learning node and express.');
});

//Dynamic API information
const users = [
    {id:0, name: 'Meherunnesa Tuli', email: 'Meherunnesa@gmail.com', phone: '01516358828'},
    {id:1, name: 'Shabana', email: 'shabana@gmail.com', phone: '01516358828'},
    {id:2, name: 'Sabnoor', email: 'Sabnoor@gmail.com', phone: '01516358828'},
    {id:3, name: 'Shahinnor', email: 'Shahinnor@gmail.com', phone: '01516358828'},
    {id:4, name: 'Nowshin', email: 'Nowshin@gmail.com', phone: '01516358828'},
    {id:5, name: 'Iqra', email: 'Iqra@gmail.com', phone: '01516358828'},
    {id:6, name: 'Sanjida', email: 'Sanjida@gmail.com', phone: '01516358828'},
    {id:7, name: 'Tamanna', email: 'Tamanna@gmail.com', phone: '01516358828'},
    {id:8, name: 'Punom', email: 'Punom@gmail.com', phone: '01516358828'}
]

//How To Search In Any Goods In Website
app.get('/users',(req, res) => {
    const search = req.query.search;
    //Using query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})
//app.METHOD
app.post('/users',(req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//Many pages Information && Dynamic API(id search)
app.get('/users/:id',(req, res) => {
    const id = req.params.id;
    const user= users[id]
    res.send(user);
})

app.get('/fruits',(req, res) => {
    res.send(['mango', 'Oranges', 'Banana', 'Apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})


// This is the LIVE Website
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })