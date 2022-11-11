import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";


const styles = StyleSheet.create({
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
    },
    title: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '700',
        textAlign: 'center'
    },
    value: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.purple,
        marginTop: '5%',
        textAlign: 'center'
    },

})

export { styles }