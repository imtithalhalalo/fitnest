import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { style } from './style'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/core';
const EmptyState = (props) => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <Icon
                name={props.icon}
                color={colors.lightPurple}
                size={130}
                style={style.icon}
            />
            <Text style={style.title}>{props.title}</Text>
            <Text style={style.description}>{props.description}</Text>
            <TouchableOpacity style={style.primaryBtn} onPress={() => { navigation.navigate('ProfileStack') }}>
                <Text style={style.primaryTextBtn}>Go to my profile</Text>
            </TouchableOpacity>
        </View>

    )
}

export default EmptyState