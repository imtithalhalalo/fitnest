import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: '0%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
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
    image: { 
        width: '100%', 
        height: '50%', 
        marginTop: '7%' 
    },
    timer: {
        fontSize: 30,
        textAlign: 'center'
    },
    circle: {
        borderRadius: 400 /2,
        borderWidth: 2,
        borderColor: colors.black,
        width: '50%',
        alignSelf: 'center',
        padding: 10
    },

    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '30%'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
        alignItems: 'center'
    },
})

export default styles