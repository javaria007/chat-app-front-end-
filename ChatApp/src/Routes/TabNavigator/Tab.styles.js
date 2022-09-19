import {StyleSheet, Platform} from 'react-native';
import color from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    width: width(100),
    height: height(8),
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  tabBar1: {
    width: width(100),
    height: height(9),
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
  },
  singleItemContainer: {
    marginTop: height(100) > 670 ? height(2) : height(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: width(25),
    height: width(25),
  },
  logoContainer1: {
    width: width(25),
    height: width(25),
    marginTop: -height(7.5),
    marginLeft: width(1),
  },
  headerLeftIcon:{
    marginLeft:height(2),
  },
  header: {
    fontWeight: '600',
    fontSize: 20,
    marginLeft: height(2),
    color: color.white,
    paddingVertical: '2%'
  },
  headerRight:{
     width:50,
      height:50,
       borderRadius: 25,
      marginRight: height(2),
      backgroundColor: color.gray,
      resizeMode:'cover'
     
  },
  headerText: {
    marginLeft: height(2),
    padding:'2%', 
    fontSize:18,
    fontWeight: '700',
    color: color.bluePrimary,
  
  },
});
export default styles;
