import React from 'react';
import {
    Text,
    Pressable,
} from 'react-native';

import styles from '../../assets/styles';

export default function Btn({ onPress, btnTitle }) {
    return(
        <Pressable onPress={onPress}>
            <Text style={[styles.formBtn, styles.btnFont]}>{btnTitle}</Text>
        </Pressable>
    )
}

