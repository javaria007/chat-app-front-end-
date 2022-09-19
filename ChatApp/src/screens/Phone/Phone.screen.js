import React, {useState } from 'react';
import { View, Text,Image ,TouchableOpacity} from 'react-native';
import styles from './Phone.styles';
import Container from '../../components/Container/Container.component';
import CountryPicker from 'react-native-country-picker-modal'
import TextField from '../../components/TextField/TextField.component';
import Colors from '../../utills/Colors';
export default function Phone(props) {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <Container style={styles.container}>
           <View style={styles.imageContainer}>
                <Image source={require('../../Assets/Phone/phone.png')} resizeMode="cover" style={styles.imageContainer} />
            </View>
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

        </Container>
    );
}
