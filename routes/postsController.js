const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log("Error to get data : " + err)
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err)
    })
})

// Update
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknow : " + req.params.id)
    
    const updateRecord = {
      author: req.body.author,
      message: req.body.message
    };
  
    PostsModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateRecord},
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Update error : " + err);
      }
    )
  });

module.exports = router