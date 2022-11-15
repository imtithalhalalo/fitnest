import { SafeAreaView, FlatList } from 'react-native'
import React, { useLayoutEffect, useState, useContext } from 'react'
import Header from '../../../components/Header';
import ChatCard from '../../../components/ChatCard';
import { BASE_URL } from '../../../variables/global';
import axios from 'axios';
import EmptyState from '../../../components/EmptyState';
import Loader from '../../../components/Loader';
import { UserContext } from '../../../stores/UserContext';
import { style } from '../../../styles/style';

const Chats = ({ navigation }) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const { userData } = useContext(UserContext);

    useLayoutEffect(() => {
        const getUsers = async () => {
            await axios({
                method: 'GET',
                url: `${BASE_URL}/chat/user`,
                headers: { 'Content-Type': 'multipart/form-data;' },
            }).then(response => {
                setUsers(response.data['users'])
                console.log(response.data['users'])
                setLoading(false)
            }).catch((err) => {
                console.log(err);
            })
        }
        getUsers();
    }, [])

    return (
        <SafeAreaView style={style.mainContainer}>
            <Header text={"Chat With Client"} />
            {
                loading ?
                    <Loader />
                    :
                    users.length == 0 ? (
                        <EmptyState image={require("../../../../assets/images/user.png")} description={"This section will contain available clients to chat with "} title={"No Available Users"} />
                    ) :
                        <FlatList
                            data={users}
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