import { api } from "../api/api";


export const GET_ALL_TASKS = () => {
    try {
        return api.get("tasks")
            .then(res => res.data)
            .catch(err => console.log(err));
    }catch(e){
        throw(e);
    }
}

export const GET_TASKS_BY_ID = (id) => {
    if (typeof (id) === 'number') {
        return api.get(`tasks/${id}`)
            .then(res => res.data)
            .catch(err => console.log(err));
    } else {
        throw new Error('Data being fed into the get task is not a number!!! here it is: ' + id);
    }
}

export const ADD_TASK = (data) => {
    if (typeof (data) === 'object') {
        return api.post("tasks", data)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    } else {
        throw new Error('Data being fed into the add task is not an object!!! here it is: ' + data);
    }
}

export const DELETE_TASK = (id) => {
    if (typeof (id) === 'number') {
        return api.delete(`tasks/${id}`)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    } else {
        throw new Error('the Id entered was not a number!!! Take a look: ' + id);
    }
}

export const TOGGLE_TASK_REMINDER = async (id) => {
    if (typeof (id) === 'number') {
        let getTaskId = await GET_TASKS_BY_ID(id);
        if (getTaskId != null) {
            return api.patch(`tasks/${id}`, {
                reminder: !getTaskId.reminder
            })
                .then((res) => res.data)
                .catch((err) => console.log(err));
        }
    } else {
        throw new Error('the Id entered was not a number!!! Take a look: ' + id);
    }
}