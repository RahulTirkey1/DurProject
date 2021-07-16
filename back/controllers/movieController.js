const express = require('express');
const { Movies } = require('../models/movies');
var router = express.Router();
var _id = require('mongoose').Types.ObjectId;


router.get('/list', (req, res) => {
    Movies.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Movie :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/movie/:id', (req, res) => {
    if (!_id.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Movies.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Movie :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/checkTitle/:title',(req,res)=>{
    Movies.exists({name:req.params.title},(err,doc)=>{
        if(!err){ res.send(doc);}
        else{console.log('Error in searching Movie Name :'+JSON.stringify(err,undefined,2)); }
    });
})

router.post('/addMovies', (req, res) => {
    var mov = new Movies({
        name: req.body.name,
        description: req.body.description,
        actor: req.body.actor,
    });
    mov.save((err, doc) => {
        if (!err) { res.send('success') } // res.send(doc);
        else { console.log('Error in Movies Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/update/:id', (req, res) => {
    if (!_id.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        description: req.body.description,
        actor: req.body.actor,
    };
    Movies.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send('success') } // res.send(doc);
        else { console.log('Error in Movies Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/delete/:id', (req, res) => {
    if (!_id.isValid(req.params.id))
       return res.status(400).send(`No record with given id : ${req.params.id}`);

    Movies.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Deleteting Movie :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;