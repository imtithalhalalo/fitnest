import { SafeAreaView, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../../components/Header';
import ChatCard from '../../../components/ChatCard';
import EmptyState from '../../../components/EmptyState';
import { UserContext } from '../../../stores/UserContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { style } from '../../../styles/style';
import Loader from '../../../components/Loader';
import useGetTrainers from '../../../services/user/getTrainers';

const Chats = ({ navigation }) => {

    const { userData } = useContext(UserContext);
    const { response, loading, error } = useGetTrainers();

    const createChat = (id, image, name ) => {
        console.log(image, name, id)
            const database = getFirestore();
            addDoc(collection(database, "chats"), {
                id: `${userData.id}${id}`,
                userName: userData.name,
                trainerName: name,
                user: userData.id,
                trainer: id,
            })
                .then(() => navigation.navigate('Chat', {trainer_id: id, name: name, image: image, chatID: `${userData.id}${id}`}))
                .catch((error) => alert(error.message))
            
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <Header text={"Chat With Trainer"} />
            {
                loading ?
                    <Loader />
                    :
                    response.length == 0 ? (
                        <EmptyState image={require("../../../../assets/images/gym.png")} description={"This section will contain available fitness trainers to chat with "} title={"No Available Trainers"}/>
                    ) :
                        <FlatList
                            data={response}
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