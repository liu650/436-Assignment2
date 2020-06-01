import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';

class Button extends React.Component {
	render() {
		return (
        <div>
			<h1>The number is: {this.props.count}</h1>
            <button onClick={() => this.props.increment(500)}>
                Click Me!</button>
        </div>);
	}
}

//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return { count: state.count }; //now it will appear as props
}

export default connect(mapStateToProps, { increment })(Button);