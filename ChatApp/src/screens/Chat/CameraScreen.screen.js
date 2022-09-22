import react,{useEffect,useState,useRef} from 'react';
import {
    Image, StyleSheet,
    Text, TouchableOpacity, TouchableWithoutFeedback, View,
} from 'react-native';
//Constants
//Third Parties
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Modal from 'react-native-modal';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { selected } from '../../Redux/Actions/Auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../../components/Icon/Icon.component'


const CameraScreen = props => {
    const dispatch = useDispatch();
    const camera = useRef()
    const [hasPermission, setHasPermission] = useState(false);
    const devices = useCameraDevices();
    const [show,setShow]=useState(false);
    const device = devices.back;
    const takePhotoOptions = {
        qualityPrioritization: 'speed',
        flash: 'off'
    };
    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'authorized');
        })();
    }, []);
    const insets = useSafeAreaInsets();
    const takePhoto = async () => {
        try {
            //Error Handle better
            if (camera.current == null) throw new Error('Camera Ref is Null');
            console.log('Photo taking ....');
            const photo = await camera.current.takePhoto();
            console.log(photo.path)
           // dispatch(selected(photo.path))
           
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <Modal
            isVisible={props.modalVisible}
            style={styles.modal}
            backdropOpacity={0.4}
            swipeDirection={['down']}
            onSwipeComplete={() => {
                props.onClose()
            }}>
            <TouchableWithoutFeedback onPress={() => {
                // props.onClose()
            }}>
                <View style={styles.screen}>
                    <View style={{
                        backgroundColor: 'black',
                        paddingTop: insets.top,
                        opacity:0.9,
                    }}>
                        <Icon name="cross" category='Entypo' size={22} color={'#fff'} style={{padding: '2%'}} />
                    </View>
                    {/* <Text style={styles.centerText}>{'Please scan the barcode'}</Text> */}
                    {/* <QRCodeScanner
                        onRead={onQRSucessfullRead}
                        showMarker={true}
                        customMarker={
                            <Image style={{
                                flex: 1
                            }} source={require('../../assets/ic_barcode_placeholder.png')} />
                        }
                        cameraStyle={{ height: '100%' }}
                        flashMode={RNCamera.Constants.FlashMode.off}
                    /> */}
                    <View style={{
                        flex: 1,
                    }}>
                        
                        {device != null &&
                            hasPermission && (
                                <>
                                    <Camera
                                    
                                    ref={camera}
                                        style={StyleSheet.absoluteFill}
                                        device={device}
                                        isActive={true}
                                  
                                    enableZoomGesture
                                    photo={true}
                                    hasFlash
                                    
                                 
                                    />
                                </>)}
                    </View>


                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={props.selectImage}>
                            <FastImage
                                source={require('../../Assets/imageGallery.png')}
                                style={{ width: 50, height: 50 }}
                                resizeMode={FastImage.resizeMode.contain} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={takePhoto}>
                           <FastImage 
source={require('../../Assets/capturePhoto.png')}
                           style={{width:75,height:75}}
                           resizeMode={FastImage.resizeMode.contain}/>
                           
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={props.onClose}>
                        <FastImage
                            source={require('../../Assets/switch.png')}
                            style={{ width: 50, height: 50 }}
                            resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create(
    {
        modal: {
            margin: 0
        },
        screen: {
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
            paddingHorizontal:'4%',
          flexDirection: 'row',
          justifyContent: "space-between",
            backgroundColor: 'black',
            opacity:0.9,
            alignItems: 'center',
            
        }
    }
);

export default CameraScreen;