import { StyleSheet } from 'react-native'
import colors from '../../../../constants/colors'

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleLabel: {
        fontSize: 20,
        color: colors.purple,
        fontWeight: '500'
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightGrey
    },
    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: '5%',
        height: '60%',
        justifyContent: 'center',
        width: '90%',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'column',
        paddingTop: '20%',
    }, 
    dropdown: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: '20%',
        padding: 5
    },
    placeholderStyle: {
        margin: 5,
        fontSize: 14,
        fontWeight: '500'
    },
    selectedTextStyle: {
        margin: 5,
        fontSize: 14,
        fontWeight: '500'
    },
    inputSearchStyle: {
        margin: 5,
        fontSize: 14,
        fontWeight: '500'
    }
})
export default styles