import { Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'

const CustomModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisibility}
            onRequestClose={props.onRequestClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {
                        props.error ? (
                            <Text style={styles.modalText}>{props.error}</Text>
                        ) : <></>
                    }
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={props.onPress}
                    >
                        <Text style={styles.textStyle}>{props.text}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal