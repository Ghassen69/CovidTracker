const User = require('../models/User')
const Publication = require('../models/Publication')
const Commentaire = require('../models/Commentaire')


const ajout = (req, res, next) => {
    
   
            const commentaire = new Commentaire({
              comment: req.body.Commentaire,
              userid: req.body.userid,
              publicationid: req.body.publicationid
            });
           commentaire
              .save()
              .then(result => {
                console.log(result);
                res.status(200).json({
                  message: "ajout commentaire avec succées"
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
           ajout
          }
         
