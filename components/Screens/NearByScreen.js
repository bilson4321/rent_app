import React from 'react';
import {ScrollView, TouchableOpacity, View, TextInput, Text, FlatList, StyleSheet, Button } from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

import CardWithPrice from './../Common/CardWithPrice';
import { connect } from 'react-redux';
import {selectHouse} from './../../state/actions/SelectProperty';

class NearByScreen extends React.Component{
    render()
    {
        return(
            <View>
                <View style={ styles.searchBar}>
                    <View style={styles.icon}>
                        <FontAwesomeIcon icon={faSearch} style={styles.icon}/>
                    </View>
                    <TextInput style={{flex:1}} placeholder="Type address,city"></TextInput>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchFilterModal')}>
                            <FontAwesomeIcon icon={faBars} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                        {this.props.property.map((i,index)=>{
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
            </View>
        );
    }
}

const styles=StyleSheet.create({
    searchBar:{
        display:"flex",
        flexDirection:"row",
        borderBottomWidth:3,
        borderBottomColor:'#ededed',
        borderRadius:10,
        padding:5,
        shadowColor:'black',
        shadowRadius:1,
        shadowOpacity:1,
        shadowOffset:{
            height:-10
        }
    },
    icon:{
        padding:10
    }
})
const mapStateToProps=state=>{
    console.log("property",state.property.property);
    return {
        property:state.property.property
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        selectHouse:(house)=>{console.log("dispatching",house);dispatch(selectHouse(house))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NearByScreen);