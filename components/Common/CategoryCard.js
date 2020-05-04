import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


class CategoryCard extends React.Component
{
    render()
    {
        return(
            <View>
                <Image
                    source={{uri:'https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale'}}
                    style={styles.image}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    image:{
        width:"100%",
        height:180
    }
})

export default CategoryCard;
