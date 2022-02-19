import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home-page.styles.scss';

import { TasksContext } from '../../context/Tasks.context';
import { initTasksAction } from '../../actions/tasks.actions';

import Loader from '../../components/shared/loader/Loader.component';
import TaskForm from '../../components/task-form/TaskForm.component';
import TasksCounter from '../../components/tasks-counter/TasksCounter.component';
import Task from '../../components/task/Task.component';

import { getTasks } from '../../api/tasks.api';

const HomePage = () => {
    const navigate = useNavigate();

    const { tasksState, dispatchTasksState } = useContext(TasksContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        getTasks(controller)
            .then((tasks) => {
                dispatchTasksState(initTasksAction(tasks));
            })
            .catch(() => {
                navigate('*');
            });

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            controller.abort();
        };
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="home-page">
            <TaskForm />

            <TasksCounter />

            <ul className="tasks-container">
                {tasksState.length === 0 ? (
                    <div className="empty-list">Your list is empty</div>
                ) : (
                    tasksState.map(({ _id, task, completed }, index) => (
                        <Task key={_id} id={_id} index={index} task={task} completed={completed} />
                    ))
                )}
            </ul>
        </main>
    );
};

export default HomePage;
