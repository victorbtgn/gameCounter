/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import type {Node} from 'react';
 import { View, Alert } from 'react-native';
 
 import Header from './components/Header';
 import PlayerList from './components/PlayerList';
 import Form from './components/Form';
 import Footer from './components/Footer';
 import Counter from './components/Counter/Counter';

import styles from './assets/styles';

 const App: () => Node = () => {
  const [playerList, setPlayerList] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  function getPlayerList(name) {
    if(playerList.length === 0) {
      setPlayerList([{ id: 1, name, level: 1 }])
    } else {
      setPlayerList([...playerList, { id: playerList.pop().id + 1, name, level: 1 }]);
    }
  }

  function removePlayer(val) {
   setPlayerList(playerList.filter(item => item.id != val))
  }

  function findPlayer(val) {
   if(!val) return;
    setActiveUser(playerList.find(item => item.id === val));
  }

  function changePlayer(val) {
    setPlayerList(playerList.map(item => {
      if(item.id != val.id) return item;
      const newItem = { id: item.id,
                        name: item.name,
                        level: val.level === '+' ? item.level+1 : item.level === 1 ?
                                                                  item.level : item.level-1,
                      };
      setActiveUser(newItem);
      return newItem;
    }));
  }

  function startGame() {
   if(playerList.length === 0) return Alert.alert('no gamers!');
   if(playerList.length <= 2) return Alert.alert('few players!');
   setActiveUser(playerList[0]);
   setIsStart(true);
  }

  function newGame() {
    setPlayerList([]);
    setIsStart(false);
    setActiveUser(null);
  }

   return (
     <>
        <Header />
        <View style={styles.body}>
        {isStart ? 
              <View style={styles.gameContainer}>
                <Counter activeUser={activeUser} changePlayer={changePlayer} />
                <PlayerList playerList={playerList} status={isStart} findPlayer={findPlayer} />
              </View>
              :
              <>
                <PlayerList playerList={playerList} removePlayer={removePlayer} />
                <Form getPlayers={getPlayerList} />
              </>
        }
        </View>
        <Footer status={isStart} startGame={startGame} newGame={newGame} />
     </>     
   );
 };
 
 export default App;


