import React from "react";
import { TextInput } from 'react-native';
import styles from "./TextField.styles";

const TextField = ({
    style,
    placeholder,
    placeholderTextColor,
    keyboardType,
    value,
    onTextChange,
    errorMessage,
    secureTextEntry,
    textContentType,
    textAlignVertical,
    isEditable,
    returnKeyType,
    left,
    right,
    maxLength,
multiline,
onFocus,
onBlur,
onSubmitEditing,
    numberOfLines

}) => {
    return (
        <>
            <TextInput
                value={value}
                onChangeText={onTextChange}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                style={[styles.textField, style]}
                keyboardType={keyboardType}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                textContentType={textContentType}
                textAlignVertical={textAlignVertical}
                editable={isEditable}
                returnKeyType={returnKeyType}
                multiline={multiline}
                maxLength={maxLength}
                onFocus={onFocus}
                onBlur={onBlur}
                onSubmitEditing={onSubmitEditing}
                numberOfLines={numberOfLines}

            />
           
        </>
    );
}

export default TextField;