import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { ScreenView } from '../../../components/wrapper'
import CustomButton from '../../../components/customBtn'
import { PRIMARY_MAIN } from '../../../constants/theme'

const Welcome = (props) => {
  const navigation = props.navigation;
  return (
    <ScreenView style={styles.container}>
      <ImageBackground source={require("../../../../assets/images/background.png")} style={styles.container}>

        <View style={styles.view1}>
          <Image source={require("../../../../assets/icons/logo.png")} style={styles.logo} />

          <Text style={styles.logoTxt}>From seed to sprout, making a difference.</Text>
        </View>

        <View style={styles.view2}>
          <CustomButton data={"Sign Up"} onPress={() => navigation.navigate("signup-screen")} />
          <CustomButton data={"Login"} style={{backgroundColor: PRIMARY_MAIN}} textStyle={{color: "#fff"}} 
            onPress={() => navigation.navigate("login-screen")} 
          />
        </View>
          
      </ImageBackground>
    </ScreenView>
  )
}

export default Welcome