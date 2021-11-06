const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const publicationController = require('../controllers/publicationController')
const commentaireController = require('../controllers/commentaireController')
const publication = require('../models/Publication')
const localisationController = require('../controllers/localisationController')

router.get('/', userController.index)
router.post('/show', userController.show)
router.post('/store', userController.store)
router.post('/update', userController.update)
router.post('/delete', userController.destroy)
router.post('/log', userController.login)
router.post('/ajout', publicationController.ajout)
router.post('/add',commentaireController.ajout)
router.post('/add',commentaireController.ajout)
router.get('/showpub',publicationController.showPublication)
router.post('/addloc',localisationController.storeloc)
router.get('/showlocs',localisationController.showlocs)


/*router.post('/ajout', function (res, req){
    publicationController.ajout
});

router.post('/show', function (res, req) {
    userController.show
});
router.post('/store', function (res, req) {
    userController.store
});
router.post('/update', function (res, req) {
    userController.update
});
router.post('/delete', function (res, req)   {
    userController.destroy
});*/

module.exports = router