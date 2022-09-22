import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingVertical: '9%',


    },
    cover: {

        width: width(100),
        aspectRatio: 10 / 7,
        backgroundColor: 'black',
        opacity: 0.6

    },
    header: {
        //marginLeft: height(2),
        color: Colors.white,
        paddingVertical: '2%'
    },

    image: {
        height: '100%',
        width: '100%'
    },

    separator: {
        flex: 1,
    },
    sendButton: {
        width: '82%',


    },
    safeareaView:
    {
        flex: 1,
        backgroundColor: Colors.white
    },
    profileImageView: {
        width: 120,
        borderRadius: 120 / 2,
        aspectRatio: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.gray,
        alignSelf: 'center',
        position: 'absolute',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        bottom: -height(7.5),


    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    drawerIcon: {
        position: 'absolute',
        left: 5,
        top: 5,
        zIndex: 9
    },
    componentContainer: {
        marginTop: height(5),
        padding: '5%',

    },
    renderContainer: {
        flexDirection: 'row',
        marginVertical: height(2),
    },
    text: {
        marginHorizontal: height(2),
        color: Colors.gray,
        fontSize: 15,
        fontFamily: 'Segoe UI',
        textAlignVertical: 'center',

    },
    aboutText: {
        marginHorizontal: height(2),
        color: Colors.gray,
        fontSize: 15,
        fontFamily: 'Segoe UI',
        marginRight: height(3),
        textAlignVertical: 'center',

    },
    messageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.bluePrimary,
        alignSelf: 'center',
        paddingHorizontal:height(3),
       
    },
    messageButtonText:{
fontSize:17,
fontFamily: 'Segoe UI',
color: Colors.white,
paddingHorizontal:height(1.5),

    },
    chatIcon: {
        width: 25,
        height: 25
    },
    aboutContainer: {
        paddingRight: '4%'
    },

    userInfoContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: height(1),
    },
    userName: {
        fontSize: 22,
        fontFamily: 'Segoe UI',
        fontWeight: '400',
        color: Colors.bluePrimary,
    },
    privacyText: {
        fontSize: 16,
        fontFamily: 'Segoe UI',
        paddingTop: height(1.5),
        color: Colors.userName,
    },





});

export default styles;
