const UserController = require('../controllers/users.controller')

module.exports = app  => {
    app.post('/api/users/register', UserController.register)
    app.post('/api/users/login', UserController.login)
    app.post('/api/users/logout', UserController.logout)
    app.get('/api/users/:id', UserController.findOneUser)
    app.get('/api/users/', UserController.findAllUsers)
    app.put('/api/users/update/:id', UserController.updateUser)
    app.delete('/api/users/delete/:id', UserController.deleteUser)
    app.get('/api/users/user-current', UserController.getLogged)

}