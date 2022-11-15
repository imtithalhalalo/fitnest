import { View, Text } from 'react-native'
import { Card } from 'react-native-paper';
import React from 'react'
import { styles } from './style'
import { useNavigation } from '@react-navigation/core';

const MealCard = (props) => {
    const navigation = useNavigation();

    return (
        <Card style={styles.gridItem} onPress={() => {navigation.navigate('MealDetails', {title: props.title, image: props.image, id: props.id})}}>
            {props.image ? (
                <Card.Cover style={styles.cardCover} source={{ uri: props.image }} resizeMode={'contain'} />
            ) : (
                <></>
            )}
            <View style={styles.p4}>
                <Text style={styles.cardTitle}>{props.title}</Text>
            </View>
        </Card>
    )
}

export default MealCard