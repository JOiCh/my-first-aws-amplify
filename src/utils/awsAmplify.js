/**
 * create aws-amplify API.get init data
 * @param {object} data 
 * @return 
 */
export const createAPIGetDataSimple = (data) => {
    if (data) {
        return ({
            // headers: {},
            // response: true,
            queryStringParameters: data,
        })
    }
    return ({})
}

/**
 * create aws-amplify API.post init data
 * @param {object} data 
 * @return 
 */
 export const createAPIPostDataSimple = (data) => {
    if (data) {
        return ({
            // headers: {},
            body: data,
        })
    }
    return ({})
}
/**
 * create aws-amplify API.post init data
 * @param {object} data 
 * @return 
 */
 export const createAPIDelectDataSimple = (data) => {
    if (data) {
        return ({
            // headers: {},
            body: data,
        })
    }
    return ({})
}