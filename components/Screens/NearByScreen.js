import React from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';

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
                <TextInput></TextInput>
                <FlatList 
                    data={this.state.houseList}
                    renderItem={({item})=><CardWithPrice />}
                    keyExtractor={item=>item.id}
                />
            </View>
        );
    }
}


export default NearByScreen;