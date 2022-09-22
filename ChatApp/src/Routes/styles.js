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
          
       },
       userName:{
           fontFamily: 'Segoe UI',
           fontSize: 16,
          color:ThemeColors.gray,
           marginLeft: height(2),
       },
        headerRight: {
            width: 45,
            height: 45,
            borderRadius: 45/2,
            marginRight: height(2),
            backgroundColor: ThemeColors.gray,
            resizeMode: 'cover'

        },
    }
);
