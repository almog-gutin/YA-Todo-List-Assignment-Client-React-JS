import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getTasks = async (controller) => {
    const result = await axios.get(`${API_URL}/tasks`, { signal: controller.signal });

    const data = result.data;
    const tasks = data.data;

    return tasks;
};

export const addTask = async (task) => {
    const result = await axios.put(`${API_URL}/tasks/new`, { task });
    const data = result.data.data;

    return data;
};

export const updateTask = async (id, completed) => {
    await axios.patch(`${API_URL}/tasks/${id}?completed=${completed}`);
};

export const deleteTask = async (id) => await axios.delete(`${API_URL}/tasks/${id}`);
