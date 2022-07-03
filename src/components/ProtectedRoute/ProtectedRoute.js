import React from "react";
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    const {
        path,
        redirectTo='/',
        ...restProps
    } = props

    return props.isAuth
        ? (<Route component={Component} path={path} {...restProps} />)
        : (<Route path={path}><Redirect to={redirectTo} /></Route>)
}

export default ProtectedRoute;
