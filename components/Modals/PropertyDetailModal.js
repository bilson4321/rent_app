import React from 'react';
import {View,Text, Button, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMap,faStar, faSquare} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeft, faBed, faShower,faBus, faShieldAlt, faTree} from '@fortawesome/free-solid-svg-icons';

class PropertyDetailModal extends React.Component
{
    render()
    {
        return(
            <SafeAreaView style={styles.wrapper}>
                <ScrollView style={styles.container}>
                    <View style={styles.imageContainer}>
                        <View style={styles.backButton}>
                            <TouchableOpacity onPress={
                                ()=>{
                                    this.props.navigation.goBack();
                                }
                            }>
                                <FontAwesomeIcon icon={faArrowLeft}  style={styles.violetColor}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.starButton}>
                            <TouchableOpacity>
                                <FontAwesomeIcon icon={faStar}  style={styles.violetColor}/>
                            </TouchableOpacity>
                        </View>
                       
                        <Image
                            source={{uri:this.props.selectedProperty.images[0]}}
                            style={styles.image}
                        />
                        
                    </View>
                    <View>
                        <View style={styles.topBar}>
                            <View style={styles.priceContainer}>
                                <Text style={[styles.headingOne,styles.violetColor]}>{this.props.selectedProperty.Currency} {this.props.selectedProperty.priceMax}</Text>
                                <Text style={[styles.headingTwo,styles.violetColor]}>{this.props.selectedProperty.location}</Text>
                            </View>
                            <View style={{display:"flex",flexDirection:"row"}}>
                                <View style={{margin:12}}>
                                    <FontAwesomeIcon icon={faBus}  style={{color:"#c67be8"}}/>
                                    <Text>{this.props.selectedProperty.transport}</Text>
                                </View>
                                <View style={{margin:12}}>
                                    <FontAwesomeIcon icon={faShieldAlt}  style={{color:"#d67263"}}/>
                                    <Text>{this.props.selectedProperty.safety}</Text>
                                </View>
                                <View style={{margin:12}}>
                                    <FontAwesomeIcon icon={faTree}  style={{color:"#489aab"}}/>
                                    <Text>{this.props.selectedProperty.ecology}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.topBar}>
                            <View style={styles.featureBox}>
                                <FontAwesomeIcon icon={faMap}  style={{color:"#4668bd"}}/>
                                <Text style={{marginVertical:10}}>Map View</Text>
                            </View>
                            <View style={styles.featureBox}>
                                <FontAwesomeIcon icon={faBus}  style={{color:"#c67be8"}}/>
                                <Text style={{marginVertical:10}}>Transport</Text>
                            </View>
                            <View style={styles.featureBox}>
                                <FontAwesomeIcon icon={faShieldAlt}  style={{color:"#d67263"}}/>
                                <Text style={{marginVertical:10}}>Safety</Text>
                            </View>
                            <View style={styles.featureBox}>
                                <FontAwesomeIcon icon={faTree}  style={{color:"#489aab"}}/>
                                <Text style={{marginVertical:10}}>Ecology</Text>
                            </View>
                        </View>
                        <View style={styles.topBar}>
                            <View style={styles.iconContainer}>
                                <FontAwesomeIcon icon={faBed}  style={styles.greyColor}/><Text style={styles.greyColor}> {this.props.selectedProperty.bed} Bed </Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesomeIcon icon={faShower} style={styles.greyColor} /><Text style={styles.greyColor}> {this.props.selectedProperty.bathRoom} Bath</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <FontAwesomeIcon icon={faSquare} style={styles.greyColor} /><Text style={styles.greyColor}> {this.props.selectedProperty.area}</Text>
                            </View>
                        </View>
                        <View style={{margin:18}}>
                            <Text style={[styles.greyColor,{fontSize:17}]}>{this.props.selectedProperty.info}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", padding:16}}>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={[styles.buttonText,{color:"#273c57"}]}>CONTACT</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.button,{backgroundColor:"#87b7c9"}]}>
                            <Text style={[styles.buttonText,{color:"white"}]}>BOOK</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
    },
    container:{
        width:"100%"
    },
    imageContainer:{
        position:"relative",
    },
    backButton:{
        position:"absolute",
        top:12,
        left:12,
        zIndex:10,
        fontSize:20
    },
    starButton:{
        position:"absolute",
        top:12,
        right:12,
        zIndex:10,
        fontSize:20
    },
    featureBox:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:"100%",
        height:300
    },
    topBar:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        margin:20
    },
    priceContainer:{
        marginRight:140
    },
    headingOne:{
        fontSize:24,
        fontWeight:"bold",
    },
    headingTwo:{
        fontSize:12,
        fontWeight:"bold",
    },
    iconContainer:{
        display:"flex",
        flexDirection:"row",
        marginRight:40
    },
    greyColor:{
        color:'#abb7c0'
    },
    featureIconContainer:{
        display:"flex",
        flexDirection:"column"
    },
    violetColor:{
        color:"#45638c"
    } ,
    button:{
        width:180,
        borderRadius:50,
        padding:20,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        fontWeight:"bold",
        fontSize:20
    }
})
const mapStateToProps=state=>{
    console.log("property details",state)
    return {
        selectedProperty:state.selectedProperty.selectedProperty
    }
}
const mapDispatchToProps=dispatch=>{
    return{

    }
}
export default connect(mapStateToProps,null)(PropertyDetailModal);