import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from './ExerciseCard/style';
import { address } from '../variables/global';
const ChatCard = (props) => {
    return (
        <View style={[style.cardBox, styles.rowSpace]}>
            <View style={styles.row}>
                <Image
                    source={{ uri: `${address}/${props.image}` }}
                    style={{ width: 35, height: 35, borderRadius: 400 / 2 }} />
                <Text style={{ fontSize: 16, fontWeight: '400', paddingLeft: 20 }}>{props.title}</Text>
            </View>
            <View style={styles.row}>
                <MaterialCommunityIcons
                    name="message-outline"
                    size={20} color={colors.purple}
                    style={{ paddingRight: '5%' }}
                    onPress={props.createChat} />
            </View>

        </View>

    )
}

export default ChatCard

const style = StyleSheet.create({

})