import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { COLORS , SIZES } from '../../../constants'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const Popularjobs = () => {
  const router= useRouter();
  const isLoading =false;
  const error= false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular  Jobs</Text>
        <TouchableOpacity> 
          <Text style={styles.headerBtn}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        { isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
        ) : error ? (
          <Text>
            Something went wrong.
          </Text>
        ) : (
          <FlatList
            data={[1,2,3,4, 5 ,6, 7 ,8]}
            renderItem={({item})=> (
            <PopularJobCard
            item={item}>
            </PopularJobCard>
            )} 
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
            
            >

          </FlatList>
        )

        }

      </View>
      
    </View>
  )
}

export default Popularjobs