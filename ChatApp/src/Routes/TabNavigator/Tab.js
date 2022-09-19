import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home/Home.screen';
import Dashboard from '../../screens/Dashboard/Dashboard.screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native'
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Colors from '../../utills/Colors';
import Icon from '../../components/Icon/Icon.component';
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import DocumentListing from '../../screens/Documents/DocumentListing/DocumentListing.screen';
import styles from './Tab.styles';
import MyAccount from '../../screens/Profile/MyAccount/MyAccount.screen';
import Notification from '../../screens/Notification/Notification.screen';
import CheckList from '../../screens/CheckList/CheckList.screen';
import MyProfile from '../../screens/MyProfile/MyProfile.screen';
import { CustomDrawerContent } from '../CustomDrawer';
import Folders from '../../screens/Folders/Folders.screen';
import MyContacts from '../../screens/MyContacts/MyContacts.screen';
import SharedByMe from '../../screens/SharedByMe/SharedByMe.screen';
import SharedWithMe from '../../screens/SharedWithMe/SharedWithMe.screen';
function MyTabBar({state, descriptors, navigation,props}) {
  /*const theme = useSelector(state => state.Auth.theme);
  const [themeColor, setThemeColor] = useState(
    theme == 'dark' ? '#000' : Colors.white,
  );
  const [themeColor1, setThemeColor1] = useState(
    theme == 'dark' ? Colors.white : Colors.blue,
  );
*/
  /*useEffect(() => {
    console.log(state.index);
    const i = state.index;
    if (i == 2) {
      setThemeColor(theme == 'dark' ? 'rgba(67, 67, 80,0.8)' : Colors.white);
      setThemeColor1(theme == 'dark' ? Colors.white : Colors.blue);
    } else {
      setThemeColor(Colors.white);
      setThemeColor1(Colors.blue);
    }
  }, [state.index, theme]);
  const [vis, setVis] = useState(true);
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  // console.log(height(100))
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setVis(false);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setVis(true);
    });
    return () => {
      Keyboard.removeAllListeners();
    };
  }, []);
  if (vis)
    return (
      <>
        <Image
          source={require('../../Assets/giga.png')}
          style={[styles.tabBar1, theme == 'dark' && {tintColor: themeColor}]}
        />
        <View style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <View
                testID={options.tabBarTestID}
                style={[
                  styles.singleItemContainer,
                  {width: index == 2 ? width(28) : width(18)},
                ]}>
                <>
                  {index == 0 && (
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityStates={isFocused ? ['selected'] : []}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      onPress={onPress}
                      onLongPress={onLongPress}>
                      <AntDesign
                        name={isFocused ? 'appstore1' : 'appstore-o'}
                        size={isFocused ? 32 : 28}
                        color={themeColor1}
                      />
                    </TouchableOpacity>
                  )}
                  {index == 1 && (
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityStates={isFocused ? ['selected'] : []}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      onPress={onPress}
                      onLongPress={onLongPress}>
                      <FontAwesome
                        name={isFocused ? 'user' : 'user-o'}
                        size={isFocused ? 32 : 28}
                        color={themeColor1}
                      />
                    </TouchableOpacity>
                  )}
                  {index == 2 && (
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityStates={isFocused ? ['selected'] : []}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      onPress={onPress}
                      onLongPress={onLongPress}
                      style={[styles.logoContainer1]}>
                      <Image
                        style={[styles.logoContainer]}
                        source={require('../../Assets/logo.png')}
                      />
                    </TouchableOpacity>
                  )}
                  {index == 3 && (
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityStates={isFocused ? ['selected'] : []}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      onPress={onPress}
                      onLongPress={onLongPress}>
                      <MaterialCommunityIcons
                        name={isFocused ? 'chat' : 'chat-outline'}
                        size={isFocused ? 32 : 28}
                        color={themeColor1}
                      />
                    </TouchableOpacity>
                  )}
                  {index == 4 && (
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityStates={isFocused ? ['selected'] : []}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      onPress={onPress}
                      onLongPress={onLongPress}>
                      <MaterialCommunityIcons
                        name={isFocused ? 'wallet' : 'wallet-outline'}
                        size={isFocused ? 32 : 28}
                        color={themeColor1}
                      />
                    </TouchableOpacity>
                  )}
                </>
              </View>
            );
          })}
        </View>
        <SafeAreaView style={{backgroundColor: themeColor}} />
      </>
    );
  else return null;
  */
}

/* =============================================================================
<HomeTab />
============================================================================= */
const HomeTab = ({navigation,props}) => {
  
  return (
    <Drawer.Navigator initialRouteName="Dashboard" headerMode="none"
      screenOptions={{
        drawerStyle: { width: "100%" }
      }}
     drawerContentOptions={{
      inactiveTintColor: 'white',
      itemStyle: { alignItems: 'flex-end'},
      
    }} drawerContent={(props) => <CustomDrawerContent {...props} /> }>
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,   
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() =>navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon
            name="menu"
            size={27}
            category="Feather"
            color={Colors.gray}
            style={styles.headerLeftIcon}
          />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={()=>navigation.navigate('MyProfile')}>
          <Image  source={require('../../Assets/profilePicture.jpeg')} style={styles.headerRight}/>
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }}} />
      <Drawer.Screen name="Folders" component={Folders} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon
              name="menu"
              size={27}
              category="Feather"
              color={Colors.gray}
              style={styles.headerLeftIcon}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Image source={require('../../Assets/profilePicture.jpeg')}  style={styles.headerRight} />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="MyContacts" component={MyContacts} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon
              name="menu"
              size={27}
              category="Feather"
              color={Colors.gray}
              style={styles.headerLeftIcon}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Image source={require('../../Assets/profilePicture.jpeg')} style={styles.headerRight} />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="SharedByMe" component={SharedByMe} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon
              name="menu"
              size={27}
              category="Feather"
              color={Colors.gray}
              style={styles.headerLeftIcon}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Image source={require('../../Assets/profilePicture.jpeg')} style={styles.headerRight} />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="SharedWithMe" component={SharedWithMe} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon
              name="menu"
              size={27}
              category="Feather"
              color={Colors.gray}
              style={styles.headerLeftIcon}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Image source={require('../../Assets/profilePicture.jpeg')} style={styles.headerRight} />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="DocumentListing" component={DocumentListing} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,
        },
        title:' ',
      //  headerTitleStyle:{ backgroundColor:'red'},
       // headerBackTitle: 'Documents',
        headerTintColor: Colors.bluePrimary,
        headerBackTitleStyle:{

          fontWeight: '600',
          fontSize: 20,
        },
        headerLeft: () => (
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon
              name="menu"
              size={27}
              category="Feather"
              color={Colors.gray}
              style={styles.headerLeftIcon}
            />
            <Text style={styles.headerText}>Documents</Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Image source={require('../../Assets/profilePicture.jpeg')} style={styles.headerRight} />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="Home" component={Home} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.bluePrimary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="MyAccount" component={MyAccount} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.bluePrimary,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,
        },
        title: ' ',
        
      
         headerLeft: () => (
      <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
        <Icon category="Ionicons" name="ios-arrow-back" size={24} style={{ padding: '2%', marginLeft: '2%' }} color={Colors.white} />
        <Text style={styles.header}>My Account</Text>
      </TouchableOpacity>
      ),
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="Notification" component={Notification} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.bluePrimary,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,
        },
    title:'',
   
        headerLeft: () => (
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.goBack()}>
            <Icon category="Ionicons" name="ios-arrow-back" size={24} style={{ padding: '2%', marginLeft: '2%' }} color={Colors.white} />
            <Text style={styles.header}>Notification</Text>
          </TouchableOpacity>
        ),

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="CheckList" component={CheckList} options={{
        headerShown: true, headerStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0,
        },
        title: ' ',
        headerLeft: () => (
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon
              name="menu"
              size={27}
              category="Feather"
              color={Colors.gray}
              style={styles.headerLeftIcon}
            />
            <Text style={styles.headerText}>CheckList</Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
            <Image source={require('../../Assets/profilePicture.jpeg')} style={styles.headerRight} />
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        }
      }} />
      <Drawer.Screen name="MyProfile" component={MyProfile} options={{
        headerShown: false 
      }} />

    </Drawer.Navigator>
  );
};

export default HomeTab;
