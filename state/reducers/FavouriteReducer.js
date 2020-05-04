import {FavouriteAction} from './../actions/Favourite';

const initialState={
    isLoading:false,
    favouriteFlat:[],
    error:{}
}

export default function(state=initialState,action)
{
    switch(action.type)
    {
        case FavouriteAction.ADD_TO_FAVOURITE:
            return Object.assign({},state,{
                favouriteFlat:[
                    ...state.favouriteFlat,
                    action.property
                ]
            })
        
        default:
            return state;
    }
}