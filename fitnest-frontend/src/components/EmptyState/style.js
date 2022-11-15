import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    icon: {
        marginBottom: 20,
        color: colors.lightPurple,
    },
    title: {
        width: '100%',
        paddingHorizontal: 45,
        fontSize: 22,
        marginBottom: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.black,
    },
    description: {
        width: '100%',
        paddingHorizontal: 45,
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
        color: colors.lightGrey,
        marginBottom: '5%'
    },
    primaryBtn: {
        width: '50%',
        padding: '2%',
        backgroundColor: colors.purple,
        borderRadius: 15,
    },
    primaryTextBtn: {
        fontSize: 18,
        color: colors.white,
        textAlign: 'center'
    }, 
    image: {
        width: 150,
        height: 150,
        marginBottom: '10%',
        marginTop: '30%'
    },
    imageContainer: {
        width: '90%',
        alignItems: 'center',
        display: 'flex',
        height: '100%'
    }

})

export { style }