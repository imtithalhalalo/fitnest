import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { style } from '../styles/style'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../constants/colors'
const Search = (props) => {
    
  return (
    <View style={styles.searchBarContainer}>
      <EvilIcons style={{marginLeft: 10}} name="search" size={24} color={colors.purple} />
      <TextInput value={props.value} placeholderTextColor={colors.purple} placeholder="Search..."/>
    </View>
  )
}

export default Search
const width_proportion = '100%';
const styles = StyleSheet.create({

})