import { API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/Property";

const initialState={
    fetching:false,
    property:[],
    error:[]
}

export default function reducer(state=initialState,action)
{
    switch(action.type)
    {
        case API_CALL_REQUEST:
            return {...state,fetching:true,error:null}
        case API_CALL_SUCCESS:
            return {...state,fetching:false,property:action.property}
        case API_CALL_SUCCESS:
            return {...state,fetching:false,property:[],error:action.error}
        default:
            return state;
    }
}