import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';

class DiscoveryScreen extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text>Best picks</Text>
                    </View>
                    <ScrollView>
                        <View></View>
                        <View></View>
                    </ScrollView>   
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default DiscoveryScreen;