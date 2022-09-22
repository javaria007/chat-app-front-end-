import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: Colors.white,
    },
    profileImageView: {
        width: 120,
        borderRadius: 120 / 2,
        aspectRatio: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        alignSelf: 'center',

        shadowColor: "#F6F8FA",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,

    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    header: {
        fontFamily: 'Segoe UI',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: height(2),
        color: Colors.bluePrimary,
        paddingVertical: '2%'
    },
    separator:{
flex:1,
    },
    profileTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: Colors.bluePrimary,
        fontFamily: 'Segoe UI',
        textAlign: 'center',
        marginVertical: height(3),
    },
    icon: {
        marginRight: height(1.5),

    },
    arrowIcon: {
        paddingVertical: height(1),
    },


    renderContainer: {
        paddingVertical: height(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        fontSize: 16,
        fontWeight: '400',
       fontFamily: 'Segoe UI',
       color:Colors.userName,
        textAlignVertical: 'center'


    },
    componentContainer: {
        flexDirection: 'row',
    }


});
export default styles;
