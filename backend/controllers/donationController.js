//create donation insert function
exports.createDonation = function(req, res) {
    var donation = new Donation(req.body);
    donation.save(function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create donation get function
exports.getDonations = function(req, res) {
    Donation.find({}, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create donation get by id function
exports.getDonationById = function(req, res) {
    Donation.findById(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create donation update function
exports.updateDonation = function(req, res) {
    Donation.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};
//create donation delete function
exports.deleteDonation = function(req, res) {
    Donation.findByIdAndRemove(req.params.id, function(err, result) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};

