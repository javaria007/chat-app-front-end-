import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: Colors.backgroundColor,
    },
    header: {
        fontFamily: 'Segoe UI',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: height(2),
        color: Colors.bluePrimary,
        paddingVertical: '2%'
    },
    searchInputField: {
        paddingVertical: height(2),
        fontSize: 14,
       fontFamily: 'Segoe UI',
        marginHorizontal: height(1),
        width:'75%',
     

    },
    containerMessage: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.25,
        borderColor:Colors.gray,
        paddingVertical: height(2)

    },
    nameText: {
        color: Colors.userName,
        fontSize: 15,
        fontFamily: 'Segoe UI',
        fontWeight: '400',


    },
    nameTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        //paddingBottom: height(0.5),
    },
    profileImageView: {
        width: 50,
        aspectRatio: 1,
        marginHorizontal: height(1.5),
    },
    flatList: {
        backgroundColor: Colors.backgroundColor,
    },

    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50 / 2,
    },

    searchFieldIcon: {
        padding:'4%',
       
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 30,
        right:0,
    },
    searchContainer: {
        marginTop: height(2),
        backgroundColor: Colors.white,
        width:'80%',
        height: 55,
        borderRadius: 10,
        marginVertical: height(2),
        paddingHorizontal: height(0.4),
        marginHorizontal:height(2),
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        

    },
    suggestedText:{
        fontSize:16,
        fontFamily:'Segoe UI',
        fontWeight: '400',
        color: Colors.userName,
        paddingVertical:height(1),
    },
    backIcon:{
        marginTop: height(3),
        padding: '2%', 
        marginLeft: '2%'
    }
});

export default styles;
