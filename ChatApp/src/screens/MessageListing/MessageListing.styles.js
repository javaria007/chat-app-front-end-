import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.backgroundColor,
        paddingHorizontal: '5%',

    },
    profileImageView: {
        width: 50,
        aspectRatio: 1,
        marginHorizontal: height(1.5),
    },
    flatList: {
        backgroundColor: '#F8F8F8',
    },

    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50 / 2,
    },
    search: {
        marginTop: '5%'
    },
    containerMessage: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 0.25,
        borderColor: '#707070',
        paddingVertical: height(2)

    },
    online: {
        backgroundColor: Colors.bluePrimary,
        width: 11,
        aspectRatio: 1,
        borderRadius: 8,
        marginHorizontal: height(1),
        marginTop: height(0.8),
    },
    offline: {
        backgroundColor: "#B7B7B7",
        width: 11,
        aspectRatio: 1,
        borderRadius: 8,
        marginHorizontal: height(1),
        marginTop: height(0.8),

    },
    nameText: {
        color: Colors.userName,
        fontSize: 15,
        fontFamily: 'Segoe UI',
        fontWeight: '400',


    },
    messageCountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messageContainer: {
        flexShrink: 1,
        width: width(50),
    },
    timeText: {
        color: Colors.gray,
        fontSize: 13,
        fontFamily: 'Segoe UI',

    },
    nameTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        //paddingBottom: height(0.5),
    },
    message: {
        fontSize: 14,
        fontFamily: 'Segoe UI',
        color: Colors.gray,
    },
    countContainer: {
        width: 11,
        aspectRatio: 1,
        position: "absolute",
        alignSelf: 'flex-end',
        bottom: height(1),
        right: height(1),
        borderRadius: 10 / 2,
        alignContent: 'center',
        justifyContent: 'center'
    },
    chatCount: {
        color: '#ffff',
        fontSize: 12,
        fontFamily: 'Segoe UI',

    },
    messageCount: {
        width: 25,
        margin: height(1),
        aspectRatio: 1,
        borderRadius: 25 / 2,
        backgroundColor: Colors.bluePrimary,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

});
export default styles;
