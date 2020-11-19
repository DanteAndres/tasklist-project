const { Router } = require('express');
const router = Router();
const controller = require('../controllers/taskController');
const { LIST_ALL_TASK_ROUTES, CREATE_ONE_TASK_ROUTES, UPDATE_ONE_TASK_ROUTES,
        MARK_COMPLETED_TASK, DELETE_ONE_TASK_ROUTES, EDIT_RESPONSABLE_TASK_ROUTES, ALL_TASK_BY_USER } = require('../path');

//List of all task from db
router.get(LIST_ALL_TASK_ROUTES, controller.getAllTask);

//List of all task assigned to an specific user
router.get(ALL_TASK_BY_USER, controller.getTaskByUser);

//Create one Task
router.post(CREATE_ONE_TASK_ROUTES, controller.createOneTask);

//Update an especific Task
router.put(UPDATE_ONE_TASK_ROUTES, controller.updateOneTask);

//Mark one task as completed
router.put(MARK_COMPLETED_TASK, controller.markCompletedTask);

//Delete an specific Task
router.delete(DELETE_ONE_TASK_ROUTES, controller.deleteOneTask);

//Update an Responsable for an specific Task
router.put(EDIT_RESPONSABLE_TASK_ROUTES, controller.addResponsable);

module.exports = router; 