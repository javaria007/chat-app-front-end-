import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor:Colors.white,
    },
    imageContainer:{
        marginTop:height(2),
        width:width(100),
        height:height(50)
    },
    card:{
        flex:1,
        borderTopLeftRadius:height(5),
        borderTopRightRadius:height(5),
        backgroundColor:Colors.bluePrimary,
        padding:'5%',
       alignItems: 'center',
    },
    title:{
        fontSize:27,
        fontFamily:'Segoe UI',
        fontWeight: '500',
        color: Colors.white,
        textAlign:'center',
marginTop: height(2),
    },
    subTitle:{
        fontSize: 18,
        fontFamily: 'Segoe UI',
        color: Colors.white,
        textAlign: 'center',
        marginTop: height(2),
    },
    separator:{
        flex:1
    },
    getStarted:{
        backgroundColor:Colors.white,
       
    },
    getStartedTitle:{
        color: Colors.bluePrimary
    },
    alreadyAcc:{
        marginTop: height(2),
    }

   
});
export default styles;
