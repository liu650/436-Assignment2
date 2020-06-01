import React from 'react';
import Button from './Button';
import MsgForm from './MsgForm';
import MsgPane from './MsgPane';

const App = () => {   //this is how you make a functional component
	return<div><Button/><MsgPane/><MsgForm/></div>;
}

export default App;