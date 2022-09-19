import { Alert } from "react-native";
import { openSettings } from "react-native-permissions";
export const PermissionType = {
    camera: 'camera',
    photos: 'photos'
}

export const showSettingsAlertForPermission = (permission) => {
    let message = '';
    switch (permission) {
        case PermissionType.camera:
            message = Platform.OS === 'ios' ?
                'Please enable Camera from Settings' : 'Please enable Camera permission.';
            break;
        case PermissionType.photos:
            message = Platform.OS === 'ios' ?
                'Please enable Photos from Settings' : 'Please enable Files permission.';
            break;
    }
    Alert.alert('Permission Denied', message, [
        {
            text: 'Cancel',
            style: 'cancel'
        },
        {
            text: 'Setting',
            onPress: () => openSettings().catch(err => console.log(err))
        },
    ])
}