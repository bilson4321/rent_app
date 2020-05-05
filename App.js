import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View,Text } from 'react-native';

import NearByScreen from './components/Screens/NearByScreen';
import DiscoveryScreen from './components/Screens/DiscoveryScreen';

import SearchFilterModal from './components/Modals/SearchFilterModal';

import {FavouriteAction, FavouriteActionCreators} from './state/actions/Favourite';

import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { watcherSaga } from './state/saga/propertySaga';
import PropertyDetailModal from './components/Modals/PropertyDetailModal';
import appReducer from './state/reducers/appReducer';
import propertyReducer from './state/reducers/propertyReducer';

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
const sagaMiddleware=createSagaMiddleware();

const store=createStore(appReducer,compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watcherSaga);
const Stack=createStackNavigator();
const TabStack=createBottomTabNavigator();
function MainScreens()
{
  return(
    <TabStack.Navigator 
    initialRouteName="Discovery"
    tabBarOptions={{
      activeTintColor:'blue',
      inactiveTintColor:'gray',
    }}>
      <TabStack.Screen name="NearBy" component={NearByScreen}/>
      <TabStack.Screen name="Discovery" component={DiscoveryScreen}/>
      <TabStack.Screen name="Schedule" component={ScheduleScreen}/>
      <TabStack.Screen name="Favourite" component={FavouriteScreen}/>
      <TabStack.Screen name="More" component={MoreScreen}/>
    </TabStack.Navigator>
  );
}

class App extends React.Component
{
  render()
  {

    return(
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreens} options={{headerShown:false}}/>
          <Stack.Screen name="SearchFilterModal" component={SearchFilterModal} options={{headerShown:false}}/>
          <Stack.Screen name="PropertyDetailModal" component={PropertyDetailModal} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}

export default App;