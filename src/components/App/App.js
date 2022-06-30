import './App.module.scss';
import style from './App.module.scss'
import Converter from "../Converter/Converter";
import Header from "../Header/Header";
import {Route} from "react-router-dom";
import Login from "../Login/Login";
import {useSelector} from "react-redux";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <div className={style.app}>
            <Header/>

            <ProtectedRoute
                component={Login}
                exact path='/admin/login'
                isAuth={!isAuth}
            />

            <Route
                exact
                path='/converter'
                component={Converter}
            />
        </div>
    );
}

export default App;
