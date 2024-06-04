import React from 'react'
import { View, Text, TextInput,TouchableOpacity,Image, FlatList } from 'react-native'
import { router, useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'

const Welcome = () => {
  const router= useRouter();
  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.userName}> Hello Hacer! </Text>
        <Text style={styles.welcomeMessage}> Find your perfect job! </Text>
      </View>

      <View style={styles.searcContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}>
            
          </TextInput>

        </View>

      </View>

    </View>
  )
}

export default Welcome