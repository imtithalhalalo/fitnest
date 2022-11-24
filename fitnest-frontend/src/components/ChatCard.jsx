import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from './ExerciseCard/style';
import { MaterialIcons } from "react-native-vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { address } from '../variables/global';
const ChatCard = (props) => {
    return (
        <View style={[style.cardBox, styles.rowSpace]}>
            <View style={[styles.row]}>
                <Image
                    source={{ uri: `${address}/${props.image}` }}
                    style={style.profile} />
                <Text style={style.title}>{props.title}</Text>
            </View>
            <View style={[styles.row]}>
                <MaterialCommunityIcons
                    name="message-outline"
                    size={20} color={colors.purple}
                    style={{ paddingRight: '5%' }}
                    onPress={props.createChat} />
                <MaterialIcons
                    name={"phone"}
                    size={20}
                    color={colors.purple}
                    style={{ paddingRight: '5%' }}
                    onPress={props.call} />
                <FontAwesome
                    name={"whatsapp"}
                    size={20}
                    color={colors.purple}
                    onPress={props.sendWhatsappMessage} />
            </View>

        </View>

    )
}

export default ChatCard

const style = StyleSheet.create({
    cardBox: {
        marginTop: '5%',
        backgroundColor: colors.lighterPurple,
        borderRadius: 20,
        width: '98%',
        alignSelf: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: 20,
        paddingTop: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    profile: { width: 35, height: 35, borderRadius: 400 / 2 },
    title: { fontSize: 16, fontWeight: '400', paddingLeft: 20 }

})