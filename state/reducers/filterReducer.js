import { SET_TAG, SET_CITY, SET_MAX_PRICE, SET_MIN_PRICE } from "../actions/Filter";

const initialState={
    citySet:false,
    city:"",
    tagSet:false,
    tags:[],
    priceSet:false,
    minPrice:0,
    maxPrice:0
}

export default function filterReducer(state=initialState,action)
{
    switch(action.type)
    {
        case SET_TAG:{
            return Object.assign({},state,{
                ...state.filter,
                tagSet:true,
                tags:[
                    action.tag
                ]
            })
        }
        case SET_CITY:{
            return Object.assign({},state,{
                    ...state.filter,
                    citySet:true,
                    city:action.city
            })
        }
        case SET_MAX_PRICE:{
            return Object.assign({},state,{
                filter:{
                    ...state.filter,
                    priceSet:true,
                    maxPrice:action.maxPrice
                }
            })
        }
        case SET_MIN_PRICE:{
            return Object.assign({},state,{
                filter:{
                    ...state.filter,
                    priceSet:true,
                    minPrice:action.minPrice
                }
            })
        }
        default:
            return state;
    }
}