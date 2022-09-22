import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: Colors.bluePrimary,
    alignSelf: 'center',
    height: 55,
    borderColor: Colors.white,
    borderWidth: 1,
    width: '95%',
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

  },
  text: {
    fontSize:18,
    color: Colors.white,
   fontFamily:'Segoe UI',
    fontWeight: '300',

  }
});
export default styles;
