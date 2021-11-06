const Localisation=require('../models/Localisation')

const storeloc = (req, res, next) => {
    
    Localisation.find({ latitude:req.body.latitude , longitude:req.body.longitude})
    .exec()
    .then(locate => {
      if (locate.length  >0) {
        loc = new Localisation()
        loc=locate[0]
        loc.counter++
        loc.save();
        return res.status(200).json({
          message: "latitude and longitude found adding cases",
          loc
          
        });
      } else {
         
            loc = new Localisation({
              latitude:req.body.latitude,
              longitude:req.body.longitude,
              counter:1

            });  
            loc
              .save()
              .then(result => {
                console.log(result);
                res.status(200).json({
                  message: "latitude and longitude added successfully thank you",
                  loc
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

      const showlocs = (req, res, next) => {
        Localisation.find()
            .then(localisation => {
                res.json({
                    localisation,
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
        storeloc,showlocs
    }