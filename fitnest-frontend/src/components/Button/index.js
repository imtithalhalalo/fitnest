import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style'

const Button = (props) => {
    return (
        <TouchableOpacity style={style.primaryBtn} onPress={props.onPress}>
            <Text style={style.primaryTextBtn}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button