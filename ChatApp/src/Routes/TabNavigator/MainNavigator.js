import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../screens/Dashboard/Dashboard.screen';
import Home from '../../screens/Home/Home.screen';
import ProviderTab from './Tab';
import Colors from '../../utills/Colors';
import DocumentListing from '../../screens/Documents/DocumentListing/DocumentListing.screen';
const Stack = createStackNavigator();
export default function Routes({}) {
  return (
    <Stack.Navigator initialRouteName={'Dashboard'} headerMode="none" >
      <Stack.Screen name="Dashboard" component={ProviderTab} options={{
        title: 'Dashboard',
        titleStyle:{
color:'red',
        },
        drawerIcon: ({ focused, size }) => (
          <Ionicons
            name="md-home"
            size={size}
            color={focused ? '#7cc' : '#ccc'}
          />
        ),
      }}  />
      <Stack.Screen name="Home" component={ProviderTab} />
    </Stack.Navigator>
  );
}
