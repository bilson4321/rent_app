//action types
export const FavouriteAction={
    ADD_TO_FAVOURITE:'ADD_TO_FAVOURITE',
    REMOVE_FROM_FAVOURITE:'REMOVE_FROM_FAVOURITE'
}


//creators
export const FavouriteActionCreators={
    addToFavourite:function(property)
            {
                return {
                    type:ADD_TO_FAVOURITE,
                    property:property
                }
            },
    removeFromFavourite:function(property)
            {
                return {
                    type:REMOVE_FROM_FAVOURITE,
                    property
                }
            }
}
