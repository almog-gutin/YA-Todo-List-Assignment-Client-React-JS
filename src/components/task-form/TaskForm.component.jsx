import React, { useState, useEffect, useContext } from 'react';
import './task-form.styles.scss';

import { TasksContext } from '../../context/Tasks.context';
import { addTaskAction } from '../../actions/tasks.actions';

import SubmitButton from '../submit-button/SubmitButton.component';

import { addTask } from '../../api/tasks.api';

const TaskForm = () => {
    const { dispatchTasksState } = useContext(TasksContext);

    const [input, setInput] = useState('');
    const [isErrorMessageShown, setIsErrorMessageShown] = useState(false);

    const handleInput = (event) => {
        const taskInput = event.target.value;

        setInput(taskInput);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!input) {
            setIsErrorMessageShown(true);
            return;
        }

        try {
            const task = await addTask(input);
            dispatchTasksState(addTaskAction(task));

            setInput('');
        } catch (err) {
            alert('Something went wrong.');
        }
    };

    useEffect(() => {
        if (input) setIsErrorMessageShown(false);
    }, [input]);

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" value={input} placeholder="What needs to be done?" onInput={handleInput} />

                <SubmitButton backgroundColor={'#303134'} color={'#ffffff'}>
                    Add
                </SubmitButton>
            </div>

            {isErrorMessageShown && <div className="error-message">You must enter a task</div>}
        </form>
    );
};

export default TaskForm;
