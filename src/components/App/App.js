import './App.module.scss';
import style from './App.module.scss'
import Converter from "../Converter/Converter";
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "../Login/Login";
import {useSelector} from "react-redux";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AdminPage from "../Admin/AdminPage/AdminPage";
import Currencies from "../Admin/Currencies/Currencies";
import React from "react";
import Dashboard from "../Admin/Dashboard/Dashboard";

function App() {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <div className={style.app}>
            <Header/>

            <Route
                exact
                path='/converter'
                component={Converter}
            />

            <ProtectedRoute
                component={Login}
                path='/admin/login'
                isAuth={!isAuth}
                redirectTo='/admin'
            />

            <ProtectedRoute
                component={AdminPage}
                path='/admin'
                isAuth={isAuth}
                redirectTo='/admin/login'
            />

            {/*<Route
                component={AdminPage}
                path='/admin'
            />*/}

        </div>
    );
}

export default App;
