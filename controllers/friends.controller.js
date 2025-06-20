const friends = require("../models/friends.model");
const path = require('path');

function getFriends (req, res){
    res.json(friends);
}

function getFriendById(req, res){
    const friendId = Number(req.params.friendId);
    const friend =  friends[friendId];
    if(friend){
        res.json(friend);
    }else{
        res.sendStatus(404).json({ error: 'Friend not found' });
    }
}

function addFriend(req, res) {
    if(!req.body.name){
        return res.status(400).json({ error: 'Name is required' });
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }

    friends.push(newFriend);
    res.status(201).json(newFriend);
}

function sendFile (req, res) {
    res.sendFile(path.join(__dirname,'..','public', 'skimountain.jpg'));
}
module.exports = {
    getFriends,
    getFriendById,
    addFriend,
    sendFile,
};

