import _ from 'lodash';

import { TASKS_ACTION_TYPES } from '../actions/tasks.actions';

export const TASKS_INITIAL_STATE = [];

const tasksReducer = (state, action) => {
    switch (action.type) {
        case TASKS_ACTION_TYPES.INIT_TASKS: {
            const { tasks } = action.payload;

            return _.cloneDeep(tasks);
        }
        case TASKS_ACTION_TYPES.ADD_TASK: {
            const { task } = action.payload;

            const updatedTasks = _.cloneDeep(state);
            updatedTasks.push(task);

            return updatedTasks;
        }
        case TASKS_ACTION_TYPES.UPDATE_TASK: {
            const { index, completed } = action.payload;

            const updatedTasks = _.cloneDeep(state);
            updatedTasks[index].completed = completed;

            return updatedTasks;
        }
        case TASKS_ACTION_TYPES.DELETE_TASK: {
            const { index } = action.payload;
            const updatedTasks = _.cloneDeep(state);
            updatedTasks.splice(index, 1);

            return updatedTasks;
        }
        default:
            return _.cloneDeep(state);
    }
};

export default tasksReducer;
