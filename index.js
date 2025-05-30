const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    { id: 0, name: 'Alice' },
    { id: 1, name: 'Bob' },
    { id: 2, name: 'Charlie' }
]

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get('/', (req, res) =>{
    res.send('Welcome to the Friends API!');
})
app.get('/friends', (req, res) =>{
    res.json(friends);
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend =  friends[friendId];
    if(friend){
        res.json(friend);
    }else{
        res.sendStatus(404).json({ error: 'Friend not found' });
    }
});