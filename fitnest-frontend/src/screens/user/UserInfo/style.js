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
    inputSmall: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 15,
        padding: 10,
        width: '100%',
    },
    inputContainer: {
        marginVertical: 1,
        width: '80%',
        marginBottom: '5%'
    },
    map: {
        width: '100%',
        height: 500,
        margin: 20,
        alignSelf: 'center',
    },
    nextBtnTextStyle: {
        color: colors.white,
        fontSize: 18
    },
    nextBtnStyle: {
        backgroundColor: colors.purple,
        borderRadius: 15,
        width: '100%',
        paddingLeft: 40,
        paddingRight: 40
    },
    question: {
        textAlign: 'center',
        fontSize: 20
    },
})

export default styles