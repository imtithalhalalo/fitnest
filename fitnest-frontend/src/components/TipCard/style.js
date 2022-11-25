import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tipCard: {
        margin: 10,
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.purple,
        borderWidth: 1
    },
    tipText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.black
    },
    removeIcon: {
        marginLeft: 5
    },
})

export default styles