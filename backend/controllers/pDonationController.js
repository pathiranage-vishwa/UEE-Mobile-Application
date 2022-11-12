
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
    PlantDonation.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
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

module.exports = {
    createPlantDonation,
    getPlantDonations,
    getPlantDonationById,
    updatePlantDonation,
    deletePlantDonation,
    getPlantDonationByEventId
};

