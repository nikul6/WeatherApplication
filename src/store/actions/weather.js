import {
    START_CTIIES_INFO,
    FETCH_CITIES_INFO,
    FAILED_CITIES_INFO,
    START_TEMP_INFO,
    FETCH_TEMP_INFO,
    FAILED_TEMP_INFO
} from '../ActionTypes';
import API from '../../common/API';

export const fetchCities = (latitude, longitude, dispatch, navigation) => {
    dispatch({
        type: START_CTIIES_INFO
    });
    API.fetchCitiesAPI(latitude, longitude)
        .then((res) => res.json())
        .then(jsonRes => {
            if (jsonRes.message) {
                dispatch({
                    type: FETCH_CITIES_INFO,
                    payload: jsonRes.list
                })
            } else {
                dispatch({
                    type: FAILED_CITIES_INFO,
                    payload: jsonRes.error
                })
            }
        })
}

export const fetchTemp = (latitude, longitude, dispatch, navigation) => {
    dispatch({
        type: START_TEMP_INFO
    });
    API.fetchTempNotificationAPI(latitude, longitude)
        .then((res) => res.json())
        .then(jsonRes => {
            if (jsonRes) {
                dispatch({
                    type: FETCH_TEMP_INFO,
                    payload: jsonRes
                })
            } else {
                dispatch({
                    type: FAILED_TEMP_INFO,
                    payload: jsonRes.error
                })
            }
        })
}