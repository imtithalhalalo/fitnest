import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import { style } from '../../styles/style';
import { styles } from './style';
const ProgramCard = ({ id, title, image, num_weeks }) => {
    const navigation = useNavigation();
    return (
        <Card style={styles.cardBox}>
            {image ? (
                <Card.Cover style={styles.cardCover} source={{ uri: image }} resizeMode={'contain'}/>
            ) : (
                <></>
            )}
            <View style={styles.p4}>

                <Text style={styles.cardTitle}>{title}</Text>
                {num_weeks ? (
                    <Text style={styles.cardSubtitle}>{num_weeks * 7} days • {num_weeks} weeks</Text>
                ) : (
                    <></>
                )}


                <TouchableOpacity style={[style.secondaryBtn, { width: '40%', alignSelf: 'flex-end', marginTop: 10, marginBottom: 10 }]} onPress={() => { navigation.navigate('WorkoutSteps', { program_id: id }) }}>
                    <Text style={[style.secondaryText, { fontSize: 18, paddingLeft: '3%', paddingRight: '3%' }]}>View Steps</Text>
                </TouchableOpacity>
            </View>
        </Card>
    )
}

export default ProgramCard