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
    inputsBox: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    container2: {
        flex: 0.2,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
        alignItems: 'center',
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
    input:{
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius:15,
        padding:10,
        width: 330,
    },
    inputContainer: {
        marginVertical: 10
    },
    inputLabel:{
        margin:5,
        fontSize: 14,
        fontWeight:'bold'
    },
})

export { style }