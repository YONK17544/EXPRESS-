const express = require('express');
const friendRouter = require('./routes/friends.router.js');

const app = express();

const PORT = 3000;



app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.use((req, res, next) =>{
    console.log(`${req.method} request for '${req.baseUrl}/${req.url}'`);
    next();
})

app.use(express.json());

app.use('/friends',friendRouter);