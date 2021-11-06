const User = require('../models/User')
const USER = require('../models/User')
const users=[]
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
//show the list of users
const index = (req, res, next) => {
    USER.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message:'an error has occured!'
            })
        })
}


//SHOW SINGLE USER BY ID
const show = (req, res, next) => {
    let userID = req.body.userID
    USER.findById(userID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'an error has occured!'
            })
            
        })
}

//CREATE USER

const store = (req, res, next) => {
    
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              name: req.body.name,
              password: hash,
              email: req.body.email,
              phone: req.body.phone
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(200).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
         
}

//UPADTE USER BY ID

const update = (req, res, next) => {
    let userID = req.body.userID
    let updateData = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone
    }
    USER.findByIdAndUpdate(userID, { $set: updateData })
        .then(() => {
            res.json({

                message:'User updated successfully!'

            })
        })
        .catch(error => {
            res.json({
                message:'an error has occured!'
            })
        })

}

//DELETE USER

const destroy = (req, res, next) => {
    let userID = req.body.userID

    USER.findByIdAndDelete(userID)
        .then(() => {
            res.json({
                message:'deleted successfully!'
            })

        })
        .catch(error => {
            res.json({
                message:'an error has occured!'
            })
        })
}

//LOGIN


const login=(req,res,next)=>{
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
          ,error:true
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
            ,error:true
            
          });
        }
        if (result) {
          
          return res.json({user
           ,message:"auth successful"
           ,error:"false"
          }).status(201)  
   }
        res.status(401).json({
          message: "Auth failed"
          ,error:true
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });


}
module.exports = {
    index,show,store,update,destroy,login
}
 











