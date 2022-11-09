import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'

const Input = (props) => {
  return (
    <View style={[styles.inputContainer , props.container]} >
      <Text style={styles.inputLabel}>{props.label}</Text>
      <TextInput
        style={[styles.input]}
        onChangeText={props.handleChange} />
    </View>
  )
}

export default Input