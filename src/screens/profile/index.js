import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { ScreenView } from '../../components/wrapper'
import { Ionicons } from '@expo/vector-icons'
import { PRIMARY_MAIN } from '../../constants/theme'

const Profile = (props) => {
  return (
    <ScreenView style={styles.container} top>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
          >
            <View style={styles.btn}>
              <Ionicons name='chevron-back' size={18} color={"#fff"} />
            </View>
          </TouchableOpacity>

          <Text style={styles.profile}>Profile</Text>
        </View>

        <View style={styles.view1}>
          <View style={styles.containerItem}>
            <View style={{backgroundColor: PRIMARY_MAIN, width: 50, height: 50, padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 200, marginHorizontal: 25 }}>
              <Text style={{color: "#fff"}}>S</Text>
            </View>

            <View>
              <Text style={{fontWeight: "600", fontSize: 16, color: "#000"}}>Sprout Digital</Text>
              <Text style={{fontSize: 11, color: "#a0a0a0"}}>Sprout Digital</Text>
            </View>
          </View>
        </View>

        
          
      </View>
    </ScreenView>
  )
}

export default Profile