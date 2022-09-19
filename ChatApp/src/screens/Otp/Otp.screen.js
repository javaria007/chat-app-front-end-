import React, { Component, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Otp.styles';
import Button from '../../components/Button/Button.component';
import Icon from '../../components/Icon/Icon.component';
import Colors from '../../utills/Colors';
import TextField from '../../components/TextField/TextField.component';
import Login from '../../screens/Login/Login.screen';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Container from '../../components/Container/Container.component';


export default function Otp(props) {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const VerifyButton = () => {
        const onPress = () => {
            props.navigation.navigate('Login');
        }
        return (
            <Button title="Verify" style={styles.verifyButton} onPress={onPress} />
        )
    }
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

    return (
        <Container style={styles.container}>

            <View style={styles.logoImageContainer}>
                <Image source={require('../../Assets/Otp/otp.png')} resizeMode="contain" style={styles.logoImage} />
            </View>
            <Text style={styles.VerificationTitle}>{'Verification'}</Text>
            <Text style={styles.enterCode}>{'Enter code that you received on phone'}</Text>
            <Text style={styles.enterCodeTitle}>Enter Code</Text>
            <CodeField
                ref={ref}
                {...prop}

                value={value}
                onChangeText={setValue}

                cellCount={4}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"

                renderCell={({ index, symbol, isFocused }) => (
                    <View style={[styles.cellBorder, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        <Text style={styles.cell} key={index}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>

                    </View>
                )}
            />
            <View style={styles.separator}>

            </View>
            <VerifyButton />



        </Container>
    )
}