import { StyleSheet, Text, Image, View, TouchableOpacity, } from 'react-native'
import React from 'react'
import { style } from '../../styles/style'
import { useNavigation } from '@react-navigation/native'
import colors from '../../constants/colors';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet';
import styles from './style';
import { address } from '../../variables/global';
const Header = (props) => {

    const navigation = useNavigation();

    return (
        <View style={style.row}>
            <View style={style.bar}>
                {props.back ? (
                    <TouchableWithoutFeedback onPress={() => { navigation.pop() }}>
                        <EvilIcons name="arrow-left" size={50} color={colors.purple} />
                    </TouchableWithoutFeedback>

                ) :
                    <></>
                }
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View>
                {props.image ? (
                    <Image source={{ uri: `${address}/${props.image}` }} style={styles.profile} />
                ) : <></>
                }


            </View>
        </View>

    )
}

export default Header