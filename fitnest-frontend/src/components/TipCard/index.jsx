import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { FontAwesome } from "@expo/vector-icons";
import styles from './style';
const TipCard = (props) => {
    console.log(props.id)
    return (
        <>
            <View style={styles.tipCard}>
                <View style={styles.row}>
                    <Text style={styles.tipText}>{props.title}</Text>
                    <TouchableOpacity onPress={props.onPress}>
                        <FontAwesome name="times" size={20} color={colors.purple} style={styles.removeIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}

export default TipCard