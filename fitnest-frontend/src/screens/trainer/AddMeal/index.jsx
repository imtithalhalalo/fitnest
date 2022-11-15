import { Text, View, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { style } from '../../../styles/style';
import * as ImagePicker from "expo-image-picker";
import colors from '../../../constants/colors';
import axios from 'axios';
import { BASE_URL } from '../../../variables/global';
import addIngredient from '../../../services/trainer/addIngredient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IngredientCard from '../../../components/IngredientCard';
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
  const [image, setImage] = useState('');
  const [id, setId] = useState(0);
  const [ingredients, setIngredients] = useState([])
  const [error, setError] = useState('')
  const [modalVisibility, setModalVisibility] = useState(false);


  let res = [];
  useLayoutEffect(() => {

    const getLastId = async () => {

      await axios({
        method: 'GET',
        url: `${BASE_URL}/meals/last_ingredient`,
        headers: { 'Content-Type': 'multipart/form-data;' },
      }).then(response => {
        setId(response.data.id)
        console.log(response.data.id)
      }).catch((err) => {

        console.log(err);

      })
    }
    getLastId()

  }, [])

  const uploadImage = async () => {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })
    if (!res.cancelled) {

      setImage(res.uri);

    }
  }

  const handleAddIngredient = async () => {
    //bug it not adding the last one
    if (!ingredient) return
    setIngredient(ingredient);
    setIngredients([...ingredients, { id: id, text: ingredient }])
    setId(id + 1)
    setIngredient('')
    await addIngredient(ingredient);
  }
  useEffect(() => {
    res = ingredients.map(i => i.id);
    console.log(res)

  }, [ingredients])


  const handleAddMeal = async () => {
    if (!title || !calories || !fats || !proteins || !category) {
      displayError('All fields are required')
      return
    }

    const data = {
      title: title,
      image: image,
      calories: parseInt(calories),
      fats: parseInt(fats),
      protein: parseInt(proteins),
      category: category,
      ingredients: res
    };

    const token = await AsyncStorage.getItem('token');
    console.log(data)
    await axios({
      headers: { 'Authorization': 'Bearer ' + token },
      method: 'POST',
      url: `${BASE_URL}/add_meal`,
      data: data,
    })
      .then(function (response) {
        console.log(response);
        Alert.alert('Added Successfully! ')
        res = []
        return true
      })
      .catch(function (error) {
        console.log(error)
        Alert.alert('Try again! ')
        return false
      });
  }

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
          <View style={styles.ingredientsContainer}>
            {
              ingredients.map((i =>
                <IngredientCard
                  title={i.text}
                  key={i.id} />))
            }
          </View>

          <Button text={"Done"} onPress={handleAddMeal} />
        </ScrollView>

      </SafeAreaView>
    </>


  );
}

export default AddMeal