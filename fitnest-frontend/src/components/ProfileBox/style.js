import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const style = StyleSheet.create({
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
        color: colors.purple,
        paddingTop: '3%',
        paddingBottom: '3%',
        fontWeight: '400',
        marginLeft: 30
    },
    title: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '500',
        paddingLeft: '4%'
    }
})

export { style }