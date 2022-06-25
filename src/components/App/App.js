import './App.module.scss';
import style from './App.module.scss'
import Converter from "../Converter/Converter";

function App() {

    return (
        <div className={style.app}>
            <Converter />
        </div>
    );
}

export default App;
