import React from 'react';
import {ScrollView, TouchableOpacity, View, TextInput, Text, FlatList, StyleSheet, Button } from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

import CardWithPrice from './../Common/CardWithPrice';
import { connect } from 'react-redux';
import {selectHouse} from './../../state/actions/SelectProperty';
import { setCity } from '../../state/actions/Filter';

class NearByScreen extends React.Component{
    render()
    {
        return(
            <View style={styles.wrapper}>
                <View style={ styles.searchBar}>
                    <View style={styles.icon}>
                        <FontAwesomeIcon icon={faSearch} style={styles.icon}/>
                    </View>
                    <TextInput style={{flex:1}} placeholder="Type address, city, state" onChangeText={text=>this.props.setCity(text)}></TextInput>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchFilterModal')}>
                            <FontAwesomeIcon icon={faBars} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                        {this.props.property.map((i,index)=>{
                            if(i.location.search(this.props.filter.city)>-1)
                            if(this.props.filter.tagSet)
                            {
                                if(i.tags.includes(this.props.filter.tags[0]))
                                {
                                    return (
                                        <View style={[styles.scrollItem,styles.trendingHouses]} key={index}>
                                            <TouchableOpacity onPress={()=>{
                                                this.props.selectHouse(i);
                                                this.props.navigation.navigate('PropertyDetailModal')
                                            }}>
                                                <CardWithPrice item={i}/>
                                            </TouchableOpacity>
                                        </View>)
                                }
                            } 
                            else
                            {
                                return (
                                    <View style={[styles.scrollItem,styles.trendingHouses]} key={index}>
                                        <TouchableOpacity onPress={()=>{
                                            this.props.selectHouse(i);
                                            this.props.navigation.navigate('PropertyDetailModal')
                                        }}>
                                            <CardWithPrice item={i}/>
                                        </TouchableOpacity>
                                    </View>)
                            }
                        })}
                </ScrollView> 
            </View>
        );
    }
}

const styles=StyleSheet.create({
    wrapper:{
        padding:16,
        marginBottom:65
    },
    searchBar:{
        display:"flex",
        flexDirection:"row",
        borderWidth:0.2,
        borderColor:"#969696",
        borderRadius:10,
        padding:5,
        marginBottom:18
    },
    icon:{
        padding:10
    }
})
const mapStateToProps=state=>{
    console.log("filter",state.filter);
    return {
        property:state.property.property,
        filter:state.filter
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        selectHouse:(house)=>{dispatch(selectHouse(house))},
        setCity:(city)=>{dispatch(setCity(city))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NearByScreen);