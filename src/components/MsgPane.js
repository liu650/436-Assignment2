import React from 'react';
import { connect } from 'react-redux';
import Detail from './Detail';

class MsgPane extends React.Component {
    
    render () {
        return (<div id="msgPane"> 
            
            <ul> 
                 {generateList(this.props.msgObj.msgList)}
            </ul>
        </div>)
    }
}
const mapStateToProps = (state) => { //name is by convention
    return { msgObj: state.msgObj
        }; //now it will appear as props
}

const generateList = (array) => {
    console.log(array);
    return array.map((item) => (<li ><Detail val={item}/></li> ))};

export default connect(mapStateToProps,{})(MsgPane);