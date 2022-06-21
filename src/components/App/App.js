import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addRatesFromApi} from "../../store/ratesReducer";
import ConverterContainer from "../Converter/ConverterContainer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => dispatch(addRatesFromApi()), [])

    return (
        <div className="App">
            <ConverterContainer />
        </div>
    );
}

export default App;
