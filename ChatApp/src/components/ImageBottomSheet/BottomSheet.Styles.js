import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { widthPercentageToDP as width, heightPercentageToDP as height } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: Colors.white
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
