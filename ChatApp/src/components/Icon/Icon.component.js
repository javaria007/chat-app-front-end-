import React from 'react';
import styles from './Icon.styles';
import { AllVectorIcons } from './utils';

const Icon = ({
    color,
    name,
    size,
    style,
    category
}) => {

    const Icon = AllVectorIcons[category];
    return (
        <Icon
            color={color}
            name={name}
            size={size}
            style={[styles.icon, style]} />
    );
};
export default Icon;