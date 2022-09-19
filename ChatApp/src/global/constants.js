
export const KeyboardType = {
    default: 'default',
    email: 'email-address',
    numeric: 'numeric',
    phonepad: 'phone-pad',
    numberpad: 'number-pad',
    decimalpad: 'decimal-pad'
}


export const AppRegex = {
    email: "^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$",
    password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}",
    numberOnly: '^[0-9]+$',
    macAddress: '^(([A-F0-9]){2}\:){5}([A-F0-9]){2}$',
    macAddressLetter: '^[A-F0-9]$',
    alphabetOnly: '^[A-Za-z]+$',
    name: '^([a-zA-Z\-\_]+(\ |\')?)+$',
    validate(text, regex) {
        return new RegExp(regex).exec(text) != null;
    },
    isInvalidate(text, regex) {
        return new RegExp(regex).exec(text) == null;
    }
}
export const ImagePickerErrorCodes = {
    permissionMissing: 'E_PERMISSION_MISSING',
    cameraPermission: 'E_PICKER_NO_CAMERA_PERMISSION',
}