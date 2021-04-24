import * as actionTypes from '../ActionTypes';

const initialState = {
    loading: false,
    citiesInfo: [],
    tempInfo: []
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_CTIIES_INFO:
            return { ...state, loading: true }
        case actionTypes.FETCH_CITIES_INFO:
            return { ...state, citiesInfo: action.payload, loading: false }
        case actionTypes.FAILED_CITIES_INFO:
            return { ...state, loading: false }
        case actionTypes.START_TEMP_INFO:
            return { ...state, loading: true }
        case actionTypes.FETCH_TEMP_INFO:
            return { ...state, tempInfo: action.payload, loading: false }
        case actionTypes.FAILED_TEMP_INFO:
            return { ...state, loading: false }
        default:
            return state
    }

}