import { View, Text } from 'react-native'
import React from 'react'
import { style } from './style'
import { MaterialIcons } from "react-native-vector-icons";
import colors from '../../constants/colors';

const ProfileBox = (props) => {
    return (
        <View>
            <View style={style.row}>
                <MaterialIcons
                    name={props.icon}
                    size={20}
                    color={colors.purple} />
                <Text style={style.title}>{props.title}</Text>
            </View>
            <Text style={style.desc}>{props.description}</Text>
        </View>
    )
}

export default ProfileBox