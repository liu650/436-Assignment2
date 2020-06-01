import React from 'react';
import { connect } from 'react-redux';
import { sendMsg } from '../actions';

class MsgForm extends React.Component{
    render(){
        return (
        <div>

        <div>The number is: {this.props.msgObj.msgTemp}</div>
            {console.log(this.props.msgObj.msgList)}
        {console.log("hehe" + this.props.msgObj.msgTemp)}
        <form id="msgForm" >
            <input className="inputbox" type="text" id="msgInput" onChange = {(e) =>{this.props.msgObj.msgTemp = e.target.value}}/>
            <br/>
            <input className="cstomButton" type="button" value="SEND" onClick={() => {this.props.sendMsg(this.props.msgObj.msgTemp)}}/>
            <button className="customButton" type="button" onClick={() => {this.props.sendMsg(this.props.msgObj.msgTemp);}}>CLEAR</button>
            <br/>
        </form>
        </div>)
    }
}


const mapStateToProps = (state) => { //name is by convention
    return { msgObj: state.msgObj
        }; //now it will appear as props
}

export default connect(mapStateToProps, {sendMsg})(MsgForm);