import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, Alert, FlatList, TouchableOpacity } from 'react-native';
import styles from './Settings.styles';
import Container from '../../components/Container/Container.component';
import { Card, Divider } from 'react-native-paper';
import Icon from '../../components/Icon/Icon.component';
import FastImage from 'react-native-fast-image';
import Colors from '../../utills/Colors';
import Button from '../../components/Button/Button.component';
import MyProfile from '../MyProfile/MyProfile.screen';
import EditProfile from '../EditProfile/EditProfile.screen';
import AboutUs from '../AboutUs/AboutUs.screen';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy.screen';
import Conditions from '../Conditions/Conditions.screen';
import { login, logout } from '../../Redux/Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
export default function Settings(props) {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
   
const Logout=()=>{
    const onPress=()=>{
        { dispatch(logout()) }
    }
    return(
        <Button title="Logout" onPress={onPress} />
    )
}
    return (
        <Container style={styles.container}>
            <View style={styles.profileImageContainer}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <View style={styles.profileImageView}>

                        <FastImage
                            style={{ width: '100%', height: '100%' }}
                            key={1}
                            resizeMode='stretch'
                            //  source={{ uri:'/Users/macbook/Library/Developer/CoreSimulator/Devices/20168820-6CAA-43B9-9772-776A54DD2B6A/data/Containers/Data/Application/068DC60F-0A6A-443D-AEF8-917B6D753BAD/tmp/react-native-image-crop-picker/EDE831DB-948A-46CC-82D7-08F8C0B5A1B7.jpg'}}
                            source={require('../../Assets/profilePicture.jpeg')}

                        />

                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('MyProfile')}>
            <Text style={styles.profileTitle}>Username</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.renderContainer} onPress={() => props.navigation.navigate('EditProfile')}>
                <View style={styles.componentContainer}>

                    <Icon name="edit" category="FontAwesome5" size={24} style={styles.icon} color={Colors.userName} />
                    <Text style={styles.titleText}>Edit Profile</Text>
                </View>

                <Icon name="chevron-thin-right" category="Entypo" size={18} style={styles.arrowIcon} color={Colors.userName} />

            </TouchableOpacity>

            <Divider style={styles.divider} />

            <TouchableOpacity style={styles.renderContainer} onPress={() => props.navigation.navigate('PrivacyPolicy')}>
                <View style={styles.componentContainer}>

                   <FastImage
                   source={require('../../Assets/insurance.png')}
                   style={[styles.icon,{hight:24,width:24}]}
                        resizeMode={FastImage.resizeMode.contain}/>
                    <Text style={styles.titleText}>Privacy Policy</Text>
                </View>

                <Icon name="chevron-thin-right" category="Entypo" size={18} style={styles.arrowIcon} color={Colors.userName} />

            </TouchableOpacity>
            <Divider style={styles.divider} />
            <TouchableOpacity style={styles.renderContainer} onPress={() => props.navigation.navigate('Conditions')}>
                <View style={styles.componentContainer}>
                    <FastImage
                        source={require('../../Assets/contract.png')}
                        style={[styles.icon, { hight: 24, width: 24 }]}
                        resizeMode={FastImage.resizeMode.contain} />
                    <Text style={styles.titleText}>Terms & Conditions</Text>
                </View>

                <Icon name="chevron-thin-right" category="Entypo" size={18} style={styles.arrowIcon} color={Colors.userName} />

            </TouchableOpacity>
            <Divider style={styles.divider} />
            
            <TouchableOpacity style={styles.renderContainer} onPress={() => props.navigation.navigate('AboutUs')}>
                <View style={styles.componentContainer}>

                    <FastImage
                        source={require('../../Assets/information.png')}
                        style={[styles.icon, { hight: 24, width: 24 }]}
                        resizeMode={FastImage.resizeMode.contain} />
                    <Text style={styles.titleText}>About us</Text>
                </View>

                <Icon name="chevron-thin-right" category="Entypo" size={18} style={styles.arrowIcon} color={Colors.userName} />

            </TouchableOpacity>
<View style={styles.separator}></View>
<Logout/>

        </Container>
    );
}
