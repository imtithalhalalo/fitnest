import { SafeAreaView, Text, FlatList } from 'react-native'
import React, { useLayoutEffect, useState, useContext } from 'react'
import Header from '../../../components/Header';
import ChatCard from '../../../components/ChatCard';
import { BASE_URL } from '../../../variables/global';
import axios from 'axios'
import EmptyState from '../../../components/EmptyState';
import { UserContext } from '../../../stores/UserContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { style } from '../../../styles/style';
import Loader from '../../../components/Loader';

const Chats = ({ navigation }) => {
    const [trainers, setTrainers] = useState([])
    const [loading, setLoading] = useState(true)
    const { userData } = useContext(UserContext);

    useLayoutEffect(() => {
        const getTrainer = async () => {
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/chat/trainer`,
                    headers: { 'Content-Type': 'multipart/form-data;' },
                }).then(response => {
                    setTrainers(response.data['trainers'])
                    console.log(response.data['trainers'])
                    setLoading(false)
                }).catch((err) => {
                    console.log(err);
                })
        }
        getTrainer();
    }, [])

    return (
        <SafeAreaView style={style.mainContainer}>
            <Header text={"Chat With Trainer"} />
            {
                loading ?
                    <Loader />
                    :
                    trainers.length == 0 ? (
                        <EmptyState image={require("../../../../assets/images/gym.png")} description={"This section will contain available fitness trainers to chat with "} title={"No Available Trainers"}/>
                    ) :
                        <FlatList
                            data={trainers}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{ paddingBottom: 200 }}
                            renderItem={
                                ({ item }) =>
                                    
                                      <ChatCard
                                        id={item.id}
                                        title={item.name}
                                        image={item.image} 
                                        createChat={()=>createChat(item.id, item.image, item.name)}
                                        />  
                                    
                                    }
                        />
            }
        </SafeAreaView>
    )
}

export default Chats