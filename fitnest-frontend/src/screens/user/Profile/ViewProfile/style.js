import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    desc: {
        fontSize: 16,
        color: colors.darkGrey,
        paddingTop: '3%',
        paddingBottom: '3%',
        fontWeight: '400'
    },
    text: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '500',
        paddingLeft: '4%'
    },
    
})

export default styles