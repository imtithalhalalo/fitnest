import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const style = StyleSheet.create({
    primaryBtn: {
        width: '97%',
        padding: '2%',
        backgroundColor: colors.purple,
        borderRadius: 15,
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },
    primaryTextBtn: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center'
    },
    secondaryBtn: {
        width: '97%',
        padding: '2%',
        backgroundColor: 'transparent',
        borderRadius: 10,
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        borderWidth: 2,
        borderColor: colors.purple
    },
    secondaryTextBtn: {
        fontSize: 18,
        color: colors.purple,
        textAlign: 'center'
    },
})

export { style }