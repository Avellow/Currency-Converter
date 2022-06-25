import './App.module.scss';
import style from './App.module.scss'
import Converter from "../Converter/Converter";
import Header from "../Header/Header";
import {Route} from "react-router-dom";

function App() {

    return (
        <div className={style.app}>
            <Header/>

            <Route
                exact
                path='/converter'
                component={Converter}
            />

        </div>
    );
}

export default App;
