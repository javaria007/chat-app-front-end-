import { StyleSheet } from "react-native";
import ThemeColors from '../utills/Colors';
import { heightPercentageToDP as height, widthPercentageToDP as width  } from 'react-native-responsive-screen';
export default StyleSheet.create(
    {
        screen: {
            backgroundColor: ThemeColors.primary,
            paddingHorizontal: 20,
        },
       header:{
           fontFamily: 'Segoe UI',
           fontSize: 20,
           fontWeight: '400',
           marginLeft: height(2),
           color: ThemeColors.bluePrimary,
           paddingVertical: '2%'
       }
    }
);
