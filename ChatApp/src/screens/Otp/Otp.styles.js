import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: Colors.white,
    },
    logoImageContainer: {
        marginTop: height(1),
        alignItems: 'center',
        width: width(100),
        height: height(20)
    },
    logoImage: {

        width: width(100),
        height: height(20)
    },
    backIcon: {
        padding: '2%',
    },
    backButtonContainer: {
        marginTop: height(5),
        position: 'absolute',
        flex: 1,
        left: 10,
    },
    VerificationTitle: {
        fontSize: 27,
        color: Colors.bluePrimary,
        fontFamily: 'Segoe UI',
        fontWeight: '500',
        marginTop: height(5),
    },
    enterCode: {
        fontSize: 18,
        fontFamily: 'Segoe UI',
        color: Colors.gray,
        paddingVertical: height(2),

    },
    enterCodeTitle: {
        fontSize: 19,
        fontFamily: 'Segoe UI',
        color: Colors.bluePrimary,
        marginTop: height(3),
    },
    textInputLabel: {
        fontSize: 16,
        fontWeight: '400',
    },
    forgetInputField: {
        width: '98%',
    },
    separator: {
        flex: 1,
    },
    verifyButton: {
        width: '82%',


    },
    codeFieldRoot:
    {
        // flex: 1,
        flexDirection: 'row',
        marginTop: height(2),
    },
    cell: {
        width: 60,
        height: 60,
        fontSize: 19,
        color: Colors.gray,
        textAlign: 'center',
        paddingVertical: height(2),
        // textDecorationLine: 'underline',
    },
    focusCell: {
        borderBottomColor: Colors.bluePrimary,
    },
    cellBorder: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
    }




});

export default styles;
