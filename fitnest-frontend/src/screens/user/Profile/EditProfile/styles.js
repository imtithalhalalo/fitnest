import { Dimensions, StyleSheet } from "react-native"
import colors from "../../../../constants/colors"

const styles = StyleSheet.create({
    container: {
        padding: '10%',
        paddingTop: '20%',
        backgroundColor: colors.lighterPurple,
        flex: 1,
    },
    profileImg: {
        width: 120,
        height: 120,
        borderRadius: 400 / 2,
    },
    imgContainer: {
        alignSelf: "center",
        marginBottom: 20,
        alignItems: 'center'
    },
    choose: {
        textAlign: "center",
        paddingTop: 10,
        color: colors.purple,
        fontWeight: "700"
    },
    delete: {
        textAlign: "center",
        paddingTop: 10,
        color: colors.green,
        fontWeight: "700",
        paddingLeft: 10
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
        height: '70%',
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
    bar: {
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        justifyContent: 'center'
    },
})

export default styles