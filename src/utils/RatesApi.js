import axios from "axios";

class RatesApi {
    constructor(url, apiKey) {
        this._url = url;
        this._apiKey = apiKey
    }

    getRatePairs() {
        return axios
            .get('https://cdn.cur.su/api/cbr.json')
            .then(response => response.data)
    }
}

export default RatesApi;
