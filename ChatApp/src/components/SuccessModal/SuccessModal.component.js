import React, { Fragment } from 'react';
import { View, SafeAreaView, StatusBar,Text,Image } from 'react-native';
import Colors from '../../utills/Colors';
import styles from './SuccessModal.styles'
import Modal from 'react-native-modal';
import Button from '../Button/Button.component';

const Component = ({title,description,isVisible,style ,onPress}) => {
    return (
        
        <Modal isVisible={isVisible} style={[styles.modal, style]} onRequestClose={() => consoleLog('On request close pressed.')} >
           
                <View style={styles.componentContainer}>
                    <View style={styles.imageContainer}>
                    <Image source={require('../../Assets/succesModel.png')} style={styles.image} resizeMode="cover" />
                </View>
<Text style={styles.title}>
{'Success'}
</Text>
<View style={styles.descriptionContainer}>
<Text style={styles.description}>
    {description}
</Text>
                </View>
<Button style={styles.button} title={'Ok'} onPress={onPress}/> 
            </View>
            </Modal>
        

    );
};

export default Component;
