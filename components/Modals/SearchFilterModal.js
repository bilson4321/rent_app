import React from 'react';
import {View,Text, Button, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

class SearchFilterModal extends React.Component
{
    render()
    {
        return(
            <SafeAreaView style={styles.wrapper}>
                <ScrollView>
                    <View></View>
                    <Text style={styles.heading}>Property type</Text>
                    <View>
                        <Button title="Houses"></Button>
                        <Button title="Villas"></Button>
                        <Button title="Bangs"></Button>
                        <Button title="Duplexes"></Button>
                        <Button title="Rooms"></Button>
                        <Button title="Apartments"></Button>
                    </View>
                    <Text style={styles.heading}>Distance</Text>
                    <Text style={styles.heading}>Living Space</Text>
                    <Text style={styles.heading}>Rent Duration</Text>
                    <Text style={styles.heading}>Price</Text>
                    <Text style={styles.heading}>Additional Preferences</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    heading:{
        fontSize:26,
        fontWeight:"bold",
        color:'#3a5b8e'
    }
})
export default SearchFilterModal;