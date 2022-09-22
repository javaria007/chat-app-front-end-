import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../utills/Colors';
export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:Colors.white,
        
    },
   
    giftedScreen: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingHorizontal:'5%',

    },
    
    sendButton: {
        padding:'2%',
        backgroundColor: Colors.white,
        marginHorizontal: hp(1),
        width:50,
        aspectRatio: 1,
        borderRadius:50/2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',


    },
    profileImageView: {
        width: 50,
        aspectRatio: 1,
        marginHorizontal: hp(1.5),
    },
    profileImage: {
         width: 50,
        aspectRatio: 1,
        borderRadius: 50 / 2,
    },
    online: {
        backgroundColor: Colors.bluePrimary,
        width: 11,
        aspectRatio: 1,
        borderRadius: 8,
        marginHorizontal: hp(1),
        marginTop: hp(0.8),
    },
    offline: {
        backgroundColor: "#B7B7B7",
        width: 11,
        aspectRatio: 1,
        borderRadius: 8,
        marginHorizontal: hp(1),
        marginTop: hp(0.8),

    },
    nameContainer:{
alignSelf: 'center',
    },
    countContainer: {
        width: 11,
        aspectRatio: 1,
        position: "absolute",
        alignSelf: 'flex-end',
        bottom: hp(1),
        right: hp(1),
        borderRadius: 10 / 2,
        alignContent: 'center',
        justifyContent: 'center'
    },
    headerContainer:{
flexDirection: 'row',
    },
    nameText: {
        color: Colors.userName,
        fontSize: 16,
        fontFamily: 'Segoe UI',
        fontWeight: '400',


    },
    onlineText:{
        color: Colors.bluePrimary,
        fontSize: 14,
        fontFamily: 'Segoe UI',
        
    },
    avatar: {
        borderRadius: 15,
        width: 60,
        //height:50,
        aspectRatio: 1,
        borderRadius: 60 / 2,
    },
    header: {
        fontFamily: 'Segoe UI',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: hp(2),
        color: Colors.bluePrimary,
        paddingVertical: '2%'
    },
    backIcon: {
        padding: '2%',
         marginLeft: '2%',
          marginTop: '3%' 
    },
    timeText: {
        color: '#B0B0B0',
        fontSize: 14,
        fontWeight: '300',
        paddingVertical: hp(1),
        marginLeft: '5%',
    },
    Header: {

        width: wp(100),
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: '5%'


    },
    inputToolbar: {
        borderRadius: 20,
        backgroundColor: '#F2F2F2',

        flex: 1,

    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center',
        color: 'black',
        marginLeft: '5%',
    },
    search: {
        marginTop: '5%',
        marginRight: '5%'
    },
    searchField: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 16,
        color: 'black',
        marginTop: '5%',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    toolBarContainer: {
        flexDirection: 'row',
      flex: 1,
        borderRadius: 20,
        backgroundColor:Colors.white,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft: hp(1),
        borderColor:Colors.gray,
        marginTop: hp(1),
        borderWidth:0.5,
        height:55,


    },
    smileIcon: {
        //paddingHorizontal: hp(1),
        paddingVertical: hp(1),
    },
    cameraIcon: {
        paddingVertical: hp(1),
        marginHorizontal: hp(1),
    },
    emptyContainer:{
height:130,
width: 130,
    },
    emptyViewText:{
fontSize:16,
fontWeight: '400',
fontFamily: 'Segoe UI',
paddingVertical:hp(1),
textAlign: 'center',
textAlignVertical:'center',
color: Colors.bluePrimary,
    },
    send: {
       alignSelf:'center',
       height:24,
        width:24,
       
    },
    messageProcessingContainer: {
        flexDirection: 'row',
        marginVertical: hp(0.3),
        alignSelf: 'flex-start',
    },
    messageSentTime: {
        color: '#919BB0',
        fontSize: 11,
        fontWeight: '300',
        paddingHorizontal: hp(0.3)

    },
    edit: {
        width: 34,
        aspectRatio: 1,
        borderRadius: 34 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',

    },
    delete: {
        width: 34,
        aspectRatio: 1,
        borderRadius: 34 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
        marginLeft: hp(1.5),

    },
    editDeleteContainer: {
        flexDirection: 'row',
        marginRight: '5%'
    },
    modal: {
        margin: 0,
        flex:1,
    },
    modalScreen: {
        flex: 1,
        justifyContent: 'flex-end',
       
    },
    screenContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        // marginTop : 32,
        flex: 2,
    },
    screenTitle: {
        // fontFamily: AppFonts.Montserrat.bold,
        fontWeight: 'bold',
        fontSize: 18.0,
        color: 'white',
        paddingVertical: '2%',
        textAlign: 'center'
    },
    centerText: {
        // fontFamily: AppFonts.Montserrat.medium,
        fontWeight: '500',
        fontSize: 13,
        color: 'black',
        marginHorizontal: '8%',
        textAlign: 'center',
        paddingVertical: 20,
    },
    closeButtonTouchable: {
        paddingVertical: 20,
        backgroundColor: '#42d8fd',
        marginHorizontal: '5%',
        borderRadius: 10,
    },
    closeButtonText: {
        textAlign: 'center',
        color: 'white',
        // fontFamily: AppFonts.Montserrat.semiBold
    },
    closeButtonContainer: {
        paddingVertical: '4%',
        paddingHorizontal: '4%',
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: 'black',
        opacity: 0.9,
        alignItems: 'center',

    }



})
