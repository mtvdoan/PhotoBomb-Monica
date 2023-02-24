const UserController = require('../controllers/users.controller')

module.exports = app  => {
    app.post('/api/users/logout', UserController.logout)
    app.get('/api/users/', UserController.findAllUsers)
    app.post('/api/users/register', UserController.register)
    app.post('/api/users/login', UserController.login)
    app.delete('/api/users/:id', UserController.deleteUser)
    // app.get('/api/users/test', UserController.index)
    // app.get('/api/users/user-current', UserController.getLogged)
    app.put('/api/users/update/:id', UserController.updateUser)
}