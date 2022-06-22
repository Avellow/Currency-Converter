import './App.module.scss';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addRatesFromApi} from "../../store/ratesReducer";
import ConverterContainer from "../Converter/ConverterContainer";
import s from './App.module.scss'
import ValueInput from "../ValueInput/ValueInput";
import CurrencyList from "../CurrencyList/CurrencyList";
import CurrencyConfig from "../CurrencyConfig/CurrencyConfig";

function App() {

    const dispatch = useDispatch()

    useEffect(() => dispatch(addRatesFromApi()), [])

    return (
        <div className={s.app}>
            <CurrencyConfig />
        </div>
    );
}

export default App;
