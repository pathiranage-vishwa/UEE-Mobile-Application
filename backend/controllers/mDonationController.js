
const MoneyDonation = require('../models/moneyDonation');

//create Donation
const createMoneyDonation = async (req, res) => {
    try {
        const { eventID, eventName, userId,userName, accountNumber, bankName, branchCode, amount, image, date } = req.body;

        const donation = await MoneyDonation.create({
            eventID,
            eventName,
            userId,
            userName,
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

//create MoneyDonation get by event id function
const getMoneyDonationByEventId = function(req, res) {
    MoneyDonation.find({eventID: req.params.id}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });

};
//create MoneyDonation update function
const updateMoneyDonation = function(req, res) {

    //create funtion to update amount with new amount
    MoneyDonation.findById(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {

            //increse amount
            result.amount = Number(result.amount) + Number(req.body.amount);
            result.accountNumber = req.body.accountNumber;
            result.bankName = req.body.bankName;
            result.branchCode = req.body.branchCode;
            result.image = req.body.image;
            result.date = req.body.date;
            result.save();
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
    deleteMoneyDonation,
    getMoneyDonationByEventId
};

