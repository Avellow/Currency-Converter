import './App.module.scss';
import style from './App.module.scss'
import Converter from "../Converter/Converter";
import Header from "../Header/Header";

function App() {

    return (
        <div className={style.app}>
            <Header />
            <Converter />
        </div>
    );
}

export default App;
