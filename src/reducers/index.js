import { combineReducers } from 'redux';

const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.amount;
    }
    return count;
};
const msgReducer = (msgObj = { msgList: ["hello", "world"], msgTemp: "" }, action) => {
    if (action.type === 'SEND') {
        return Object.assign({}, msgObj, { msgList: [...msgObj["msgList"], action.msg] });
    } else {
        return msgObj;
    }

};


export default combineReducers({
    count: counterReducer,
    msgObj: msgReducer
        // anotherKey: anotherReducer //all your reducers should be combined
});