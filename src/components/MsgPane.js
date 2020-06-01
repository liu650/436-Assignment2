import React from 'react';
import { connect } from 'react-redux';



class MsgPane extends React.Component {
    
    render () {
        return (<div> 
            
            <ul> 
                 {generateList(this.props.msgObj.msgList)}</ul>
        </div>)
    }
}
const mapStateToProps = (state) => { //name is by convention
    return { msgObj: state.msgObj
        }; //now it will appear as props
}

const generateList = (array) => {
    console.log(array);
    return array.map((item) => (<li>{item}</li>))};

export default connect(mapStateToProps,{})(MsgPane);