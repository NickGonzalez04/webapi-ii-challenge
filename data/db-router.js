const express = require('express');

const db = require('./db')


const router = express.Router();


//GET - all posts
router.get('/', (req, res)=>{
  db.find(req.query)
  .then(db => {
      res.status(200).json(db);
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
        error: "The posts information could not be retrieved."
    });
  });
})

//GET - post for getting by id
router.get('/:id', (req,res)=> {
    db.findById(req.params.id)
    .then(db => {
        if (db) {
            res.status(200).json(db);
          } else {
            res.status(404).json({ message: "The post with the specified ID does not exist."
             });
          }
        })
        .catch(error => {
          // log error to database
          console.log(error);
          res.status(500).json({
            error: "The post information could not be retrieved."
          });
        });
      });

//GET - request for getting an id with sub route comments 
router.get('/:id/comments', (req,res)=>{
    db.findCommentById(req.params.id)
    .then(db => {
        res.status(200).json(db)
    })
    .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
          error: "The comments information could not be retrieved."
        });
      });
})


//DELETE - request for id 
// router.delete('/:id')



module.exports = router;