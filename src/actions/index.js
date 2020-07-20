
export const sendMsg = msg => {

    return {
        type: 'SEND',
        msg: msg
    };
};


export const clearMsg = () => {
    return {
        type: 'CLEAR'
    };
};

export const deleteMsg = (obj) => {
    return {
        type: 'DELETE',
        payload: obj
    };
};

export const fetchMsg = (obj) => {
    return {
        type: 'FETCH',
        payload: obj
    };
};
