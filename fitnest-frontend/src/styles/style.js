import { Dimensions, StyleSheet } from "react-native";
import colors from "../constants/colors";

const width_proportion = '100%';
const style = StyleSheet.create({
    //splash - sign in - sign up pages
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '5%'
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
        width: '97%',
        padding: '2%',
        backgroundColor: colors.green,
        borderRadius: 15,
        height: 50,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },
    loginText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: "white",
        fontSize: 20,
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
    titleContainer: {
        textAlign: 'right'
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 15,
        padding: 10,
        width: '100%',
    },
    inputContainer: {
        marginTop: '2%',
        marginBottom: '4%'
    },
    secondaryText: {
        fontSize: 18,
        color: colors.purple,
        textAlign: 'center'
    },
    inputLabel: {
        margin: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    bar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
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

    //main pages
    loading: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        backgroundColor: colors.white,
        flex: 1,
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '20%'
    },
    primaryBtn: {
        width: width_proportion,
        backgroundColor: colors.purple,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: '1%',
        marginTop: 30,
    },
    primaryTextBtn: {
        fontSize: 18,
        color: colors.white,
        textAlign: 'center'
    },
    gridItem: {
        margin: 5,
        minHeight: (Dimensions.get('window').width - 30) / 1.8,
        maxWidth: (Dimensions.get('window').width - 30) / 2,
    },
    grid: {
        // flex: 1,
        padding: 10,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width_proportion,
        paddingRight: '10%'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    chatBg: { 
        backgroundColor: colors.lightPurple, 
        flex: 1, 
        borderRadius: 15, 
        marginTop: '5%', 
        marginBottom: '10%'
      },
      subtitle: { 
        paddingTop: 10,
        fontSize: 18, 
        fontWeight: '500', 
    }
})

export { style }