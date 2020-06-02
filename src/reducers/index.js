import { combineReducers } from 'redux';

let n = new Date().toLocaleTimeString();

const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.amount;
    }
    return count;
};
const msgReducer = (msgObj = { msgList: [{ msg: "Hello!", time: n }, { msg: "Say somthing", time: n }], msgTemp: "" }, action) => {
    if (action.type === 'SEND') {

        return Object.assign({}, msgObj, { msgList: [...msgObj["msgList"], { msg: action.msg, time: new Date().toLocaleTimeString() }] });
    } else if (action.type === 'CLEAR') {
        return Object.assign({}, msgObj, { msgList: [] });
    } {
        return msgObj;
    }

};


export default combineReducers({
    count: counterReducer,
    msgObj: msgReducer
        // anotherKey: anotherReducer //all your reducers should be combined
});