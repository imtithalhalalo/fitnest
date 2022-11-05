import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const width_proportion = '100%';
const style = StyleSheet.create({
    //splash - sign in - sign up pages
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300
    },
    login: {
        width: width_proportion,
        backgroundColor: colors.green,
        borderRadius: 15,
        height: 50,
        justifyContent: 'center',
        marginBottom: 22
    },
    loginText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: "white",
        fontSize: 22,
    },
    signup: {
        width: width_proportion,
        backgroundColor: colors.purple,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 22,
    },
    signupText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: colors.white,
        fontSize: 22,
    },
})

export { style }