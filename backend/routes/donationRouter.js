//create donation router

var express = require('express');
var router = express.Router();
var donationController = require('../controllers/donationController.js');

router.post('/', donationController.createDonation);
router.get('/', donationController.getDonations);
router.get('/:id', donationController.getDonationById);
router.put('/:id', donationController.updateDonation);
router.delete('/:id', donationController.deleteDonation);


