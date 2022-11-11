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
    ingredientGreenCard: {
        margin: 10,
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.green
    },
    ingredientGreenText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.black
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