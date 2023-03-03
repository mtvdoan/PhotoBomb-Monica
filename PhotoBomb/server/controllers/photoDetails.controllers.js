const PhotoDetails = require('../models/photoDetails.model');

module.exports = {
    findAllPhotoDetails: (req, res) => {
        PhotoDetails
            .find()
            .then((allPhotoDetails) => res.json(allPhotoDetails))
            .catch((err) => res.status(400).json({message: 'Something went wrong while trying to view all photoDetails', error: err}))
    },

    findOnePhotoDetails: (req, res) => {
        PhotoDetails
            .findById(req.params.id, )
            .then((photoDetails) => res.json(photoDetails))
            .catch((err) => res.status(400).json({message: 'Something went wrong while trying to find details of a photoDetails', error: err}))
    },
    createPhotoDetails: (req, res) => {
        console.log("what is away req.body", req.body)
        PhotoDetails
            .create(req.body)
            .then((newPhotoDetails) => res.json(newPhotoDetails))
            .catch((err) =>
                res.status(400).json({message: 'Something went wrong while trying to create', error:err}))
            console.log(req.body);
    },

    updatePhotoDetails: (req, res) => {
        PhotoDetails
            .findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
            .then(updatedPhotoDetails => res.json({updatedPhotoDetails}))
            .catch((err) => res.status(400).json({message: "Something went wrong while updating.", error:err}))
    },
    
    deletePhotoDetails: (req, res) => {
        PhotoDetails
            .findByIdAndDelete(req.params.id)
            .then(deletedPhotoDetails => res.json({deletedPhotoDetails}))
            .catch((err) => res.status(400).json({message: "Something went wrong while deleting.", error:err}));
    }
};



