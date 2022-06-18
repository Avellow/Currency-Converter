import './App.css';
import Converter from "../Converter/Converter";
import {useEffect} from "react";
import {ratesApi} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {addRates} from "../../store/ratesReducer";
import ConverterContainer from "../Converter/ConverterContainer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        ratesApi
            .getRatePairs()
            .then((data) => dispatch(addRates(data.rates)))
    }, [])

    return (
        <div className="App">
            <ConverterContainer />
        </div>
    );
}

export default App;
