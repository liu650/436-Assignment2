
import Button from './Button';
import MsgForm from './MsgForm';
import MsgPane from './MsgPane';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {fetchMsg} from "../actions";

const App = () => { //this is how you make a functional component

    useEffect((dispatch) => {
        // Update the document title using the browser API
        axios.get('http://localhost:9000/').then((result) => {dispatch(fetchMsg(result))});
    });

    return <div > <h1>CPSC436i Assignment2 MessageApp</h1>< MsgPane /> < MsgForm/> </div>;
}

export default App;