import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {widthPercentageToDP} from 'react-native-responsive-screen';


class CategoryCardSmall extends React.Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <Image
                    source={{uri:'https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale'}}
                    style={styles.image}
                />
                <View style={styles.overlay}>
                    <View>
                        <Text style={[styles.heading,styles.violetColor]}>
                            Smart House
                        </Text>
                        <Text>103 houses and apartment</Text>
                    </View>
                    <View style={styles.arrowButton}>
                        <TouchableOpacity>
                            <View>
                                <FontAwesomeIcon icon={faArrowRight}  style={{color:"white"}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        position:"relative"
    },
    image:{
        width:"100%",
        height:100
    },
    overlay:{
        bottom:24,
        left:20,
        backgroundColor:"white",
        borderRadius:16,
        width:widthPercentageToDP('85%'),
        padding:16,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    heading:{
        fontSize:20,
        fontWeight:"bold"
    },
    arrowButton:{
        borderRadius:40,
        backgroundColor:"#ffcc8b",
        padding:20
    },
    violetColor:{
        color:"#45638c"
    }
})

export default CategoryCardSmall;
