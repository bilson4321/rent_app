import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View,Text } from 'react-native';

import NearByScreen from './components/Screens/NearByScreen';
import DiscoveryScreen from './components/Screens/DiscoveryScreen';

function ScheduleScreen()
{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Schedule</Text>
    </View>
  )
}
function FavouriteScreen()
{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Favourite</Text>
    </View>
  )
}
function MoreScreen()
{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>More</Text>
    </View>
  )
}

const Tab=createBottomTabNavigator();

class App extends React.Component
{
  render()
  {
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="NearBy" component={NearByScreen}/>
          <Tab.Screen name="Discovery" component={DiscoveryScreen}/>
          <Tab.Screen name="Schedule" component={ScheduleScreen}/>
          <Tab.Screen name="Favourite" component={FavouriteScreen}/>
          <Tab.Screen name="More" component={MoreScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;