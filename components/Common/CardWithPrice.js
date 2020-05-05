import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquare,faStar} from '@fortawesome/free-regular-svg-icons';
import {faBed, faShower, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';


class CardWithPrice extends React.Component
{
    render()
    {
        console.log("Item", this.props.item.priceMax)
        return(
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={{uri:this.props.item.images[0]}}
                        style={styles.image}
                    />
                    <View style={styles.addressOverlay}>
                        <FontAwesomeIcon icon={faMapMarkerAlt}  style={[styles.whiteColor,{marginRight:6}]}/>
                        <Text style={styles.whiteColor}>{this.props.item.location}</Text>
                    </View>
                    <View style={styles.starOverlay}>
                        <FontAwesomeIcon icon={faStar}  style={styles.violetColor}/>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.price}>{this.props.item.Currency} {this.props.item.priceMax}</Text>
                    <View style={styles.featureContainer}>
                        <View style={styles.iconContainer}>
                            <FontAwesomeIcon icon={faBed}  style={styles.greyColor}/><Text style={styles.greyColor}> {this.props.item.bed} Bed </Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <FontAwesomeIcon icon={faShower} style={styles.greyColor} /><Text style={styles.greyColor}> {this.props.item.bathRoom} Bath</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <FontAwesomeIcon icon={faSquare} style={styles.greyColor} /><Text style={styles.greyColor}> {this.props.item.area}</Text>
                        </View>
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
        borderRadius:10,
        overflow:'hidden',
        shadowColor:'black',
        shadowRadius:1,
        shadowOpacity:1,
        shadowOffset:{
            height:-10
        }
    },
    imageWrapper:{
        position:"relative"
    },
    addressOverlay:{
        position:"absolute",
        borderRadius:50,
        padding:10,
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#ffcc8b",
        left:15,
        bottom:15,
        width:190
    },
    starOverlay:{
        position:"absolute",
        right:10,
        top:15
    },
    image:{
        width:"100%",
        height:180
    },
    body:{
        margin:15,
        display:"flex",
        position:"relative"
    },
    price:{
        fontSize:20,
        fontWeight:"bold",
        color:'#40567e',
        marginBottom:10
    },
    featureContainer:{
        display:"flex",
        flexDirection:"row",
        color:"#acb4c3",
        width:"100%"
    },
    iconContainer:{
        display:"flex",
        flexDirection:"row",
        marginRight:40
    },
    greyColor:{
        color:'#abb7c0'
    },
    whiteColor:{
        color:"white"
    },
    violetColor:{
        color:"#45638c"
    }
})

export default CardWithPrice;