import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: Colors.backgroundColor,
    },
    scrollView: {
        flex:1,
        backgroundColor:Colors.white,
    },
    descriptive:{
fontSize:14,
fontFamily: 'Segoe UI',
color: Colors.userName,
    },
    question:{
        fontSize:22,
        fontWeight: '700',
        color: "#000",
        paddingVertical: height(2),
    },
    header: {
        fontFamily: 'Segoe UI',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: height(2),
        color: Colors.bluePrimary,
        paddingVertical: '2%'
    },
    

});
export default styles;
