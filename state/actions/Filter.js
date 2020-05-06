//action types
export const SET_TAG='SET_TAG';
export const SET_CITY='SET_CITY';
export const SET_MAX_PRICE='SET_MAX_PRICE';
export const SET_MIN_PRICE='SET_MIN_PRICE';


//action creator
export function setTag(tag)
{
    return{
        type:SET_TAG,
        tag:tag
    }
}
export function setCity(city)
{
    return{
        type:SET_CITY,
        city:city
    }
}
export function setMinPrice(price)
{
    return{
        type:SET_MIN_PRICE,
        minPrice:price
    }
}
export function setMaxPrice(price)
{
    return{
        type:SET_MAX_PRICE,
        maxPrice:price
    }
}