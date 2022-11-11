import { SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header';
import Search from '../../../../components/Search';
import { style } from '../../../../styles/style';

const Programs = () => {
  return (
    <SafeAreaView style={style.mainContainer}>
      <Header text={"My Plans"} />
      <Search />
      
    </SafeAreaView>
  )
}

export default Programs