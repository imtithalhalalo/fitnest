import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 15,
        padding: 10,
        width: '100%',
    },
    inputContainer: {
        marginVertical: 10
    },
    inputLabel: {
        margin: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
})

export default styles