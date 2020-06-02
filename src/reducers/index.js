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
    } else if (action.type === 'DELETE') {
        let newObject = Object.assign({}, msgObj);
        newObject["msgList"].map((item) => {
            if (item.msg == action.payload.msg && item.time == action.payload.time) {
                newObject.msgList.splice(newObject["msgList"].indexOf(item), 1);
                return;
            }
        });
        return newObject;
    } else {
        return msgObj;
    }

};


export default combineReducers({
    count: counterReducer,
    msgObj: msgReducer
        // anotherKey: anotherReducer //all your reducers should be combined
});