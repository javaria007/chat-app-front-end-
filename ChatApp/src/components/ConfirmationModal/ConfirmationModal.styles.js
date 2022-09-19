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
    title:{
        fontSize:22,
        fontWeight: '700',
        color:Colors.bluePrimary,
        marginTop: height(6),
    },
    description:{
        fontSize:14,
        fontWeight:'300',
        color: Colors.gray,
        marginTop:height(2),

    },
    okButton:{
        height:50,
        backgroundColor: Colors.bluePrimary,
        marginTop: height(5),
        width: '40%',
        borderRadius:10,
},
    cancelButton: {
        height: 50,
        backgroundColor: Colors.white,
        marginTop: height(5),
        width: '40%',
        borderRadius: 10,
        borderWidth:1,
        borderColor:Colors.gray,
        marginRight:height(3),
    },

    buttonContainer:{
 flexDirection: 'row',
 justifyContent: 'space-between' ,
 
    },
    componentContainer: { 
        backgroundColor:Colors.white,
         width: '100%', 
         alignItems: 'center',
          borderRadius: 20,
          paddingBottom:height(5),
         },
         animatedIcon:{
       width:210,
           position:'absolute',
           top:-36,
              
              
               
         }
});
export default styles;
