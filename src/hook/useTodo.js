import { API } from 'aws-amplify'
import { useState } from 'react'
import { createAPIGetDataSimple, createAPIPostDataSimple, createAPIDelectDataSimple } from "../utils/awsAmplify";

export const useTodoList = () => {
    const [todolist, settodolist] = useState([])
    /**
     * 
     * @param {Object} searchOption 
     * @returns 
     */
    const getTodo = (searchOption) => {
        return API.get('myapi', `/todo`, createAPIGetDataSimple(searchOption))
            .then(({Items}) => {
                settodolist(Items)
                return Items
            })
            .catch((e) => {
                console.log('[device]  錯誤', e)
                return []
            })
    }
  
    return {
        todolist,
        getTodo,
    }
}

export const useTodoPostItem = ({title = '', description = '', dueTime = 0, status = 'todo'}) => {
    const [inputTitle, setinputTitle] = useState(title)
    const [inputDescription, setinputDescription] = useState(description)
    const [inputDueTime, setinputDueTime] = useState(dueTime)
    const [inputStatus, setinputStatus] = useState(status)
    /**
     * 
     * @param {Object} searchOption 
     * @returns 
     */
    const postTodo = () => {
        return API.post('myapi', `/todo`, createAPIPostDataSimple({
            title: inputTitle,
            description: inputDescription,
            dueTime: inputDueTime,
            status: inputStatus,
        }))
        .then((data) => {
            return data
        })
        .catch((e) => {
            console.log('[device]  錯誤', e)
            return {}
        })
    }
  
    return {
        item: {
            title: inputTitle,
            description: inputDescription,
            dueTime: inputDueTime,
            status: inputStatus,
        },
        setitem: {
            title: setinputTitle,
            description: setinputDescription,
            dueTime: setinputDueTime,
            status: setinputStatus,
        },
        postTodo
    }
}

export const useTodoPutItem = ({title = '', description = '', dueTime = 0, status = 'todo'}) => {
    const [inputTitle] = useState(title)
    const [inputDescription, setinputDescription] = useState(description)
    const [inputDueTime, setinputDueTime] = useState(dueTime)
    const [inputStatus, setinputStatus] = useState(status)
    /**
     * 
     * @param {Object} searchOption 
     * @returns 
     */
    const putTodo = () => {
        return API.post('myapi', `/todo`, createAPIPostDataSimple({
            title: inputTitle,
            description: inputDescription,
            dueTime: inputDueTime,
            status: inputStatus,
        }))
        .then((data) => {
            return data
        })
        .catch((e) => {
            console.log('[device]  錯誤', e)
            return {}
        })
    }
  
    return {
        item: {
            title: inputTitle,
            description: inputDescription,
            dueTime: inputDueTime,
            status: inputStatus,
        },
        setitem: {
            description: setinputDescription,
            dueTime: setinputDueTime,
            status: setinputStatus,
        },
        putTodo
    }
}

export const useTodoDelectItem = () => {
    /**
     * 
     * @param {Object} searchOption 
     * @returns 
     */
    const deleteTodo = (title) => {
        return API.del('myapi', `/todo`, createAPIDelectDataSimple({
            title
        }))
        .then((data) => {
            return data
        })
        .catch((e) => {
            console.log('[device]  錯誤', e)
            return {}
        })
    }
  
    return {
        deleteTodo
    }
}
