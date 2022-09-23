import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,navigation} from '@react-navigation/stack';
import {TouchableOpacity,Text,View,Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../screens/Login/Login.screen';
import Onboarding from '../screens/Onboarding/Onboarding.screen';
import Colors from '../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import Home from '../screens/Home/Home.screen';
import Icon from '../components/Icon/Icon.component';
import styles from './styles';
import Otp from '../screens/Otp/Otp.screen';
import Phone from '../screens/Phone/Phone.screen';
import TabBarScreen from './TabNavigator/MainNavigator';
import MessageListing from '../screens/MessageListing/MessageListing.screen';
import ExplorePeople from '../screens/ExplorePeople/ExplorePeople.screen';
import MyProfile from '../screens/MyProfile/MyProfile.screen';
import EditProfile from '../screens/EditProfile/EditProfile.screen';
import Chat from '../screens/Chat/Chat.screen';
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy.screen';
import AboutUs from '../screens/AboutUs/AboutUs.screen';
import Conditions from '../screens/Conditions/Conditions.screen';

const Stack = createStackNavigator();
export default function Routes({navigation,props}) {
  const isLogin = useSelector(state => state.Auth.isLogin);
  return (
    <NavigationContainer>
      {!isLogin ? (
        <Stack.Navigator initialRouteName="Onboarding" 
          screenOptions={{
            headerShown: true,
            title: '',
            headerBackTitle: ' ',
            headerBackImage: (tintColor) =>
              (<Icon category="Ionicons" name="ios-arrow-back" size={24} style={{ padding: '2%', marginLeft: '3%' }} color={Colors.bluePrimary} />),
            headerStyle: {
              height: height(12),
              backgroundColor: Colors.white,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              shadowColor:'#000',

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

            },
          }}>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false,}} />
          <Stack.Screen name="Otp" component={Otp} options={{ headerShown:true }} />
          <Stack.Screen name="Phone" component={Phone} options={{ headerShown: true }} />
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: true,
            title: '',
            headerBackTitle:'',
           // headerBackImage: (tintColor) =>
           //   (<Icon category="Ionicons" name="ios-arrow-back" size={24} style={{ padding: '2%', marginLeft: '3%' }} color={Colors.bluePrimary} />),
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
              
             // borderBottomWidth:1,
              borderBottomLeftRadius: height(2),
              borderBottomRightRadius: height(2),

            },
            headerBackTitleStyle: {
              fontFamily: 'Segoe UI',
              fontWeight: '400',
              fontSize: 20,

              marginLeft: height(2),
            },
            headerTintColor:Colors.primary,
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 20,

            },
           
            
          }} />
         
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Explore" screenOptions={{
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
          separator:{
            height: '15%'
          },
          headerBackTitleStyle:{
            fontWeight: '600',
            fontSize: 20,
            marginLeft:height(2),
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 20,
            left:0,
           
          },
        }}>
            <Stack.Screen name="TabBarScreen" component={TabBarScreen} options={{
              headerShown:false,
              headerLeft: () => (
                <View>
                 
                  <Text style={styles.header}>{'Welcome,'}</Text>
                  <Text style={styles.userName}>{'Username'}</Text>
                </View>
              ),
              headerRight: () => (
                <TouchableOpacity>
                  <Image source={require('../Assets/profilePicture.jpeg')} style={styles.headerRight} />
                </TouchableOpacity>
              ),
              
            }} />
            <Stack.Screen name="ExplorePeople" component={ExplorePeople} options={{
              headerShown:true,
            }} />
            <Stack.Screen name="MyProfile" component={MyProfile} options={{
              headerShown: false,
            }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{
              headerShown: true,
            }} />
            <Stack.Screen name="Chat" component={Chat} options={{
              headerShown: true,
            }} />
            <Stack.Screen name="AboutUs" component={AboutUs} options={{
              headerShown: true,
            }} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{
              headerShown: true,
            }} />
            <Stack.Screen name="Conditions" component={Conditions} options={{
              headerShown: true,
            }} />
          

           
            
           
          
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
