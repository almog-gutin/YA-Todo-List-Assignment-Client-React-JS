export const TASKS_ACTION_TYPES = {
    INIT_TASKS: 'INIT_TASKS',
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
};

export const initTasksAction = (tasks) => ({
    type: TASKS_ACTION_TYPES.INIT_TASKS,
    payload: {
        tasks,
    },
});

export const addTaskAction = (task) => ({
    type: TASKS_ACTION_TYPES.ADD_TASK,
    payload: {
        task,
    },
});

export const updateTaskAction = (index, completed) => ({
    type: TASKS_ACTION_TYPES.UPDATE_TASK,
    payload: {
        index,
        completed,
    },
});

export const deleteTaskAction = (index) => ({
    type: TASKS_ACTION_TYPES.DELETE_TASK,
    payload: {
        index,
    },
});
