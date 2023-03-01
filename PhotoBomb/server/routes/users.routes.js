//USER ROUTES
const UserController = require("../controllers/users.controller");

module.exports = (app) => {
    app.post("/api/users/register", UserController.register);
    app.post("/api/users/login", UserController.login);
    app.get("/api/users/:id", UserController.findOneUser);
    app.get("/api/users/", UserController.findAllUsers);
    app.put("/api/users/update/:id", UserController.updateUser);
    app.post("/api/users/logout", UserController.logout);
    app.get("/api/users/user-current", UserController.getLogged);
    app.delete("/api/users/delete/:id", UserController.deleteUser);
};
