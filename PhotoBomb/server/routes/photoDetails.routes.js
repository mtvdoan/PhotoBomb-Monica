const PhotoDetailsController = require('../controllers/photoDetails.controllers');
module.exports = (app) => {
    app.get('/api/photoDetails/', PhotoDetailsController.findAllPhotoDetails);
    app.get('/api/photoDetails/:id/', PhotoDetailsController.findOnePhotoDetails);
    app.post('/api/photoDetails/create/', PhotoDetailsController.createPhotoDetails);
    app.put('/api/photoDetails/update/:id', PhotoDetailsController.updatePhotoDetails);
    app.delete('/api/photoDetails/delete/:id', PhotoDetailsController.deletePhotoDetails);
};