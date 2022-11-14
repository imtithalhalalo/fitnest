import { FlatList, SafeAreaView } from 'react-native'
import React, { useState, useLayoutEffect, useEffect, useMemo, useContext } from 'react'
import Header from '../../../../components/Header';
import Search from '../../../../components/Search';
import ProgramCard from '../../../../components/ProgramCard';
import { style } from '../../../../styles/style';
import EmptyState from '../../../../components/EmptyState';
import useGetPrograms from '../../../../services/user/getPrograms';
import Loader from '../../../../components/Loader';
import { UserContext } from '../../../../stores/UserContext';
import { BASE_URL } from '../../../../variables/global';
import axios from 'axios';

const Programs = () => {
  const [search, setSearch] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const { userData } = useContext(UserContext);
  const [programs, setPrograms] = useState([])
  const [loading, setloading] = useState(true);
  const getPrograms = () => {
    axios({
      method: 'GET',
      url: `${BASE_URL}/programs/`,
    }).then(response => {
      console.log(response.data['programs'])
      setFilteredPrograms(response.data['programs'])
      setPrograms(response.data['programs'])
      setloading(false)
    }).catch((err) => {
      setError(err)
    })
  };

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header text={"My Plans"} image={userData.image} />
      <Search />
    </SafeAreaView>
  )
}

export default Programs