import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style';
import Header from '../../../../components/Header';
import { style } from '../../../../styles/style';
import Button from '../../../../components/Button';

const MealDetails = () => {


  return (
    <SafeAreaView style={style.mainContainer}>

      <Header text={"Meal"} back="back"/>
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.title}>Calories</Text>
            <Text style={styles.value}>33234  kcal</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Fats</Text>
            <Text style={styles.value}>44 g</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Protein</Text>
            <Text style={styles.value}>5 g</Text>
          </View>
        </View>
        <View style={styles.dash}></View>

        <View style={styles.ingredientsContainer}>
          
        </View>

        <Button text={"Save"} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default MealDetails
