import React, { useState } from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
} from 'react-native';

import styles from '../../assets/styles';

export default function ModalView({ isOpen, title, children }) {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <>
        <Pressable
            style={styles.openBtn}
            onPress={() => setModalVisible(!modalVisible)
        }>
            <Text style={styles.btnTitle}>{title}</Text>
        </Pressable>
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                    {children}
            </Modal>
        </View>
        </>
    )
};







// import React, { useState } from 'react';
// import {
//     Text,
//     View,
//     Modal,
//     Pressable,
//     TextInput,
// } from 'react-native';

// import styles from '../../assets/styles';

// export default function ModalView({ getPlayers }) {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [name, setName] = useState('');

//     function onChange(evt) {
//         setName(evt)
//     }

//     function onAddPlayer() {
//         if(!name) return setModalVisible(!modalVisible);
//         getPlayers(name);
//         setName('');
//         setModalVisible(!modalVisible);
//         return;
//     }

//     return(
//         <>
//         <Pressable
//             style={styles.openBtn}
//             onPress={() => setModalVisible(!modalVisible)
//         }>
//             <Text style={styles.btnTitle}>add player</Text>
//         </Pressable>
//         <View>
//             <Modal
//                 animationType='slide'
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => setModalVisible(!modalVisible)}
//             >
//                 <View style={styles.centeredView}>
//                     {/* <View style={styles.overlay}> */}
//                         <View style={styles.modalView}>
//                             <TextInput
//                                 style={styles.input}
//                                 onChangeText={onChange}
//                                 placeholder='enter name'
//                             />
//                             <Pressable onPress={onAddPlayer}>
//                                 <Text style={styles.btnTitle}>add</Text>
//                             </Pressable>
//                         </View>
//                     {/* </View> */}
//                 </View>
//             </Modal>
//         </View>
//         </>
//     )
// };




