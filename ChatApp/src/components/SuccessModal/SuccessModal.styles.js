import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
       padding: '5%',
       alignContent:'center'
    },
    modal:{
         alignItems: 'center',
         borderRadius:20,
         justifyContent: 'center',
         padding:'2%'
    },
    imageContainer:{
height:height(18),
width:width(50),
marginTop:height(5),
    },
    image:{
        height: height(18),
        width: width(50), 
    },
    title:{
        fontSize:25,
        fontFamily:'Segoe UI',
        fontWeight: '400',
        color:Colors.bluePrimary,
        marginTop: height(4),
    },
    descriptionContainer:{
        alignSelf: 'center',
         justifyContent: 'center',
          alignItems: 'center',
           
           width:width(50),
           marginTop: height(1),

    },
    description:{
        fontSize:15,
        fontFamily:'Segoe UI',
        fontWeight: '400',
        color: Colors.gray,
        marginTop:height(2),
        textAlign:'center',
        textAlignVertical:'center',

    },
    button:{
        height:50,
        backgroundColor: Colors.bluePrimary,
        marginTop: height(5),
        width: '75%',
        borderRadius:15,
},
    componentContainer: { 
        backgroundColor:Colors.white,
         width: '100%', 
         alignItems: 'center',
          borderRadius: 20,
          paddingBottom:height(5),
         },
         animatedIcon:{
             width: 210,
             position: 'absolute',
             top: -36,
         }
});
export default styles;
