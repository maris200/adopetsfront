import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../ui/home/screen/Home';

const RouterComponent = () =>{
    return (
        <Router>
            <Scene key = 'root'>
                <Scene 
                    key = "home"
                    component = {Home}
                    hideNavBar
                    initial/>    
            </Scene>
        </Router>
    );
};

export default RouterComponent;