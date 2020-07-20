var express = require('express');
var router = express.Router();

var { uuid } = require('uuidv4');


// Step: set up mongoose connection
const mongoose = require('mongoose');
let str = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-mkryl.mongodb.net/msgdb';
mongoose.connect(str,{ useNewUrlParser: true, useUnifiedTopology: true }).catch(e => {
  console.error('Connection error', e.message)
});
const db = mongoose.connection;




// Step: SCHEMA
// var mongoose = require('mongoose');
let messageSchema = new mongoose.Schema({
  msg: String,
  date: {
    type: Date,
    Default: Date.now
  }
});

let Message = mongoose.model('msgdb', messageSchema);



// Step: ROUTES

// get all messsages
router.get('/all', function(req, res, next) {
  Message.find({},function (err, docs) {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send(docs);
      }
  })
});

// get single messages by id
router.get('/:id', function(req, res, next) {
  // // if there isn't a body
  // if (req.body.isNaN){
  //   return res.status(400).json({
  //     success: false,
  //     message: 'Error No Body!',
  //   });
  // }
  Message.findById(req.params.id,function (err, doc) {
    if (err) {
      return res.status(400).send(err);
    } else {
      return res.status(200).send(doc);
    }
  })
});
// delete a message by id
router.delete('/:id',function(req, res, next) {
  // if there isn't a body

  let id =  req.params.id;
  Message.findByIdAndDelete(id, function (err,result) {
    if (err) {
      return res.status(400).send(err);
    } else {
      return res.status(200).send({result, "dw": "success"});
    }

  });
});

// delete all
router.delete('/all',function(req, res,next) {
  Message.deleteMany({},function (err,doc) {
    if (err){
      return res.status(400).send(err);
    } else {
      return res.status(200).send(doc);
    }
  }
  );
});


// insert a new message
router.post('/mesg', function(req, res, next) {
  // if there isn't a body
  if (req.body.isNaN){
    return res.status(400).json({
      success: false,
      message: 'No Body!',
    });
  }
  res.setHeader('Content-Type', 'application/json');
  let date = Date.now();
  let msg = req.body.from;
  const newMessage = new Message({msg});


  newMessage.save()
      .then(doc => {

        return res.status(201).json({
          success: true,
          id: newMessage._id,
          dada: doc,
          item: doc.date.getTime()
      });
      })
      .catch(err => {
        return res.status(400).send(err);
      });
});

// TODO: BONUS update a message
router.put('/:id', function (req, res, next) {
  if (req.body.isNaN){
    return res.status(400).json({
      success: false,
      message: 'No Body!',
    });
  }
  let id = req.params.id;
  let text = req.body.text;
  Message.findByIdAndUpdate(id,{msg: text},{new:true,passRawResult:true},function (err,result) {
      if (err){
        return res.status(400).json({"wad": "ww", err});
      } else {
        return res.status(200).json({"wad": "1111", result});
      }
  })
});


module.exports = router;