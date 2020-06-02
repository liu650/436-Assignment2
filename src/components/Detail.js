import React from 'react';
import { connect } from 'react-redux';
import { deleteMsg } from '../actions';


class Details extends React.Component {
    constructor() {
        super();
        
        this.state = {flag: false};
        this._onClick = this._onClick.bind(this);
    }
    _onClick(){
        this.setState({flag: !this.state.flag});

    }
    render () {
        return (
            <div className="ab">
               {this.props.val["msg"]}
            <button className = "customButtonLittle" onClick = {this._onClick}> Open</button>
            <button className = "customButtonLittle" onClick = {() => this.props.deleteMsg(this.props.val)}> Delete</button>
            {this.state.flag && <span>Sent at {this.props.val["time"]}</span>}
            </div>
        )
    }
}
const mapStateToProps = (state) => { //name is by convention
    return { msgObj: state.msgObj
        }; //now it will appear as props
}


export default connect(mapStateToProps, {deleteMsg})(Details);