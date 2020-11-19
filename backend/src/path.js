module.exports = {
    SERVER_PORT: 3000,
    DATABASE_USER: 'ahsierra',
    DATABASE_PASS: 'Andres10',
    DATABASE_NAME: 'tasklist',
    LIST_ALL_TASK_ROUTES: '/all_task',
    CREATE_ONE_TASK_ROUTES: '/create_task',
    UPDATE_ONE_TASK_ROUTES: '/update_task/:id',
    MARK_COMPLETED_TASK: '/completed_task/:id',
    DELETE_ONE_TASK_ROUTES: '/deleted_task/:id',
    EDIT_RESPONSABLE_TASK_ROUTES: '/update_responsable/:id',
    ALL_TASK_BY_USER:'/all_Task_by_user/:id',
    LIST_ALL_USER_ROUTES: '/all_users',
    CREATE_ONE_USER_ROUTES: '/create_user',
    DELETE_ONE_USER_ROUTES: '/delete_user/:id'
}