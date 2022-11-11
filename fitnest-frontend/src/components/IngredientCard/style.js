import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ingredientCard: {
        margin: 10,
        backgroundColor: colors.lightPurple,
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ingredientText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.purple
    },
    removeIcon: {
        marginLeft: 5
    },
})

export default styles