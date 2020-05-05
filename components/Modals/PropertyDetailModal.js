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
                    <TouchableOpacity onPress={
                        ()=>{
                            this.props.navigation.goBack();
                        }
                    }>
                        <FontAwesomeIcon icon={faArrowLeft}  style={styles.violetColor}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        
                    }>
                        <FontAwesomeIcon icon={faStar}  style={styles.violetColor}/>
                    </TouchableOpacity>
                    <Image
                        source={{uri:this.props.selectedProperty.images[0]}}
                        style={styles.image}
                    />
                    <View>
                        <View style={styles.topBar}>
                            <View style={styles.priceContainer}>
                                <Text style={[styles.headingOne,styles.violetColor]}>{this.props.selectedProperty.Currency} {this.props.selectedProperty.priceMax}</Text>
                                <Text style={[styles.headingTwo,styles.violetColor]}>{this.props.selectedProperty.location}</Text>
                            </View>
                            <View>
                                <FontAwesomeIcon icon={faBus}  style={{color:"violet"}}/>
                                <Text>{this.props.selectedProperty.transport}</Text>
                            </View>
                            <View>
                                <FontAwesomeIcon icon={faShieldAlt}  style={{color:"violet"}}/>
                                <Text>{this.props.selectedProperty.safety}</Text>
                            </View>
                            <View>
                                <FontAwesomeIcon icon={faTree}  style={{color:"violet"}}/>
                                <Text>{this.props.selectedProperty.ecology}</Text>
                            </View>
                        </View>
                        <View style={styles.topBar}>
                            <View>
                                <FontAwesomeIcon icon={faMap}  style={{color:"violet"}}/>
                                <Text>Map View</Text>
                            </View>
                            <View>
                                <FontAwesomeIcon icon={faBus}  style={{color:"violet"}}/>
                                <Text>Transport</Text>
                            </View>
                            <View>
                                <FontAwesomeIcon icon={faShieldAlt}  style={{color:"violet"}}/>
                                <Text>Safety</Text>
                            </View>
                            <View>
                                <FontAwesomeIcon icon={faTree}  style={{color:"violet"}}/>
                                <Text>Ecology</Text>
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
                            <Text>{this.props.selectedProperty.info}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Button title="CONTACT" style={styles.button}></Button>
                    <Button title="Book" style={styles.button}></Button>
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
    image:{
        width:"100%",
        height:300
    },
    topBar:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        margin:18
    },
    priceContainer:{
        marginRight:80
    },
    headingOne:{
        fontSize:20,
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
        width:120
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