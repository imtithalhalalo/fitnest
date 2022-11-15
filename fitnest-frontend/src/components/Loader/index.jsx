import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors';
import styles from './style';

const Loader = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator
                size={40}
                color={colors.purple} />
        </View>
    )
}

export default Loader