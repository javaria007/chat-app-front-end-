import React,{useRef} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './BottomSheet.Styles';
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from '../../utills/Colors';
import Icon from '../Icon/Icon.component';
import { Card, Divider} from 'react-native-paper';

const Component = ({ onPressCamera,onPressGallery,onClose}) => {
  return (
    <>
      <View style={styles.bottomSheetTitleContainer}>
        <Text style={styles.bottomSheetTitle}>Image From</Text>
        <TouchableOpacity style={{ padding: '2%' }} onPress={onClose}>
          <Icon name="cross" category='Entypo' size={22} color={Colors.gray} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.renderContainer} onPress={onPressCamera}>
        <Icon name="camera" category='Entypo' size={22} color={Colors.gray} />
        <Text style={styles.bottomSheetText}>{'Upload from Camera'}</Text>
      </TouchableOpacity>
      <Divider style={styles.divider} />
      <TouchableOpacity style={styles.renderContainer} onPress={onPressGallery}>
        <Icon name="file-photo-o" category='FontAwesome' size={22} color={Colors.gray} />
        <Text style={styles.bottomSheetText}>{'Upload from Gallery'}</Text>
      </TouchableOpacity>

    </>
    
)};

export default Component;
