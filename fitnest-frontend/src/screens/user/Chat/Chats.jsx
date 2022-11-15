import { SafeAreaView, FlatList } from 'react-native'
import React, { useState, useContext } from 'react'
import Header from '../../../components/Header';
import ChatCard from '../../../components/ChatCard';
import EmptyState from '../../../components/EmptyState';
import { UserContext } from '../../../stores/UserContext';
import { style } from '../../../styles/style';
import Loader from '../../../components/Loader';

const Chats = ({ navigation }) => {
    const [trainers, setTrainers] = useState([])
    const [loading, setLoading] = useState(true)
    
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