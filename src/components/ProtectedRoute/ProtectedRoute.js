import React from "react";
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    return props.isAuth
        ? (<Route component={Component} exact path={props.path} {...props} />)
        : (<Redirect to='/'/>)
}

export default ProtectedRoute;
