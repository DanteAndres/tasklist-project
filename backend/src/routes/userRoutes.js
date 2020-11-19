const { Router } = require('express');
const router = Router();
const controller = require('../controllers/userController');
const { LIST_ALL_USER_ROUTES, CREATE_ONE_USER_ROUTES, DELETE_ONE_USER_ROUTES } = require('../path');

//List of all users
router.get(LIST_ALL_USER_ROUTES, controller.getAllUsers);

//Create one User
router.post(CREATE_ONE_USER_ROUTES, controller.createOneUser);

//Delete one User
router.delete(DELETE_ONE_USER_ROUTES, controller.deleteOneUser);

module.exports = router;