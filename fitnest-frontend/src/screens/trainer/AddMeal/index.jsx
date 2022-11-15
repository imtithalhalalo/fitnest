import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { style } from '../../../styles/style';
import colors from '../../../constants/colors';
import { FontAwesome } from "@expo/vector-icons";
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import styles from './style';

const AddMeal = () => {

  const categories = [
    { label: 'Breakfast', category: 'Breakfast' },
    { label: 'Lunch', category: 'Lunch' },
    { label: 'Dinner', category: 'Dinner' },
  ];

  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [calories, setCalories] = useState(0);
  const [fats, setFats] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [category, setCategory] = useState('');
  return (
    <>
      <SafeAreaView style={style.mainContainer}>
        <ScrollView>

          <Header text={"Add Meal"} back="back" />
          <View style={style.inputContainer}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={categories}
              placeholder="Breakfast"
              labelField="label"
              valueField="value"
              value={category}
              onChange={item => {
                setCategory(item.category);
              }}
            />
          </View>

          <Input label={"Meal Title"} handleChange={title => setTitle(title)} />

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

            <Input container={styles.inputContainer} label={"Calories"} handleChange={calories => setCalories(calories)} keyboardType='number-pad' />
            <Input container={styles.inputContainer} label={"Fats"} handleChange={fats => setFats(fats)} keyboardType='number-pad' />
            <Input container={styles.inputContainer} label={"Protein"} handleChange={protein => setProteins(protein)} keyboardType='number-pad' />

          </View>
          <View style={styles.btnBox}>
            <FontAwesome name="image" size={20} color={colors.black} style={{ paddingRight: 20 }} />
            <Text style={styles.uploadImgTxt} onPress={uploadImage}>Upload Image</Text>
          </View>

          <Input label={"Meal Ingredients"} handleChange={ingredient => setIngredient(ingredient)}/>
          <Button text={"Add Ingredient"} onPress={handleAddIngredient} secondary={true}/>
          <Button text={"Done"} onPress={handleAddMeal} />
        </ScrollView>

      </SafeAreaView>
    </>


  );
}

export default AddMeal