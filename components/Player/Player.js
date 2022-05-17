import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Btn from '../Btn';

import styles from '../../assets/styles';

export default function Player({ id, title, level, removePlayer, findPlayer, status }) {

    function onRemove() {
        removePlayer(id)
    };

    function onChange() {
        findPlayer(id)
    }

    return (
        <>
        {status ?
            <Pressable style={styles.section} onPress={onChange}>
                <Text style={styles.title}>{title}</Text>
                <Text>{level}</Text>
            </Pressable>
            :
            <View style={styles.section}>
                <Text style={styles.title}>{title}</Text>
                <Btn onPress={onRemove} btnTitle='&#215;' />
            </View>
        }</>
    )
}

