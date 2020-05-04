import React from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet, Button } from 'react-native';

import CardWithPrice from './../Common/CardWithPrice';
import CategoryCard from './../Common/CategoryCard';

import {FavouriteActionCreators} from './../../state/actions/Favourite';

import {connect} from 'react-redux';

class DiscoveryScreen extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            houseList:[
                {
                    "id":"1",
                    "image":"test",
                    "price":"1.23"
                },
                {
                    "id":"2",
                    "image":"test",
                    "price":"1.23"
                },
                {
                    "id":"3",
                    "image":"test",
                    "price":"1.23"
                },
                {
                    "id":"4",
                    "image":"test",
                    "price":"1.23"
                }
            ]
        }
    }
    componentDidMount()
    {

    }
    render()
    {
        const {fetching, property, onRequestProperty,error}=this.props
        return(
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        Best Picks
                    </Text>
                </View>
                <ScrollView>
                    {/* <ScrollView horizontal={true}>
                        {this.state.houseList.map((y)=>{
                            return (<View style={[styles.scrollItem,styles.trendingHouses]}><CategoryCard/></View>)
                        })}
                    </ScrollView>  */}
                    <Button title="fetch data" onPress={()=>{onRequestProperty()}}></Button>
                    <Text style={styles.headerText}>Trending</Text>
                    <ScrollView horizontal={true}>
                        {property.map((i)=>{
                            return (<View style={[styles.scrollItem,styles.trendingHouses]}><CardWithPrice item={i}/></View>)
                        })}
                    </ScrollView> 
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const mapStateToProps=state=>{
    return {
        fetching:state.fetching,
        property:state.property,
        error:state.error
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onRequestProperty:()=>dispatch({type:"API_CALL_REQUEST"})
    }
}
const styles=StyleSheet.create({
    scrollItem:{
        marginRight:18
    },
    trendingHouses:{
        width:268
    },
    headerContainer:{
        paddingTop:10,
        paddingBottom:10,
        borderWidth:2,
        borderColor:'red'
    },
    headerText:{
        color: '#33507F',
        fontSize:30,
        fontWeight: "bold",
        paddingLeft:20
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(DiscoveryScreen);