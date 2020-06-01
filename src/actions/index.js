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