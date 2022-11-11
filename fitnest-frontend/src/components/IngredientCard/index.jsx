import { Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { FontAwesome } from "@expo/vector-icons";
import styles from './style';
const IngredientCard = (props) => {

    return (
        <>

            <View style={styles.ingredientCard}>
                <View style={styles.row}>
                    <Text style={styles.ingredientText}>{props.title}</Text>
                    <FontAwesome name="times" size={20} color={colors.purple} style={styles.removeIcon} />
                </View>
            </View>


        </>

    )
}

export default IngredientCard