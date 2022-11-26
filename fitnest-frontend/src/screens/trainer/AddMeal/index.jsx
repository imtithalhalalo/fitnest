import { Text, View, SafeAreaView, ScrollView, Alert, TextInput, TouchableOpacity } from 'react-native'
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
import TipCard from '../../../components/TipCard';
import CustomModal from '../../../components/Modal';

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
  const [tips, setTips] = useState([]);
  const [tip, setTip] = useState('');
  const [key, setKey] = useState(0);
  const [base64, setBase64] = useState('');
  const [ext, setExt] = useState('');

  let res = [];
  useLayoutEffect(() => {

    const getLastId = async () => {

      await axios({
        method: 'POST',
        url: `${BASE_URL}/meals/get_last_ingredient`,
      }).then(response => {
        setId(response.data.id)
        console.log(response)
      }).catch((err) => {

        console.log(err.response.data);

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
      base64: true
    })
    if (!res.cancelled) {

      setImage(res.uri);

    }
    setBase64(res.base64);
  }
  useEffect(() => { image ? setExt(image.split('.').pop()) : null }, [image])

  const handleAddIngredient = async () => {
    if (!ingredient) return
    setIngredient(ingredient);
    setIngredients([...ingredients, { id: id, text: ingredient }])
    setId(id + 1)
    setIngredient('')
    await addIngredient(ingredient);
  }
  useEffect(() => {
    console.log(ingredients)
    res = ingredients.map(i => i.id);
    console.log(res)

  }, [ingredients])



  const displayError = (message) => {
    setError(message)
    setModalVisibility(true)
  }
  const handleAddMeal = async () => {
    if (!title || !calories || !fats || !proteins || !category) {
      displayError('All fields are required')
      return
    }

    const data = {
      title: title,
      image: base64,
      ext: ext,
      calories: parseInt(calories),
      fats: parseInt(fats),
      protein: parseInt(proteins),
      category: category,
      ingredients: res,
      tips: JSON.stringify(tips)
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

  const deleteIngredient = async (id) => {
    const token = await AsyncStorage.getItem('token');
    console.log(id)
    await axios({
      headers: { 'Authorization': 'Bearer ' + token },
      method: 'POST',
      url: `${BASE_URL}/delete_ingredient/${id}`,
    })
      .then(function (response) {
        console.log(response.data.status);
      })
      .catch(function (error) {
        console.log(error.response.data)
        Alert.alert('Try again! ')
      });
    setIngredients(ingredients.filter((element) => element.id !== id))
  }

  const handleAddTip = () => {
    if (!tip) return
    setTips([...tips, { id: key, text: tip }])
    setKey(key + 1)
    setTip('')
  }

  const deleteTip = (key) => {
    setTips(tips.filter((e) => e.key !== key))
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
          <TouchableOpacity style={[style.secondaryBtn, { width: '50%', alignSelf: 'flex-start' }]} onPress={uploadImage}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <FontAwesome name="image" size={20} color={colors.purple} />
              <Text style={style.secondaryTextBtn}>Upload Image</Text>
            </View>
          </TouchableOpacity>


          {
            modalVisibility ? (
              <CustomModal
                onRequestClose={() => { setModalVisibility(!modalVisibility); }}
                visible={modalVisibility}
                error={error}
                onPress={() => setModalVisibility(!modalVisibility)}
                text={"Close"} />
            ) : <></>
          }

          <Input label={"Meal Ingredients"} handleChange={ingredient => setIngredient(ingredient)} input={ingredient} />
          <Button text={"Add Ingredient"} onPress={handleAddIngredient} secondary={true} />
          <View style={styles.ingredientsContainer}>
            {
              ingredients.map((i =>
                <IngredientCard
                  title={i.text}
                  key={i.id}
                  onPress={() => deleteIngredient(i.id)} />))
            }
          </View>

          <View style={style.inputContainer}>
            <Text style={style.inputLabel}>Meal Tips</Text>
            <TextInput
              multiline
              style={[style.input, { height: 150 }]}
              onChangeText={tip => setTip(tip)}
              value={tip}
            />
          </View>
          <Button text={"Add Tip"} onPress={handleAddTip} secondary={true} />
          <View style={styles.ingredientsContainer}>
            {
              tips.map((i =>
                <TipCard
                  title={i.text}
                  key={i.id}
                  onPress={() => deleteTip(i.id)} />))
            }
          </View>

          <Button text={"Done"} onPress={handleAddMeal} />
        </ScrollView>

      </SafeAreaView>
    </>


  );
}

export default AddMeal