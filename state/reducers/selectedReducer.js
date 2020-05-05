import { SELECT_HOUSE, DESELECT_HOUSE } from "../actions/SelectProperty";

const initialState={
    fetching:false,
    selectedProperty:[]
}

export default function selectedReducer(state=initialState,action)
{
    switch(action.type)
    {
        case SELECT_HOUSE:
            return {
                ...state,
                fetching:true,
                selectedProperty:action.house
            }
        case DESELECT_HOUSE:
            return{
                ...state,
                selectedProperty:{}
            }
        default:
            return state;
    }
}