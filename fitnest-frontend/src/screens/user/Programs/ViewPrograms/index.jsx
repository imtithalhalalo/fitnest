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
  const renderItem = ({ item }) => (
    <ProgramCard
      id={item.id}
      title={item.title}
      image={item.image}
      num_weeks={item.num_weeks} />
  )
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
  const handleSearch = (keyword) => {
    if (keyword) {
      const filteredData = programs.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredPrograms(filteredData);
      setSearch(keyword)
    } else {
      setFilteredPrograms(programs)
      setSearch(keyword)
    }
  }

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header text={"My Plans"} image={userData.image} />
      <Search onChangeText={(keyword) => { handleSearch(keyword) }}
        onClear={(keyword) => handleSearch('')} value={search} />

      {
        loading ?
          <Loader />
          :
          filteredPrograms.length == 0 ? (
            <EmptyState icon={"clipboard"} description={"This section will contain available programs "} title={"No programs"} />
          ) :
            <FlatList
              data={filteredPrograms}
              keyExtractor={item => item.id}
              contentContainerStyle={{ paddingBottom: 200 }}
              renderItem={renderItem}
            />

      }
    </SafeAreaView>
  )
}

export default Programs