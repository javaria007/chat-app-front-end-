import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Onboarding.styles';
import Button from '../../components/Button/Button.component';
import Login from '../Login/Login.screen';
import Container from '../../components/Container/Container.component';
import FastImage from 'react-native-fast-image';
import Otp from '../Otp/Otp.screen';
import Phone from '../Phone/Phone.screen';
export default function Onboarding(props) {
    //const dispatch = useDispatch()
    const GetStartedButton = () => {
        const onPress = () => {
            props.navigation.navigate('Phone')
        }
        return (
        
            <Button title="Get Started" titleStyle={styles.getStartedTitle} onPress={onPress} style={styles.getStarted} />
        )

    }
    const AlreadyAccountButton = () => {
const onPress=()=>{
props.navigation.navigate('Otp')
}
        return (
            <Button title="I have an account"  onPress={onPress} style={styles.alreadyAcc} />
        )
    }
    return (
        <Container style={styles.container}>
            <View style={styles.imageContainer}>
                <FastImage source={require('../../Assets/Onboarding/chatBackground.png')} resizeMode={FastImage.resizeMode.cover} style={{width:'100%',aspectRatio:1}}/>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>{'Make a friend, Expand your connections'}</Text>
                <Text style={styles.subTitle}>{'Connect people around the world with'}{"\n"}{'App Name'}</Text>
<View style={styles.separator}>

</View>
<GetStartedButton/>
            </View>
            
        </Container>
    )
}