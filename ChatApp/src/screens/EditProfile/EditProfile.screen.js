import React, { Component, createRef, useState, useRef, useEffect } from 'react';
import { View, Text, Image, ImageBackground, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import styles from './EditProfile.styles';
import { showSettingsAlertForPermission } from "../../global/common";
import { ImagePickerErrorCodes } from '../../global/common';
import Button from '../../components/Button/Button.component';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../components/TextField/TextField.component';
import ImagePicker from 'react-native-image-crop-picker';
import Colors from '../../utills/Colors';
import Container from '../../components/Container/Container.component';
import Icon from '../../components/Icon/Icon.component';
import { Divider } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from "../../components/ImageBottomSheet/BottomSheet.component";
import SuccessModal from "../../components/SuccessModal/SuccessModal.component";

export default function EditProfile(props) {
    const dispatch = useDispatch()
    const nameRef = createRef();
    const ageRef = createRef();
    const bioRef = useRef();
    const refRBSheet = useRef();
    const refPicker = useRef();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Select');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [uri, setUri] = useState();
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(false);
    const [isFocused, setFocused] = useState(false);
    const [visible, setVisible] = useState(false);
    const [ageFocused, setAgeFocused] = useState(false);
    const [bioFocused, setBioFocused] = useState(false);
    const [otherVisible,setOtherVisible]=useState(false);
    const data = ['Hide Profile', 'Public Profile'];
    const about=['Busy right now','Urgent calls only','Text only','Other']
    useEffect(() => {
        props.navigation.setOptions({

            headerLeft: () => (
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => props.navigation.pop()}>
                    <Icon category="Ionicons" name="ios-arrow-back" size={24} style={{ padding: '2%', marginLeft: '2%' }} color={Colors.bluePrimary} />
                    <Text style={styles.header}>{'Edit Profile'}</Text>
                </TouchableOpacity>
            ),

        });
    }, [])

    const SelectGender = () => {
        return (
            <>
                <Text style={styles.inputLabel}>Gender</Text>
                <TouchableOpacity style={styles.genderContainer} onPress={() => refPicker.current.open()}>
                    <Text style={styles.dropdownText}>{gender}</Text>
                    <Icon name="chevron-down" category="Ionicons" size={15} color={Colors.gray} />
                </TouchableOpacity>
            </>
        )
    }
    const SelectAbout = () => {
        return (
            <>
                <Text style={styles.inputLabel}>About</Text>
                <TouchableOpacity style={styles.genderContainer} onPress={() => bioRef.current.open()}>
                    <Text style={styles.dropdownText}>{bio}</Text>
                    <Icon name="chevron-down" category="Ionicons" size={15} color={Colors.gray} />
                </TouchableOpacity>
            </>
        )
    }
    const AboutPicker=()=>{
        return(
            <RBSheet
                ref={bioRef}
                closeOnDragDown={true}
                closeOnPressMask={false}
               // height={200}

                customStyles={{
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                        borderRadius: 20,

                    }
                }}

            >
                <ScrollView style={styles.scrollView}>
                <View style={styles.bottomSheetTitleContainer}>
                    <Text style={styles.bottomSheetTitle}>Select</Text>
                    <TouchableOpacity style={{ padding: '2%' }} onPress={() => bioRef.current.close()}>
                        <Icon name="cross" category='Entypo' size={22} color={Colors.gray} />
                    </TouchableOpacity>
                </View>
               {about.map((item,key)=>{
                return(
                   <>
 <TouchableOpacity style={styles.renderContainer} onPress={() => {
                    
                    if(item=='Other'){
                        setOtherVisible(true);
                        setBio('')
                    }
                    else
                        setBio(item);
                }}>
                    <Text style={styles.bottomSheetText}>{item}</Text>
                </TouchableOpacity>
                <Divider style={styles.divider} />
                    </>
                )
               })
               
               
            }
            </ScrollView>
            </RBSheet> 
        )
    }
    const PickerSheet = () => {
        return (
            <RBSheet
                ref={refPicker}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={200}

                customStyles={{
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                        borderRadius: 20,

                    }
                }}

            >
                <View style={styles.bottomSheetTitleContainer}>
                    <Text style={styles.bottomSheetTitle}>Select</Text>
                    <TouchableOpacity style={{ padding: '2%' }} onPress={() => refPicker.current.close()}>
                        <Icon name="cross" category='Entypo' size={22} color={Colors.gray} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.renderContainer} onPress={() => {
                    setGender('Female');
                }}>
                    <Text style={styles.bottomSheetText}>Female</Text>
                </TouchableOpacity>
                <Divider style={styles.divider} />
                <TouchableOpacity style={styles.renderContainer} onPress={() => setGender('Male')}>
                    <Text style={styles.bottomSheetText}>Male</Text>
                </TouchableOpacity>

            </RBSheet>
        )
    }
    const EditButton = () => {

        const onPress = () => {

            setVisible(true);
            dispatch(login({ userName: 'John Doe' }))
        }

        return (
            <Button title={'Edit'} style={styles.editButton} onPress={onPress} />
        )
    }
    const ImageBottomSheet = () => {
        const useCamera = () => {
            ImagePicker.openCamera({
                path: true,
                multiple: false,
                width: 100,
                height: 100,
                cropping: false,
            }).then(image => {
                setUri(image.path)
            }).catch(error => {
                console.log(error.code, error.message);
                if (error.code == ImagePickerErrorCodes.cameraPermission) {
                    showSettingsAlertForPermission('camera');
                }
            });

        }
        const selectImage = () => {
            ImagePicker.openPicker({
                width: 100,
                height: 100,
                mediaType: "photo",
                cropping: false,
            }).then(response => {

                setUri(response.path)
                console.log(response.path)

            }).catch(error => {
                console.log(error.code, error.message);
                if (error.code == ImagePickerErrorCodes.cameraPermission) {
                    showSettingsAlertForPermission('camera');
                }
            });


        }
        return (
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={200}

                customStyles={{

                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    container: {
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 20,
                        borderColor: Colors.gray,
                        borderWidth: 0.3,
                    }
                }}
            >
                <BottomSheet
                    onPressCamera={() => useCamera()}
                    onPressGallery={() => selectImage()}
                    onClose={() => refRBSheet.current.close()} />


            </RBSheet>
        )
    }
    const CheckBoxView = () => {

        return (
            <View style={styles.hidePublicContainer}>
                {data.map((item, key) => {
                    return (<View style={styles.hideContainer}>
                        {
                            checked == key ?
                                <TouchableOpacity style={styles.checked} onPress={() => { setChecked(!checked); setValue('Hide') }}>
                                    <Icon name="check" category="FontAwesome5" size={15} color={Colors.white} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.notChecked} onPress={() => setChecked(!checked)}></TouchableOpacity>
                        }
                        <Text style={styles.checkboxText}>
                            {item}
                        </Text>
                    </View>)
                })}

            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <Container avoidKeyboard={true}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <View style={styles.profileImageView}>
                        {
                            uri ?
                                <Image
                                    style={{ width: '100%', height: '100%' }}
                                    key={1}
                                    resizeMode='cover'

                                    source={{ uri: uri }}

                                />

                                :
                                <Image
                                    style={{ width: '100%', height: '100%' }}
                                    key={1}
                                    resizeMode='cover'

                                    source={require('../../Assets/profilePicture.jpeg')}

                                />}

                    </View>
                    <TouchableOpacity style={styles.cameraIcon} onPress={() => refRBSheet.current.open()}>
                        <Icon name="camera" category='Entypo' size={22} color={Colors.bluePrimary} />
                    </TouchableOpacity>

                </TouchableOpacity>
                <View style={styles.componentContainer}>
                    <Text style={styles.inputLabel}>User Name</Text>
                    <TextField
                        style={isFocused && styles.focusColor}
                        value={name}
                        ref={nameRef}
                        onTextChange={setName}
                        placeholder={"Enter Name"}
                        placeholderTextColor={Colors.gray}
                        returnKeyType="next"
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onSubmitEditing={() => {
                            //PasswordRef.current?.focus();
                        }}
                    />
                    <SelectGender />
                    <Text style={styles.inputLabel} >Age</Text>
                    <TextField
                        style={ageFocused && styles.focusColor}
                        value={age}
                        onTextChange={setAge}
                        placeholder={"Enter Age"}
                        placeholderTextColor={Colors.gray}
                        returnKeyType="next"
                        onFocus={() => setAgeFocused(true)}
                        onBlur={() => setAgeFocused(false)}
                        keyboardType={'number-pad'}
                        onSubmitEditing={() => {
                            //PasswordRef.current?.focus();
                        }}
                    />
                    <Text style={styles.inputLabel}>Phone Number</Text>
                    <TextField
                       
                        value={age}
                        isEditable={false}
                        onTextChange={setAge}
                        placeholder={"00000000000000"}
                        placeholderTextColor={Colors.gray}
                        returnKeyType="next"
                        
                        keyboardType={'number-pad'}
                        onSubmitEditing={() => {
                            //PasswordRef.current?.focus();
                        }}
                    />
                   
                   
                    {otherVisible?
                    <>
                        <View style={styles.bioContainer}>
                    <Text style={styles.inputLabel}>About</Text>
                    <Text style={styles.count}>{count}{'/50'}</Text>
                </View>
                    <TextField
                      style={bioFocused && styles.focusColor}
                        value={bio}
                        onFocus={() => setBioFocused(true)}
                        onBlur={() => {setBioFocused(false);setOtherVisible(false)}}
                        onTextChange={(value) => {
                            setBio(value);
                            setCount(value.length)
                        }}
                        placeholder={"About"}
                        placeholderTextColor={Colors.gray}
                        returnKeyType="done"
                       
                        
                        onSubmitEditing={() => {
                            Keyboard.dismiss();
                        }}
                        maxLength={50}
                    />
                        </>
                    :<SelectAbout />}
                    <CheckBoxView />
                    <EditButton />

                </View>

                <ImageBottomSheet />
                <PickerSheet />
                <AboutPicker/>
                <SuccessModal
                    description={'Your account has been created successfully'}
                    isVisible={visible}
                    onPress={() => setVisible(false)} />

            </Container>
        </ScrollView>
    )
}