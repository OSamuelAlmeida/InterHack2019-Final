import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainTemplate from '../template/MainTemplate';


function AppRouter(props) {
    return (
        <Router>
            <MainTemplate />
        </Router>
    );
}

export default AppRouter;