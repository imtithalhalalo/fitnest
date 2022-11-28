import { FlatList, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Header from '../../../../components/Header';
import Search from '../../../../components/Search';
import ProgramCard from '../../../../components/ProgramCard';
import { style } from '../../../../styles/style';
import EmptyState from '../../../../components/EmptyState';
import Loader from '../../../../components/Loader';
import { UserContext } from '../../../../stores/UserContext';
import getPrograms from '../../../../services/user/getPrograms';

const Programs = () => {
  const [search, setSearch] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const { userData } = useContext(UserContext);
  const [programs, setPrograms] = useState([])
  const [loading, isLoading] = useState(true);

  const renderItem = ({ item }) => (
    <ProgramCard
      id={item.id}
      title={item.title}
      image={item.image}
      num_weeks={item.num_weeks} />
  )

  const getData = async () => {
    const result = await getPrograms();

    if (result.success) {
      isLoading(false)
      setPrograms(result.data);
      setFilteredPrograms(result.data)
    }
  }
  useEffect(() => {
    getData()
  }, [])

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
      <Header text={"Plans"} image={userData.image} />
      <Search onChangeText={(keyword) => { handleSearch(keyword) }}
        onClear={() => handleSearch('')} value={search} />

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