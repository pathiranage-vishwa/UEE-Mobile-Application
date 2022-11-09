//create donation router

var express = require('express');
var router = express.Router();
var pDonationController = require('../controllers/pDonationController');

router.post('/', pDonationController.createPlantDonation);
router.get('/', pDonationController.getPlantDonations);
router.get('/:id', pDonationController.getPlantDonationById);
router.put('/:id',  pDonationController.updatePlantDonation);
router.delete('/:id', pDonationController.deletePlantDonation);

module.exports = router;


