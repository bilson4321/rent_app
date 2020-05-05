import React from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';

import CardWithPrice from './../Common/CardWithPrice';
import CategoryCard from './../Common/CategoryCard';

import {FavouriteActionCreators} from './../../state/actions/Favourite';

import {connect} from 'react-redux';
import { selectHouse } from '../../state/actions/SelectProperty';

class DiscoveryScreen extends React.Component{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        this.props.onRequestProperty();
    }
    render()
    {
        const {fetching, property,error}=this.props
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
                    <Text style={styles.headerText}>Trending</Text>
                    <ScrollView horizontal={true}>
                        {property.map((i,index)=>{
                            return (
                                <View style={[styles.scrollItem,styles.trendingHouses]} key={index}>
                                    <TouchableOpacity onPress={()=>{
                                        this.props.selectHouse(i);
                                        this.props.navigation.navigate('PropertyDetailModal')
                                    }}>
                                        <CardWithPrice item={i}/>
                                    </TouchableOpacity>
                                </View>)
                        })}
                    </ScrollView> 
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const mapStateToProps=state=>{
    console.log(state)
    return {
        fetching:state.property.fetching,
        property:state.property.property,
        error:state.property.error
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onRequestProperty:()=>dispatch({type:"API_CALL_REQUEST"}),
        selectHouse:(house)=>{console.log("dispatching",house);dispatch(selectHouse(house))}
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