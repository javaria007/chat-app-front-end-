import React, {useState } from 'react';
import { View, Text,Image ,TouchableOpacity} from 'react-native';
import styles from './Phone.styles';
import Container from '../../components/Container/Container.component';
import CountryPicker from 'react-native-country-picker-modal'
import TextField from '../../components/TextField/TextField.component';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import Otp from '../../screens/Otp/Otp.screen';
import FastImage from 'react-native-fast-image';
export default function Phone(props) {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+1');
    const [phone, setPhone] = useState('');
    const GetCode=()=>{
        const onPress=()=>{
props.navigation.navigate('Otp');
        }
        return(
            <Button title={'Get Code'} onPress={onPress}/>
        )
    }

    return (
        <Container style={styles.container}>
           <View style={styles.imageContainer}>
                <FastImage source={require('../../Assets/Phone/phoneNo.png')} resizeMode={FastImage.resizeMode.contain} style={styles.image} />
            </View>
            <Text style={styles.signinTitle}>{'Welcome'}</Text>
            <View style={styles.descriptionContainer}>  
            <Text style={styles.signDescription}>{'Enter your phone to get started with chat app'}</Text>
            </View>
            <Text style={styles.phoneNo}>{'Phone No.'}</Text>
            <View style={styles.phonePicker}>
            <TouchableOpacity style={styles.countryCode} onPress={() =>setShow(true)}>
                <Text style={styles.codeText}>
               {countryCode}
                </Text>
            {show?
                <CountryPicker
                withCallingCodeButton={true}
                onSelect={(value)=>{setCountryCode('+'+value.callingCode);setShow(false)}}
                visible={show}
                onClose={()=> setShow(false)}
            />:null}
</TouchableOpacity>
                <TextField
                   style={{borderWidth:0,height:58}}
                    value={phone}
                    onTextChange={(value)=>setPhone(value)}
                    placeholder={"000000000000"}
                    placeholderTextColor={Colors.gray}
                    returnKeyType="done"
                    keyboardType={'number-pad'}
                    onSubmitEditing={() => {
                        //PasswordRef.current?.focus();
                    }}
                />

            </View>
            <View style={styles.separator}>

            </View>
            <GetCode />

        </Container>
    );
}
