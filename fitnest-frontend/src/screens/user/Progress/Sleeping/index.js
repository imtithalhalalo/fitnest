import React, { useState } from 'react'
import colors from '../../../../constants/colors'
import GridCard from '../../../../components/GridCard'

const Sleeping = () => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [duration , setDuration] = useState('');

    return (
        <>
            {/* Sleeping Card */}
            <GridCard
                color={colors.lighterGreen}
                shadowColor={colors.purple}
                title={"Sleeping"}
                sleeping={true}
                image={require('../../../../../assets/images/moon.png')}
                hours={duration}
                onPress={() => setModalVisibility(true)}
            />
        </>

    )
}


export default Sleeping