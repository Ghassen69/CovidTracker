const User = require('../models/User')
const Publication = require('../models/Publication');
const publication = require('../models/Publication');
const { db } = require('../models/User');
const { connect } = require('mongoose');


const ajout = (req, res, next) => {
    
   
            const publication = new Publication({
             description: req.body.description,
              usermail: req.body.usermail,
              userid:req.body.userid,
              usernamep:req.body.usernamep
            });
            publication
              .save()
              .then(result => {
                console.log(result);
                res.status(200).json({publication,
                  message: "ajout publication avec succées"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }

          const showPublication = (req, res, next) => {
            Publication.find()
                .then(publication => {
                    res.status(200).json({
                        publication,
                        message:"success"
                   


                    })
                })
                .catch(error => {
                    res.json({
                        message:'an error has occured!'
                    })
                })
        }


          
          module.exports = {
           ajout,showPublication
          }


         
