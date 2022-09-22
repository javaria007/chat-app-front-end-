import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor:Colors.backgroundColor,
      
    },
    profileImagesContainer:{
        width:width(90),
        aspectRatio: 1,
       
    },
    exploreText:{
        fontFamily: 'Segoe UI',
    fontWeight: '400',
    fontSize:24,
    color: Colors.bluePrimary,
    textAlignVertical:'center',
    marginVertical: height(2),
    },
    exploreButton:{
        width:'95%',
        marginTop: height(3),
    }

    
});
export default styles;
