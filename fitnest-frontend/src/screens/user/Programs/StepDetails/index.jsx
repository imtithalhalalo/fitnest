import { Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header'
import { style } from '../../../../styles/style';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../../components/Button';


const StepDetails = ({ route }) => {
    const { id, title, image, description, time } = route.params;
    

    
    return (
        <>
            <SafeAreaView style={style.mainContainer}>
                <Header text={title} back="back" />
                {image ? (
                    <Image source={{ uri: image }} style={{ width: '100%', height: '30%', marginTop: '7%' }} resizeMode={'contain'} />
                ) : <></>
                }
                <ScrollView style={{ marginBottom: '20%'}} >
                    <Text style={styles.title}>Step Description</Text>
                    <Text style={styles.description}>{description}</Text>
                    

                    <Button text={ "Mark As Done" } />
                    
                </ScrollView>
            </SafeAreaView>

        </>

    )
}

export default StepDetails
