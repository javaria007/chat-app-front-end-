import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: Colors.white,
        padding:'5%',
    },
    imageContainer: {
        width:width(50),
        height:height(20),
        alignItems: 'center',
        alignSelf:'center',
        
    },
    phonePicker:{
        marginTop: height(2),
        backgroundColor: Colors.white,
        height: 60,
        borderRadius: 10,
        marginVertical: height(2),
        //paddingHorizontal: height(2),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
    },
    countryCode:{
backgroundColor: Colors.bluePrimary,
width:width(17),
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
height:59,
    },
    codeText:{
fontSize:16,
fontFamily: 'Segoe UI',
color:Colors.white,
    },
});
export default styles;
