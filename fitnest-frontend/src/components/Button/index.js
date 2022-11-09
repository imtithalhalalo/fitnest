import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style'

const Button = (props) => {
    return (
        <>
            {
                props.secondary ? (
                    <TouchableOpacity style={style.secondaryBtn} onPress={props.onPress}>
                        <Text style={style.secondaryTextBtn}>{props.text}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={style.primaryBtn} onPress={props.onPress}>
                        <Text style={style.primaryTextBtn}>{props.text}</Text>
                    </TouchableOpacity>
                )
            }
        </>
    )
}

export default Button