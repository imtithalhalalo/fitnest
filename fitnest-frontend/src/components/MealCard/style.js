import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({

    gridItem: {
        margin: 5,
        marginBottom: '4%',
        width: '47%',
        minHeight: (Dimensions.get('window').width - 30) / 1.8,
        maxWidth: (Dimensions.get('window').width - 30) / 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: colors.white
    },
    grid: {
        padding: 10,
    },
    cardCover: {
        padding: '0%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    p4: {
        padding: '2%'
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.black,
        padding: 10
    },
    
})

export { styles }