import { API } from 'aws-amplify'
import { createAPIGetDataSimple, createAPIPostDataSimple, createAPIDelectDataSimple } from "../utils/awsAmplify";

const useApiTodo = () => {
    /**
     * 
     * @param {Object} searchOption 
     * @returns 
     */
    const getTodo = (searchOption) => {
        return API.get('myapi', `/todo`, createAPIGetDataSimple(searchOption))
            .then(({Items}) => {
                return Items
            })
            .catch((e) => {
                console.log('[device]  錯誤', e)
                return []
            })
    }
    /**
     * 
     * @param {Object} searchOption 
     * @returns 
     */
     const postTodo = (postData) => {
        return API.post('myapi', `/todo`, createAPIPostDataSimple(postData))
        .then((data) => {
            return data
        })
        .catch((e) => {
            console.log('[device]  錯誤', e)
            return {}
        })
    }
    /**
     * 
     * @param {Object} searchOption 
     * @returns 
     */
     const putTodo = (putData) => {
        return API.post('myapi', `/todo`, createAPIPostDataSimple(putData))
        .then((data) => {
            return data
        })
        .catch((e) => {
            console.log('[device]  錯誤', e)
            return {}
        })
    }
    /**
     * 
     * @param {Object} searchOption 
     * @returns 
     */
     const deleteTodo = (delectData) => {
        return API.del('myapi', `/todo`, createAPIDelectDataSimple(delectData))
        .then((data) => {
            return data
        })
        .catch((e) => {
            console.log('[device]  錯誤', e)
            return {}
        })
    }  
    return {
        getTodo,
        postTodo,
        putTodo,
        deleteTodo
    }
}

export default useApiTodo