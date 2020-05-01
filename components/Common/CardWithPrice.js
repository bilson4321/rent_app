import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquare} from '@fortawesome/free-regular-svg-icons';
import {faBed, faShower} from '@fortawesome/free-solid-svg-icons';


class CardWithPrice extends React.Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <Image
                    source={{uri:'https://thearchitecturedesigns.com/wp-content/uploads/2020/01/Modern-house-design-8-759x500.jpg'}}
                    style={styles.image}
                />
                <View style={styles.body}>
                    <Text style={styles.price}>$ 1.321,000</Text>
                    <View style={styles.iconContainer}>
                        <View>
                            <FontAwesomeIcon icon={faBed}  style={styles.iconLabel}/><Text style={styles.iconLabel}> 2 Bed </Text>
                        </View>
                        
                        <FontAwesomeIcon icon={faShower} style={styles.iconLabel} /><Text style={styles.iconLabel}> 1 Bath</Text>
                        <FontAwesomeIcon icon={faSquare} style={styles.iconLabel} /><Text style={styles.iconLabel}> 1890 sqft</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        borderBottomWidth:3,
        borderBottomColor:'#ededed',
        margin:20,
        borderRadius:10,
        overflow:'hidden',
        shadowColor:'black',
        shadowRadius:1,
        shadowOpacity:1,
        shadowOffset:{
            height:-10
        }
    },
    image:{
        width:"100%",
        height:180
    },
    body:{
        margin:15
    },
    price:{
        fontSize:20,
        fontWeight:"bold",
        color:'#40567e',
        marginBottom:10
    },
    iconContainer:{
        display:"flex",
        flexDirection:"row",
        color:"#acb4c3"
    },
    iconLabel:{
        color:'#abb7c0'
    }
})

export default CardWithPrice;