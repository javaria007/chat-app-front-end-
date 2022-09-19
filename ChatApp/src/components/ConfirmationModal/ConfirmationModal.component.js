import React, { Fragment } from 'react';
import { View, SafeAreaView, StatusBar,Text } from 'react-native';
import Colors from '../../utills/Colors';
import styles from './ConfirmationModal.styles'
import Modal from 'react-native-modal';
import Button from '../Button/Button.component';
import Lottie from 'lottie-react-native';

const Component = ({title,description,isVisible,style ,onPressOk,onPressCancel}) => {
    return (
        
        <Modal isVisible={isVisible} style={[styles.modal, style]} onRequestClose={() => consoleLog('On request close pressed.')} >
           
                <View style={styles.componentContainer}>
                
                <Lottie source={require('./confirmation.json')}  autoPlay style={styles.animatedIcon}/>
                
<Text style={styles.title}>
{'Confirmation'}
</Text>
<Text style={styles.description}>
    {description}
</Text>
<View style={styles.buttonContainer}>
                    <Button style={styles.cancelButton} title={'Cancel'} titleStyle={{ color: Colors.gray }} onPress={onPressCancel} />
                    <Button style={styles.okButton} title={'OK'} titleStyle={ {color: Colors.white }} onPress={onPressOk} />
</View>
                 

            </View>
            </Modal>
        

    );
};

export default Component;
