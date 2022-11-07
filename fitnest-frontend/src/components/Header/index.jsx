import { StyleSheet, Text,Image, View, TouchableOpacity, } from 'react-native'
import React from 'react'
import { style } from '../../styles/style'
import { useNavigation } from '@react-navigation/native'
import colors from '../../constants/colors';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet';
import styles from './style';

const Header = (props) => {

    const navigation = useNavigation();

    return (
        <View style={style.bar}>
            {props.back ? (
                <TouchableWithoutFeedback onPress={() => {navigation.pop()}}>
                    <EvilIcons name="arrow-left" size={50} color={colors.purple} />
                </TouchableWithoutFeedback>
                
            ):
            <></>
            }
            <Text style={styles.text}>{props.text}</Text>

            {props.image ?  (
                <Image source={{ uri: props.image }} style={styles.profile} />
            ): <></>          
            }
                

        </View>
    )
}

export default Header