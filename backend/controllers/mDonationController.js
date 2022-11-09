
const MoneyDonation = require('../models/moneyDonation');

//create Donation
const createMoneyDonation = async (req, res) => {
    try {
        const { eventID, eventName, userId, accountNumber, bankName, branchCode, amount, image, date } = req.body;

        const donation = await MoneyDonation.create({
            eventID,
            eventName,
            userId,
            accountNumber,
            bankName,
            branchCode,
            amount,
            image,
            date
        });
        

        res.status(201).json({ donation });
    } catch (err) {
        res.status(500).json({ message: err.message });

    }

}

//create MoneyDonation get function
const getMoneyDonations = function(req, res) {
    MoneyDonation.find({}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create MoneyDonation get by id function
const getMoneyDonationById = function(req, res) {
    MoneyDonation.findById(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create MoneyDonation update function
const updateMoneyDonation = function(req, res) {
    MoneyDonation.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create MoneyDonation delete function
const deleteMoneyDonation = function(req, res) {
    MoneyDonation.findByIdAndRemove(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};

module.exports = {
    createMoneyDonation,
    getMoneyDonations,
    getMoneyDonationById,
    updateMoneyDonation,
    deleteMoneyDonation
};

