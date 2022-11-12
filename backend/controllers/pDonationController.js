
const PlantDonation = require('../models/plantDonation');

//create Donation
const createPlantDonation = async (req, res) => {
    try {
        const { eventID, eventName, userId,userName, plantName, description, amount, date } = req.body;

        const donation = await PlantDonation.create({
            eventID,
            eventName,
            userId,
            userName,
            plantName,
            description,
            amount,
            date
        });
        

        res.status(201).json({ donation });
    } catch (err) {
        res.status(500).json({ message: err.message });

    }

}

//create PlantDonation get function
const getPlantDonations = function(req, res) {
    PlantDonation.find({}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create PlantDonation get by id function
const getPlantDonationById = function(req, res) {
    PlantDonation.findById(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};

//create PlantDonation get by event id function
const getPlantDonationByEventId = function(req, res) {
    PlantDonation.find({eventID: req.params.id}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create PlantDonation update function
const updatePlantDonation = function(req, res) {
   //create funtion to update amount with the new amount
   //create funtion to update amount with new amount
   PlantDonation.findById(req.params.id, function(err, result) {
    if (err) {
        res.status(500).send(err);
    } else {

        //increse amount
        result.amount = Number(result.amount) + Number(req.body.amount);
        result.eventID = req.body.eventID;
        result.eventName = req.body.eventName;
        result.userId = req.body.userId;
        result.userName = req.body.userName;
        result.plantName = req.body.plantName;
        result.description = req.body.description;
        result.date = req.body.date;
        result.save();
        res.json(result);
    }
});
};

//create PlantDonation delete function
const deletePlantDonation = function(req, res) {
    PlantDonation.findByIdAndRemove(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};

//get total amount of given event

const getTotalAmount = function(req, res) {
    PlantDonation.find({eventID: req.params.id}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            var total = 0;
            for (var i = 0; i < result.length; i++) {
                total += result[i].amount;
            }
            res.json(total);
        }
    });
};

//get a count of donations of given event
const getDonationCount = function(req, res) {
    PlantDonation.find({eventID: req.params.id}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result.length);
        }
    });
};

module.exports = {
    createPlantDonation,
    getPlantDonations,
    getPlantDonationById,
    updatePlantDonation,
    deletePlantDonation,
    getPlantDonationByEventId,
    getTotalAmount,
    getDonationCount
};

