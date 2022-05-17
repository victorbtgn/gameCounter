import React from "react";
import { View, Text } from 'react-native';

import Btn from "../Btn";

import styles from "../../assets/styles";

export default function Footer({ status, startGame, newGame }) {
    return (
        <View style={styles.footer}>
            {status ?
                <Btn onPress={newGame} btnTitle='new game' />
                    : 
                <Btn onPress={startGame} btnTitle='start game' />
            }
        </View>
    )
}
