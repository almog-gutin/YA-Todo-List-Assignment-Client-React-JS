import React, { useContext, useState, useEffect } from 'react';
import './task.style.scss';

import { TasksContext } from '../../context/Tasks.context';
import * as taskActions from '../../actions/tasks.actions';

import * as taskAPI from '../../api/tasks.api';

const Task = ({ id, index, task, completed }) => {
    const { tasksState, dispatchTasksState } = useContext(TasksContext);

    const [taskClassName, setTaskClassName] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleTaskCompletion = async (event) => {
        const checkbox = event.target;
        const isCompleted = checkbox.checked;
        setIsCheckboxChecked(isCompleted);

        try {
            await taskAPI.updateTask(id, isCompleted ? 1 : 0);

            dispatchTasksState(taskActions.updateTaskAction(index, isCompleted));
        } catch (err) {
            alert('Something went wrong.');
            setIsCheckboxChecked(!isCompleted);
        }
    };

    const handleTaskDeletion = async () => {
        try {
            await taskAPI.deleteTask(id);

            dispatchTasksState(taskActions.deleteTaskAction(index));
        } catch (err) {
            alert('Something went wrong.');
        }
    };

    useEffect(() => {
        if (completed) {
            setTaskClassName('completed');
            setIsCheckboxChecked(true);

            return;
        }

        setTaskClassName('');
        setIsCheckboxChecked(false);
    }, []);

    return (
        <div className="task">
            <div className="content">
                <input type="checkbox" checked={isCheckboxChecked} onChange={handleTaskCompletion} />

                <h3 className={taskClassName}>{task}</h3>
            </div>

            <button type="button" onClick={handleTaskDeletion}>
                Delete
            </button>
        </div>
    );
};

export default Task;
