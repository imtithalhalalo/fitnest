import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: { 
        width: 35,
        height: 35, 
        borderRadius: 400 / 2 
    },
    text: { 
        fontSize: 22, 
        fontWeight: '500', 
    }
})

export default styles