import {takeLatest,call,put} from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga(){
    yield takeLatest("API_CALL_REQUEST",workerSaga);
}

function fetchProperty()
{
    return axios({
        method:"GET",
        url:"https://rent-app-api.herokuapp.com/trendingFlats"
    })
}

function* workerSaga()
{
    try
    {
        const response=yield call(fetchProperty);
        const property=response.data;

        yield put({type:"API_CALL_SUCCESS",property})
    }
    catch(error)
    {
        yield put({type:"API_CALL_FAILURE",error})
    }
}