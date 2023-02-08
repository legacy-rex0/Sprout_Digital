import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { ScreenView } from '../../../components/wrapper'
import { CustomInput } from '../../../components/customInput'
import CustomButton from '../../../components/customBtn'
import { PRIMARY_MAIN } from '../../../constants/theme'

const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [pswrd, setPswrd] = useState("");

  return (
    <ScreenView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image source={require("../../../../assets/icons/logo.png")} style={styles.logo} />

                <Text style={styles.logoTxt}>From seed to sprout, making a difference.</Text>
            </View>

            <View style={styles.view2}>
                <CustomInput icon={'mail-outline'} placeholder={"Email"} type={'email'} value={email} 
                    setValue={setEmail}
                />
                 
                <CustomInput icon={'mail-outline'} placeholder={"Password"} type={'password'} value={pswrd} 
                    setValue={setPswrd}
                />         

                <CustomButton data={"LOGIN"} style={{backgroundColor: PRIMARY_MAIN, marginVertical: 30}} textStyle={{color: "#fff", fontSize: 12}} 
                    onPress={() => navigation.navigate("profile-screen")} icon={'lock-closed'}
                />
            </View>
        </View>
    </ScreenView>
  )
}

export default Login