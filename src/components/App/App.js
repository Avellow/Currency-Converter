import './App.module.scss';
import style from './App.module.scss'
import Converter from "../Converter/Converter";
import Header from "../Header/Header";
import {Route} from "react-router-dom";
import Login from "../Login/Login";

function App() {

    return (
        <div className={style.app}>
            <Header/>

            <Route
                exact
                path='/converter'
                component={Converter}
            />

            <Route
                exact
                path='/admin'
                component={Login}
            />

        </div>
    );
}

export default App;
