import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors'

const styles = StyleSheet.create({
    bar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    dropdown: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 15,
        padding: 10,
        width: 330,
    },
    placeholderStyle: {
        fontSize: 18,
    },
    selectedTextStyle: {
        fontSize: 18,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 20,
    },
})

export default styles