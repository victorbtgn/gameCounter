import React from 'react';
import { View, Text, Button } from 'react-native';

import Btn from '../Btn';

import styles from '../../assets/styles';

export default function Counter({ activeUser, changePlayer }) {
    function increment() {
        changePlayer({ id: activeUser.id, level: '+' })
    }
    function decrement() {
        changePlayer({ id: activeUser.id, level: '-' })
    }
    
    return(
        <View style={styles.counter}>
            <>
                <Text style={styles.title}>{activeUser.name}</Text>
                <Text style={styles.title}>{activeUser.level}</Text>
                <View style={styles.counterBtnSection}>
                    <Btn onPress={increment} btnTitle='&#43;' />
                    <Btn onPress={decrement} btnTitle='&#8722;' />
                </View>
            </>
        </View>
    )
}
