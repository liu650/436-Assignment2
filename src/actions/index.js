export const increment = amount => {
    return {
        type: 'INCREMENT_COUNTER',
        amount: amount
    };
};

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