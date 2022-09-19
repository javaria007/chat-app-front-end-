import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: Colors.white,
   padding:'5%',
  },
  profileImageView: {
    width: 130,
    borderRadius: 130 / 2,
    aspectRatio: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    alignSelf: 'center',

    shadowColor: "#F6F8FA",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    marginTop: height(3),



  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  cameraIcon: {
    width: 60,
    alignSelf: 'center',
    aspectRatio: 1,
    borderColor: Colors.bluePrimary,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    //  top:height(3),
    shadowColor: "#F6F8FA",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    bottom: -height(1),
    right: height(15),

  },
  componentContainer:{
    marginTop:height(5),
  },
  inputLabel:{
    fontSize:16,
    fontFamily: 'Segoe UI',
    color: Colors.bluePrimary,
    
  },
  genderContainer:{
    marginTop: height(2),
    backgroundColor: Colors.white,
    height: 60,
    borderRadius: 10,
    marginVertical: height(2),
    paddingHorizontal:height(2),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  dropdownText:{
    fontSize: 16,
    fontFamily: 'Segoe UI',
    color: Colors.gray,
  },
  bio:{
    height:height(13),
    paddingTop:height(1),
  },
 bioContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
 },
 count:{
  fontSize: 16,
  fontFamily: 'Segoe UI',
   color:'#262626',
 },
  header: {
    fontFamily: 'Segoe UI',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: height(2),
    color: Colors.bluePrimary,
    paddingVertical: '2%'
  },
 hidePublicContainer:{
  flexDirection: 'row',
  justifyContent:"space-between",
  marginHorizontal:height(1),
  marginVertical: height(1),
 },
 hideContainer:{
flexDirection: 'row',
 },
  checked: {
    width: 20,
    height: 20,
    backgroundColor: Colors.bluePrimary,
    borderRadius: 5,
  },
  notChecked: {
    width: 20,
    height: 20,
    borderColor: Colors.bluePrimary,
    borderWidth: 1,
    borderRadius: 5,
  },
  checkboxText:{
fontSize: 16,
fontFamily: 'Segoe UI',
    color:'#262626',
    marginLeft:height(1),

  },
  createButton:{
    width:'82%',
    marginVertical: height(5),
  },
  focusColor:{
    borderColor: Colors.bluePrimary,
  },
  bottomSheetText: {

    fontSize: 16,
    fontWeight: '400',
    color: Colors.gray,
    paddingHorizontal: height(1.5),
    marginTop: height(0.2)
  },
  bottomSheetTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%'
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.gray,
  },
  divider: {
    backgroundColor: Colors.gray,
    marginHorizontal: height(2),
  },
  renderContainer: {
    flexDirection: 'row',
    paddingVertical: height(2),
    marginHorizontal: height(2),


  }

});
export default styles;
