//create donation router

var express = require('express');
var router = express.Router();
var mDonationController = require('../controllers/mDonationController');

router.post('/', mDonationController.createMoneyDonation);
router.get('/', mDonationController.getMoneyDonations);
router.get('/:id', mDonationController.getMoneyDonationById);
router.get('/event/:id', mDonationController.getMoneyDonationByEventId);
router.get('/total/:id', mDonationController.getTotalAmount);
router.get('/count/:id', mDonationController.getDonationCount);
router.put('/:id', mDonationController.updateMoneyDonation);
router.delete('/:id', mDonationController.deleteMoneyDonation);

module.exports = router;


