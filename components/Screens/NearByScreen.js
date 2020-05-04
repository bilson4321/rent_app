import React from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, Button } from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

import CardWithPrice from './../Common/CardWithPrice';

class NearByScreen extends React.Component{
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
    render()
    {
        return(
            <View>
                <View style={ styles.searchBar}>
                    <FontAwesomeIcon icon={faSearch}/>
                        <TextInput></TextInput>
                    <FontAwesomeIcon icon={faBars}/>
                    <Button title="modal" onPress={()=>this.props.navigation.navigate('SearchFilterModal')}></Button>
                </View>
                <FlatList 
                    data={this.state.houseList}
                    renderItem={({item})=><CardWithPrice />}
                    keyExtractor={item=>item.id}
                />
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
    }
})

export default NearByScreen;