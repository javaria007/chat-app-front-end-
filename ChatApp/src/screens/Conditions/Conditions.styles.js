import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: Colors.backgroundColor,
    },
   
    descriptive: {
        fontSize: 14,
       fontFamily: 'Segoe UI',
        color: Colors.userName,
    },
   bullet:{
    height:11,
    width:11,
    borderRadius:11/2,
       backgroundColor:'#262626',
    marginRight: height(1),
    alignSelf: 'center',

   },
    checked: {
        width: 20,
        height: 20,
        backgroundColor: Colors.bluePrimary,
        borderRadius: 5,
        marginRight: height(1),
        alignItems: 'center',
        justifyContent:'center',
    },
    notChecked: {
        width: 20,
        height: 20,
        borderColor: Colors.bluePrimary,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: height(1),
    },
   conditionContainer:{
       flexDirection: 'row',
       paddingVertical: height(2)
   },
   agreeButton:{
    width:'82%',
    alignSelf: 'center',
   },
   separator:{
    flex:1,
   },
    header: {
        fontFamily: 'Segoe UI',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: height(1.9),
        color: Colors.bluePrimary,
        paddingVertical: '2%'
    },


});
export default styles;
