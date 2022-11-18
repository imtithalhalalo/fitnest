import { SafeAreaView, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../../components/Header';
import ChatCard from '../../../components/ChatCard';
import EmptyState from '../../../components/EmptyState';
import Loader from '../../../components/Loader';
import { UserContext } from '../../../stores/UserContext';
import { style } from '../../../styles/style';
import useGetUsers from '../../../services/trainer/getUsers';

const Chats = ({ navigation }) => {

    const { userData } = useContext(UserContext);
    const { response, loading, error } = useGetUsers();
    
    const createChat = (id, name, image) => {
        navigation.navigate('Chat', { chatID: `${id}${userData.id}`, trainer_id: id, name: name, image: image })
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            <Header text={"Chat With Client"} />
            {
                loading ?
                    <Loader />
                    :
                    response.length == 0 ? (
                        <EmptyState image={require("../../../../assets/images/user.png")} description={"This section will contain available clients to chat with "} title={"No Available Users"} />
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
                                        createChat={() => createChat(item.id, item.name, item.image)} />}
                        />
            }
        </SafeAreaView>
    )
}

export default Chats