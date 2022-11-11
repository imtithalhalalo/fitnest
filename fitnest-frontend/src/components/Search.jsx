import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import colors from '../constants/colors'
const Search = (props) => {
    
  return (
    <View style={styles.searchBarContainer}>
      <EvilIcons style={{marginLeft: 10}} name="search" size={24} color={colors.purple} />
      <TextInput value={props.value} placeholderTextColor={colors.purple} placeholder="Search..."
        onChangeText={props.onChangeText} onClear = {props.onClear}
      />
    </View>
  )
}

export default Search
const width_proportion = '100%';
const styles = StyleSheet.create({
    
    searchBarContainer: {
        borderColor: colors.white,
        backgroundColor: colors.lightPurple,
        borderWidth: 0,
        borderRadius: 20,
        color: colors.purple,
        flexDirection: 'row',
        alignItems: 'center',
        width: width_proportion,
        height: 45,
        alignSelf: 'center',
        marginTop: 18
    }
})