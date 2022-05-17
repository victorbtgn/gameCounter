import React, { useRef } from 'react';
import { View, FlatList } from 'react-native';

import Player from '../Player';

export default function PlayerList({ playerList, removePlayer, findPlayer, status }) {

    return (
        <View>
            <FlatList
                data={playerList}
                renderItem={({ item }) => <Player
                                            id={item.id}
                                            title={item.name}
                                            level={item.level}
                                            removePlayer={removePlayer}
                                            findPlayer={findPlayer}
                                            status={status} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
};
