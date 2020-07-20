import React from 'react';
import { connect } from 'react-redux';
import { sendMsg, clearMsg } from '../actions';


class MsgForm extends React.Component{
    constructor() {
        super();
        this.input = React.createRef();
        }
        

    render(){
        return (
        <div>
        {console.log(this.props.msgObj.msgList)}
        {console.log("hehe " + this.props.msgObj.msgTemp)}
        <form id="msgForm">
            <input className="inputbox" type="text" id="msgInput" ref = {this.input} onChange = {(e) =>{this.props.msgObj.msgTemp = e.target.value; }} />
            <br/>
            <input className="customButton" type="button" value="SEND" onClick={(e) => {this.props.sendMsg(this.props.msgObj.msgTemp); this.input.current.value=""}}/>
            <button className="customButton" type="button" onClick={() => {this.props.clearMsg()}}>CLEAR</button>
            <br/>
        </form>
        </div>)
    }
}


const mapStateToProps = (state) => { //name is by convention
    return { msgObj: state.msgObj
        }; //now it will appear as props
}

export default connect(mapStateToProps, {sendMsg, clearMsg})(MsgForm);