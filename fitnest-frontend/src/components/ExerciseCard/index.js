import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import { address } from '../../variables/global';
const ExerciseCard = (props) => {
    const navigation = useNavigation();
    const image = props.image
    return (

        <Card style={styles.cardBox}>
            <View style={styles.p4}>
                <View style={[styles.box, { width: '100%' }]}>
                    <View style={styles.titlesContainer}>
                        <View style={{ width: '100%' }}>
                            <Text style={styles.cardTitle}>{props.title}</Text>
                        </View>

                        {props.time ? (
                            <Text style={styles.cardSubtitle}>{props.time} min</Text>
                        ) : (
                            <></>
                        )}

                    </View>
                    <View style={{ width: '100%' }}>
                        {props.image ? (
                            <Card.Cover style={styles.cardCover} source={{ uri: `${address}/${props.image}` }} />
                        ) : (
                            <></>
                        )}
                    </View>

                </View>

                <TouchableOpacity style={[styles.primaryBtn, { width: '50%', alignSelf: 'flex-end', marginTop: 10, marginBottom: 10 }]} onPress={() => { navigation.navigate('StepDetails', { id: props.id, title: props.title, image: image, time: props.time, description: props.description }) }}>
                    <Text style={[styles.primaryTextBtn, { fontSize: 18, paddingLeft: '3%', paddingRight: '3%' }]}>Start</Text>
                </TouchableOpacity>
                
            </View>
        </Card>
    )
}

export default ExerciseCard