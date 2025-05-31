const express = require('express');
const friendsController =  require('../controllers/friends.controller.js');

const friendRouter = express.Router();

friendRouter.use((req, res, next) => {
    console.log('ip address:', req.ip);
    next();
});

friendRouter.post('/', friendsController.addFriend);
friendRouter.get('/', friendsController.getFriends);
friendRouter.get('/send', friendsController.sendFile);
friendRouter.get('/:friendId', friendsController.getFriendById);


module.exports = friendRouter;