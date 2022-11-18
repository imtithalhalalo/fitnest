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
        height: '57%',
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
    }
})
export default styles