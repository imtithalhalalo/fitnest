import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Card } from 'react-native-paper';
import colors from '../../constants/colors'
import { Ionicons } from "react-native-vector-icons";

const GridCard = (props) => {
    return (

        <Card style={[styles.gridItem, { backgroundColor: props.color }]}
             >
            <TouchableOpacity style={{ width: '100%' }} onPress={props.onPress}>
                <View style={styles.row}>
                    <Text style={styles.titleLabel}>{props.title}</Text>
                    <Image source={props.image} style={{ width: 28, height: 28 }} />
                </View>

                {
                    props.sleeping ? (
                        <View style={[styles.column, { paddingTop: '40%' }]}>
                            <Text style={styles.subtitle}>{props.hours}</Text>
                            <Text style={styles.subtitle}>Hours</Text>
                        </View>
                    ) : (
                        <View style={[styles.row, { paddingTop: '30%' }]}>
                            <Ionicons
                                name="stats-chart"
                                size={40}
                                color={colors.green} />
                            <Text style={styles.subtitle}>{props.water} ml</Text>
                        </View>
                    )
                }
                </TouchableOpacity>
        </Card>


    )
}

export default GridCard