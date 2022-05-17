import React, { useState } from 'react';
import {
    Text,
    View,
    Pressable,
    TextInput,
} from 'react-native';
import Btn from '../Btn';

import styles from '../../assets/styles';

export default function Form({ getPlayers }) {
    const [name, setName] = useState('');

    function onChange(val) {
        setName(val)
    }

    function onAdd() {
        if(!name) return;
        getPlayers(name);
        setName('');
        return;
    }

    return(
        <View style={styles.section}>
            <TextInput
                style={styles.formInput}
                onChangeText={onChange}
                placeholder='Enter name'
                value={name}
                autoCapitalize='words'
                onSubmitEditing={onAdd}
            />
            <Btn onPress={onAdd} btnTitle='&#43;' />
        </View>
    )
};

