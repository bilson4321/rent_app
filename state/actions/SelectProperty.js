//action types
export const SELECT_HOUSE='SELECT_HOUSE';
export const DESELECT_HOUSE='DESELECT_HOUSE';


//action creator
export function selectHouse(house)
{
    return{
        type:SELECT_HOUSE,
        house:house
    }
}
export function deselectHouse()
{
    return{
        type:DESELECT_HOUSE
    }
}