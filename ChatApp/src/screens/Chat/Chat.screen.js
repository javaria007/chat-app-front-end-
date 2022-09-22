import React, { useState, useCallback, useEffect,useRef ,createRef} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { GiftedChat, Send, Bubble, InputToolbar, Composer } from 'react-native-gifted-chat';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { widthPercentageToDP as width, heightPercentageToDP as height} from 'react-native-responsive-screen';
import Icon from '../../components/Icon/Icon.component';
import style from './Chat.styles';
import ImagePicker from 'react-native-image-crop-picker';
import { showSettingsAlertForPermission } from "../../global/common"
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
import Colors from '../../utills/Colors'
import { ImagePickerErrorCodes } from "../../global/common";
import CameraScreen from './CameraScreen.screen';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MyProfile from '../MyProfile/MyProfile.screen';
import { useSelector } from 'react-redux';
const Chat = (props) => {
    const insets = useSafeAreaInsets();
    const camera = createRef()
    const path = useSelector(state => state.Auth.path);
    const newUser = props.route?.params?.newUser;
    const user = props.route?.params?.item;
    const [messages, setMessages] = useState([]);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [imageUri, setImageUri] = useState("");
    const [showEdit, setShowEdit] = useState(false);
    const [show,setShow]=useState(false);
    const [showCamera,setShowCamera]=useState(false);
    const [emojiText,setEmojiText]=useState([]);
    const [hasPermission, setHasPermission] = useState(false);
    const devices = useCameraDevices();
   
    const device = devices.back;
    
    useEffect(() => {
        props.navigation.setOptions({
            headerStyle: {
                height: height(12),
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 2.84,
                backgroundColor: Colors.white,
                elevation: 0,

                //borderBottomWidth: 1,
                borderBottomLeftRadius: height(2),
                borderBottomRightRadius: height(2),

            },
            headerLeft: Header

        });
    }, [])
  
    
  useEffect(() => {
  
    console.log('hello',path);
    if(newUser)
    {

    }
       
    else{setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),

                user: {
                    _id: 2,
                    name: 'React Native',
                   
                },
            },
        ])
    }
    }, [])
    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'authorized');
        })();
    }, []);
    const handlePick = (emojiObject: EmojiType) => {
        console.log(emojiObject);
        /* example emojiObject = { 
            "emoji": "❤️",
            "name": "red heart",
            "slug": "red_heart",
          }
        */
    }; 
 const CameraView=() =>{
    let position='back';
        return(
            <Modal
                isVisible={showCamera}
                style={style.modal}
                backdropOpacity={0.4}
                swipeDirection={['down']}
                onSwipeComplete={() => {
                    props.onClose()
                }}>
                <TouchableWithoutFeedback onPress={() => {
                    // props.onClose()
                }}>
                    <View style={style.screen}>
                        <View style={{
                            backgroundColor: 'black',
                            paddingTop: insets.top,
                            opacity: 0.9,
                        }}>
                            <TouchableOpacity onPress={()=>setShowCamera(false)}>
                            <Icon name="cross" category='Entypo' size={22} color={'#fff'} style={{ padding: '2%' }} />
                            </TouchableOpacity>
                        </View>
                        
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
                                            cameraPosition={'front'}
                                            enableZoomGesture
                                            photo={true}
                                            hasFlash


                                        />
                                    </>)}
                        </View>


                        <View style={style.closeButtonContainer}>
                            <TouchableOpacity onPress={selectImage}>
                                <FastImage
                                    source={require('../../Assets/imageGallery.png')}
                                    style={{ width:30, height: 30 }}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={takePhoto}>
                                <FastImage
                                    source={require('../../Assets/capture.png')}
                                    style={{ width: 60, height: 60 }}
                                    resizeMode={FastImage.resizeMode.contain} />

                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>{if(position=='back')
                        
                            position='front'
                            else
                        position='back'
                        }}>
                                <FastImage
                                    source={require('../../Assets/switch.png')}
                                    style={{ width: 30, height: 30 }}
                                    resizeMode={FastImage.resizeMode.contain} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
const Header=()=>{
    return(
        <>
            <View style={style.headerContainer}>
                <TouchableOpacity style={style.backIcon}  onPress={() => props.navigation.pop()}>
                <Icon category="Ionicons" name="ios-arrow-back" size={24}  color={Colors.bluePrimary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>props.navigation.navigate('MyProfile',{other:true})}>
                <View style={style.profileImageView}>
                    <FastImage
                        source={user.image}
                        resizeMode={FastImage.resizeMode.contain}
                        style={style.profileImage}
                    />
                    <View style={style.countContainer}>
                        {
                            user.online ?
                                <View style={style.online}>
                                </View>
                                :
                                <View style={style.offline}>

                                </View>
                        }
                    </View>
                </View>
                </TouchableOpacity>
                <View style={style.nameContainer}>
                    <Text style={style.nameText}>{user.name}</Text>
                    <Text style={style.onlineText}>{user.online?'Online':null}</Text>
                </View>
            </View>
        </>
    )
}

    const takePhoto = async () => {
        try {
            //Error Handle better
            if (camera.current == null) throw new Error('Camera Ref is Null');
            console.log('Photo taking ....');
            const photo = await camera.current.takePhoto();
            console.log(photo.path)
            const msg = {}

            msg._id = Math.random()

            msg.image ="file://data/user/0/com.chatapp/cache/mrousavy7615117872784136568.jpg",
             console.log(msg.image)
                msg.user = {
                    _id: 1,

                },

                setShowCamera(false);
            setTimeout(() => onSend(msg),500) 
            
            
           
        } catch (error) {
            console.log(error);
        }
    };
    const selectImage = () => {
        ImagePicker.openPicker({
            
            mediaType: "photo",
            cropping: true,
        }).then(response => {

            setImageUri(response.path)
            console.log(response.path)
            const msg = {}

            msg._id = Math.random() 
            msg.image = response.path,
                msg.user = {
                    _id:1,
                   
                },

                setShowCamera(false);
            onSend(msg)
        }).catch(error => {
            console.log(error.code, error.message);
            if (error.code == ImagePickerErrorCodes.permissionMissing) {
                showSettingsAlertForPermission('photos');
            }
        });
    }
    const SearchBar = () => {
        const onPress = () => {
            setSearchVisible(!searchVisible);

        }
        return (
            <>
                <TouchableOpacity onPress={onPress} style={style.search}>
                    <Icon name="search" category="Feather" size={24} color="#FF9727" />
                </TouchableOpacity>

            </>
        )
    }
    const RenderComposer = (props) => {

    }
    const renderInputToolbar = (props) => {
        return (


            <InputToolbar {...props} containerStyle={style.inputToolbar} />



        )
    }

    const renderBubble = props => {
        console.log('Props', props.position)
        return (
            <View>



                <Bubble
                    {...props}
                    wrapperStyle={{
                        left: {
                            backgroundColor:Colors.white,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius:20,
                            borderBottomLeftRadius: 0,
                            shadowColor: Colors.black,
                            paddingHorizontal:'1%',
                            paddingVertical:'1%',
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            marginVertical:'2%',
                        },
                        right: {
                            backgroundColor: Colors.bluePrimary,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius:20,
                            shadowColor: Colors.black,
                            paddingHorizontal: '1%',
                            paddingVertical: '1%',
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            marginVertical: '2%',
                        },
                    }}
                    textStyle={{
                        right: {
                            color:Colors.white,
                            fontFamily: 'Segoe UI',
                            fontSize:16,
                        },
                        left: {
                            color: Colors.black,
                            fontFamily: 'Segoe UI',
                            fontSize: 16,
                        },
                    }}
                />

              
            </View>

        );
    }
    const onLongPress = () => {
        setShowEdit(true);
    }
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <>
        {showCamera?
        <View style={style.modalScreen}>
             <CameraView />
                </View>
             :
            (
                <View style={style.giftedScreen}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,


                }}
                renderAvatar={() => null}
                placeholder={'Type Something'}
                messagesContainerStyle={{ paddingBottom: '5%' }}
                alwaysShowSend={true}

                renderBubble={renderBubble}
                showUserAvatar={false}
                multiline={true}
                renderChatEmpty={props => (
                    { ...props },
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{ scaleY: -1 }] }}>
                        <FastImage
                            source={require('../../Assets/speech-bubble.png')}
                            resizeMode={FastImage.resizeMode.contain}
                            style={style.emptyContainer} />
                        <Text style={style.emptyViewText}>Start Chat With {user.name}</Text>
                    </View>
                )}
                renderComposer={props => (

                    <View style={style.toolBarContainer}>
                        <TouchableOpacity style={style.smileIcon} onPress={() => setShow(true)}>
                            <FastImage source={require('../../Assets/smile.png')} resizeMode={FastImage.resizeMode.contain}
                                style={style.send} />
                        </TouchableOpacity >
                        <Composer {...props} />
                        <TouchableOpacity style={style.cameraIcon} onPress={() => setShowCamera(true)}>
                            <Icon name="camera" category="Entypo" size={24} color={Colors.gray} />
                        </TouchableOpacity>

                    </View>

                )}

                text={messages}
                renderSend={props => (
                    <Send
                        {...props}
                        containerStyle={style.sendButton}>
                        <FastImage
                            source={require('../../Assets/send.png')}
                            resizeMode={FastImage.resizeMode.contain}
                            style={style.send}
                        />
                    </Send>
                )}
                onInputTextChanged={(value) => setEmojiText(value)}
                text={emojiText}
            />
            
                    </View>
            
            
                 
        )}
            {show ?
                <EmojiSelector
                    category={Categories.emotion}
                    onEmojiSelected={emoji => {
                        console.log(emoji)
                        setShow(false);

                        setEmojiText(emojiText + emoji)


                    }}
                /> : null}
        
        </>
       
            
           
           
           
      
    )
}
export default Chat;
