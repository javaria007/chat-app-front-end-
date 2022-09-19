import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default StyleSheet.create({
    container: {
        paddingHorizontal: '1%',
        marginBottom: 10
    },
    label: {
        color: 'red',
        fontSize: heightPercentageToDP(1.8),
        fontWeight: '400'
    }
});