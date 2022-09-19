import React from "react";
import {
    View,
    Text
} from 'react-native';
import styles from "./styles";

const InputErrorMessage = ({
    value
}) => {
    if (value != null && value != '') {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{value}</Text>
            </View>
        );
    }
    return null;
};

export default InputErrorMessage;