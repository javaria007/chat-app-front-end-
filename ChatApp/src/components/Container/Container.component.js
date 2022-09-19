import React, { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View,Platform } from "react-native";
import styles from "./Container.styles.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
const Container = ({
    style,
    children,
    applyTopSafeArea = false,
    applyBottomSafeArea = true,
    avoidKeyboard = false
}) => {
  
    const insets = useSafeAreaInsets();
    const [isKeyboardOpened, setKeyboardOpened] = useState(false);

    useEffect(() => {
        if (avoidKeyboard) {
            Keyboard.addListener('keyboardWillShow', () => setKeyboardOpened(true));
            Keyboard.addListener('keyboardWillHide', () => setKeyboardOpened(false));
        }
    }, [false]);

    if (avoidKeyboard) {
        return (
            <KeyboardAvoidingView
            animated={true}
               behavior={Platform.OS === "ios" ? "padding" :undefined}
                style={{
                    flex: 1,
                    backgroundColor:'#ffff'
                }} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.screen,{
                        marginBottom: insets.bottom + (isKeyboardOpened ?height(4): 0),
                        paddingTop: applyTopSafeArea ? insets.top : 0,
                    }]}>
                        <View style={[styles.screen, style]}>
                            {children}
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    } else { 
        return (
            <View style={[styles.screen, {
                paddingTop: applyTopSafeArea ? insets.top: 0,
                paddingBottom: applyBottomSafeArea ? insets.bottom : 0
            }]}>
                <View style={[styles.screen, style]}>
                    {children}
                </View>
            </View>
        );
    }

}

export default Container;