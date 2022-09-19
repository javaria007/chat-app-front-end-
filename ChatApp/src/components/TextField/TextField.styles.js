import { StyleSheet } from "react-native";
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
export default StyleSheet.create({
    textField: {
        marginTop: height(2),
        backgroundColor:Colors.white,
        height: 60,
        paddingHorizontal:height(2),
        marginVertical:height(2),
        color:'#000',
        fontSize: 16,
        fontFamily: 'Segoe UI',
       borderRadius:10,
       borderWidth:1,
        borderColor:'#EEEEEE',
        
    }
})