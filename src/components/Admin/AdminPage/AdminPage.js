import React from "react";
import {Menu} from "../Menu/Menu";
import style from './AdminPage.module.scss'
import {Route} from "react-router-dom";
import Currencies from "../Currencies/Currencies";
import Dashboard from "../Dashboard/Dashboard";

const AdminPage = (props) => {

    return (
        <section className={style.container}>
            <Menu />
            <Route
                component={Currencies}
                path='/admin/currencies'
            />
            <Route
                component={Dashboard}
                path='/admin/dashboard'
            />
        </section>
    )
}

export default AdminPage;
