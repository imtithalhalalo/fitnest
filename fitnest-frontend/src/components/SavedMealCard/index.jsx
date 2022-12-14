import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { styles } from './style';
import { address } from '../../variables/global';
const SavedMealCard = (props) => {
    return (
        <Card style={styles.cardBox}>
            <View style={styles.p4}>
                <View style={styles.box}>
                    {props.image ? (
                        <Card.Cover style={styles.cardCover} source={{ uri: `${address}/${props.image}` }} />
                    ) : (
                        <></>
                    )}
                    <Text style={styles.cardTitle}>{props.title}</Text>
                </View>
            </View>
        </Card>
    )
}

export default SavedMealCard