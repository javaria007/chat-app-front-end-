import React, { Component, useState, createRef, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styles from './MyProfile.styles';
import Button from '../../components/Button/Button.component';
import FastImage from 'react-native-fast-image';
import Icon from '../../components/Icon/Icon.component';
import Colors from '../../utills/Colors';
import TextField from '../../components/TextField/TextField.component';
import Container from '../../components/Container/Container.component';
import { DrawerActions } from "@react-navigation/native";
import Chat from '../Chat/Chat.screen';


export default function MyProfile(props) {
    const other = props.route.params?.other;
    const item = props.route.params?.item;
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Female');
    const [age, setAge] = useState('21');
    const [phone, setPhoneNo] = useState('00000000000000');
    const [bio, setBio] = useState('');
    const [status, setStatus] = useState('Urgent Calls only');
    const [uri, setImageUri] = useState('');
    const BackButton = () => {
        const onPress = () => {
            props.navigation.pop();
        }
        return (
            <TouchableOpacity style={styles.backButtonContainer} onPress={onPress}>
                <Icon category="Ionicons" name="ios-arrow-back" size={24} style={styles.backIcon} color={Colors.gray} />
            </TouchableOpacity>
        )
    }
    const MessageButton = () => {
        return (
            <TouchableOpacity style={styles.messageButton} onPress={() =>props.navigation.navigate('Chat',{item:item,newUser:true})}>
                <FastImage
                    source={require('../../Assets/chat.png')}
                    style={styles.chatIcon}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={styles.messageButtonText}>Message</Text>
            </TouchableOpacity>
        )
    }
    return (


        <View style={styles.container}>
            <View style={styles.cover}>

                <ImageBackground source={require('../../Assets/background.png')} resizeMode="cover" style={styles.image} />
                <TouchableOpacity style={styles.drawerIcon} onPress={() => props.navigation.pop()}>
                    <Icon
                        name="ios-arrow-back"
                        size={26}
                        category="Ionicons"
                        color={Colors.white}
                        style={styles.header}
                    />
                </TouchableOpacity>
                
            </View>
            <View style={styles.profileImageContainer}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <View style={styles.profileImageView}>

                        <Image
                            style={{ width: '100%', height: '100%' }}
                            key={1}
                            resizeMode='stretch'

                            source={require('../../Assets/profilePicture.jpeg')}

                        />
                    </View>

                </TouchableOpacity>

            </View>



            <View style={styles.componentContainer}>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{item?item.name:'Username'}</Text>
                    <Text style={styles.privacyText}>{item ?item.gender : 'Female'},19</Text>
                </View>

                <View style={styles.renderContainer}>
                    <Icon name="phone" category="Feather" size={18} color={Colors.bluePrimary} />
                    <Text style={styles.text}>{'00000000000'}</Text>

                </View>
                <View style={styles.renderContainer}>
                    <Icon name="ios-information-circle-outline" category='Ionicons' size={20} color={Colors.bluePrimary} />
                    <View style={styles.aboutContainer}>
                        <Text numberOfLines={2} style={styles.aboutText}>{'Lorem ipsum dolor sit amet, consetetur   dipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}</Text>
                    </View>
                </View>


            </View>
            <View style={styles.separator}>

            </View>
            {other ?
                <MessageButton />
                : null}
        </View>


    )
}