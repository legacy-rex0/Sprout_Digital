import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { ScreenView } from '../../../components/wrapper'
import { CustomInput } from '../../../components/customInput'
import CustomButton from '../../../components/customBtn'
import { PRIMARY_MAIN } from '../../../constants/theme'

const Signup = (props) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pswrd, setPswrd] = useState("");
    const [cpswrd, setCpswrd] = useState("");
    const [verify, setVerify] = useState(true);

    const [isValidFullname, setIsValidFullname] = useState({
        msg: "Fullname must be more than 4 characters",
        check: true,
    });

    const [isValidEmail, setIsValidEmail] = useState({
        msg: "Invalid Email",
        check: true,
    });

    const [isValidPassword, setIsValidPassword] = useState({
        msg: "Password must be at least 8 Characters",
        check: true,
    });

    const [isValidCpassword, setIsValidCpassword] = useState({
        msg: "Password must be at least 8 Characters",
        check: true,
    });
    

    const handleValidName = (val) => {
        setName(val);
        if (val.length <= 0) {
          setIsValidFullname({
            msg: "Name Field is Empty",
            check: false,
          });
        } else if (val.trim().length <= 4) {
          setIsValidFullname({
            msg: "Name must at least 4 character",
            check: false,
          });
        } else if (
          val.trim().split(" ")[1] === null ||
          val.trim().split(" ")[1] === undefined
        ) {
          console.log("value: ", val.trim().split(" ")[1]);
          setIsValidFullname({
            msg: "Invalid Fullname",
            check: false,
          });
        } else {
          setIsValidFullname({
            ...isValidFullname,
            check: true,
          });
        }
    };
    
    const handleValidEmail = (val) => {
        const regx =
          /^([a-zA-Z0-9_.\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9\s]{2,4})+$/;
        setEmail(val);
    
        if (val.length <= 0) {
          setIsValidEmail({
            msg: "Email Field is Empty",
            check: false,
          });
          return;
        } else if (regx.test(val)) {
          setIsValidEmail({
            ...isValidEmail,
            check: true,
          });
        } else {
          setIsValidEmail({
            msg: "Invalid Email",
            check: false,
          });
        }
    };

    const handleValidPassword = (val) => {
        setPswrd(val);
        if (val.length <= 0) {
          setIsValidPassword({
            msg: "Password Field is Empty",
            check: false,
          });
        } else if (val.trim().length < 6) {
          setIsValidPassword({
            msg: "Password must be at least 6 Characters",
            check: false,
          });
        } else {
          setIsValidPassword({
            ...isValidPassword,
            check: true,
          });
        }
    };

    const handleValidCpassword = (val) => {
        setCpswrd(val);
        if (val.length <= 0) {
          setIsValidCpassword({
            msg: "Password Field is Empty",
            check: false,
          });
        } else if (val.trim().length < 6) {
          setIsValidCpassword({
            msg: "Password must be at least 6 Characters",
            check: false,
          });
        } else {
          setIsValidCpassword({
            ...isValidPassword,
            check: true,
          });
        }
    };


    const onSubmit = () => {
        if (email.length < 1 && name.length < 1 && pswrd.length < 1 && cpswrd.length < 1) {
            setIsValidEmail({
              msg: "Email is required",
              check: false,
            });
        } else if (name.length < 1) {
            setIsValidEmail({
              msg: "Name is required",
              check: false,
            });
        } else if (pswrd.length < 1) {
            setIsValidPassword({
              msg: "Password Field is Empty",
              check: false,
            });
        } else if (cpswrd.length < 1) {
            setIsValidCpassword({
              msg: "Confirm Password Field is Empty",
              check: false,
            });
        } else {
            props.navigation.navigate("profile-screen")
        }

    }


  return (
    <ScreenView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image source={require("../../../../assets/icons/logo.png")} style={styles.logo} />

                <Text style={styles.logoTxt}>From seed to sprout, making a difference.</Text>
            </View>

            <View style={styles.view2}>
                <CustomInput icon={'mail-outline'} placeholder={"Name"} type={'email'} value={name} 
                    setValue={setName} valid={isValidFullname} onChangeText={handleValidName}
                />

                <CustomInput icon={'mail-outline'} placeholder={"Email"} type={'email'} value={email} 
                    setValue={setEmail} valid={isValidEmail} onChangeText={handleValidEmail}
                />
                 
                <CustomInput icon={'mail-outline'} placeholder={"Password"} type={'password'} value={pswrd} 
                    setValue={setPswrd} valid={isValidPassword} onChangeText={handleValidPassword}
                />

                <CustomInput icon={'mail-outline'} placeholder={"Confirm Password"} type={'password'} value={cpswrd} 
                    setValue={setCpswrd} valid={isValidCpassword} onChangeText={handleValidCpassword}
                />              

                <CustomButton data={"SIGN UP"} style={{backgroundColor: PRIMARY_MAIN, marginVertical: 30}} textStyle={{color: "#fff", fontSize: 12}} 
                    onPress={onSubmit} icon={'lock-closed'}
                />
            </View>
        </View>
    </ScreenView>
  )
}

export default Signup;