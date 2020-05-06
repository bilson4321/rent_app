import React from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet, Button, TouchableOpacity, ActivityIndicator } from 'react-native';

import CardWithPrice from './../Common/CardWithPrice';
import CategoryCard from './../Common/CategoryCard';

import {FavouriteActionCreators} from './../../state/actions/Favourite';

import {connect} from 'react-redux';
import { selectHouse } from '../../state/actions/SelectProperty';
import CategoryCardSmall from '../Common/CategoryCardSmall';

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
                    <Text style={[styles.headerText,{paddingLeft:20}]}>
                        Best Picks
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
                    {/* <ScrollView horizontal={true}>
                        {this.state.houseList.map((y)=>{
                            return (<View style={[styles.scrollItem,styles.trendingHouses]}><CategoryCard/></View>)
                        })}
                    </ScrollView>  */}
                    <View style={styles.bestPicks}>
                        <CategoryCard></CategoryCard>
                    </View>
                    
                    <Text style={[styles.headerText,{marginBottom:18}]}>Trending</Text>
                    {
                        fetching?<ActivityIndicator/>:
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
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
                    }
                    <Text style={[styles.headerText,{marginBottom:18}]}>Categories</Text>
                    <CategoryCardSmall/>
                    <CategoryCardSmall/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const mapStateToProps=state=>{
    return {
        fetching:state.property.fetching,
        property:state.property.property,
        error:state.property.error
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onRequestProperty:()=>dispatch({type:"API_CALL_REQUEST"}),
        selectHouse:(house)=>{dispatch(selectHouse(house))}
    }

}
const styles=StyleSheet.create({
    scrollItem:{
        marginRight:18
    },
    wrapper:{
        padding:18,
        marginBottom:65
    },
    trendingHouses:{
        width:268
    },
    headerContainer:{
        paddingTop:10,
        paddingBottom:10,
    },
    headerText:{
        color: '#33507F',
        fontSize:30,
        fontWeight: "bold"
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(DiscoveryScreen);