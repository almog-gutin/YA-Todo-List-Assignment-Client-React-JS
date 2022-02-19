import React, { useContext, useMemo } from 'react';
import './tasks-counter.styles.scss';

import { TasksContext } from '../../context/Tasks.context';

const TasksCounter = () => {
    const { tasksState } = useContext(TasksContext);

    const totalTasks = useMemo(() => {
        return tasksState.length;
    }, [tasksState]);
    const undoneTasks = useMemo(() => {
        let count = 0;

        tasksState.forEach((task) => !task.completed && count++);

        return count;
    }, [tasksState]);

    return (
        <div className="tasks-counter">
            <div>{`Total: ${totalTasks}`}</div>

            <div>{`Undone: ${undoneTasks}`}</div>
        </div>
    );
};

export default TasksCounter;
