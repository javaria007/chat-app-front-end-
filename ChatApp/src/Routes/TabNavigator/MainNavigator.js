
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Image,View,Text,TouchableOpacity } from 'react-native';
import Icon from "../../components/Icon/Icon.component";
import Colors from '../../utills/Colors'
import MessageListing from '../../screens/MessageListing/MessageListing.screen';
import Settings from '../../screens/Settings/Settings.screens';
import Explore from '../../screens/Explore/Explore.screen';
import styles from '../styles';
import style from './Tab.styles';
import ExplorePeople from '../../screens/ExplorePeople/ExplorePeople.screen';
import MyProfile from '../../screens/MyProfile/MyProfile.screen';
import {heightPercentageToDP as height,widthPercentageToDP as width} from 'react-native-responsive-screen';

const tab = createBottomTabNavigator();

export default ({props}) => {
const navigation=useNavigation();
  return (
    <tab.Navigator initialRouteName="Explore" screenOptions={{
      headerShown: true,
      title: '',

      headerBackImage: (tintColor) =>
        (<Icon category="Ionicons" name="ios-arrow-back" size={24} style={{ padding: '2%', marginLeft: '2%' }} color={Colors.white} />),
      headerStyle: {
        height: height(12),
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        backgroundColor: Colors.white,
        elevation: 0,

        //borderBottomWidth: 1,
        borderBottomLeftRadius: height(2),
        borderBottomRightRadius: height(2),

      },
      separator: {
        height: '15%'
      },
      headerBackTitleStyle: {
        fontWeight: '600',
        fontSize: 20,
        marginLeft: height(2),

      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '600',
        fontSize: 20,
        left: 0,

      },
      headerLeft: () => (
        <View>

          <Text style={styles.header}>{'Welcome,'}</Text>
          <Text style={styles.userName}>{'Username'}</Text>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={()=>navigation.navigate('MyProfile')}>
          <Image source={require('../../Assets/profilePicture.jpeg')} style={styles.headerRight} />
        </TouchableOpacity>
      ),
    }}>
      <tab.Screen
        name={"MessageListing"}
        component={MessageListing}
        options={{
          headerShown: true,
          tabBarIcon: (props) => <Icon name='chatbubbles' category='Ionicons' size={ 24} color={ props.color } />
        }}
      />
      <tab.Screen
        name={"Explore"}
        component={Explore}
        options={{
          headerShown: true,
          tabBarIcon: (tintColor, focused) => {return(
            <TouchableOpacity style={[style.floatingButton ,focused && {backgroundColor:Colors.bluePrimary}]} onPress={()=>navigation.navigate('ExplorePeople')}>
          <Icon name='search' category='Ionicons' size={ 24} color={"#fff"} />
            </TouchableOpacity>
  )} }}
      />
      <tab.Screen
        name={"Settings"}
        component={Settings}
        options={{
          headerShown: true,
          tabBarIcon: (props) => <Icon name='settings' category='Ionicons' size={24} color={props.color} />,
          // headerShown: true,
          
            headerLeft: () => (
              <TouchableOpacity>
                <Text style={styles.header}>{'Settings'}</Text>
              </TouchableOpacity>
            ),
          headerRight:()=>(
            <>
            </>
          )
         
        }}
      />
    </tab.Navigator>
  );
};