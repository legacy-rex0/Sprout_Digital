import { Ionicons } from "@expo/vector-icons";
import {TextInput } from "react-native-paper";
import { F_WIDTH, PRIMARY_MAIN } from "../../constants/theme"
import * as Animatable from "react-native-animatable";
import { View, Text, StyleSheet } from "react-native";


export const CustomInput = ({
    icon, placeholder, 
    type, style, 
    onChangeText, 
    onEndEditing, 
    valid, value,
    setValue,
    verification,
    onVerify

}) => {
    
  return (
    <>
        
        <TextInput style={styles.inputView}
            autoCapitalize={'none'}
            mode="outlined"
            label={placeholder}
            value={value}
            underlineColor={PRIMARY_MAIN}
            placeholderTextColor={"#ccc"}
            secureTextEntry={type === "password" ? true : false}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            keyboardType={type === 'phone' ? 'phone-pad' : type === 'email' ? "email-address" : undefined}
        />

        
    {valid?.check ? null  : (
        <Animatable.View animation="fadeInDown" duration={500} 
        style={{alignItems: 'flex-start', 
            width: F_WIDTH, paddingHorizontal: 30}}>
            <Text style={styles.errorMsg}>{valid?.msg} </Text>
        </Animatable.View>
    )}
    
    </>
  )
}

const styles = StyleSheet.create({
    input: {
        width: F_WIDTH * 0.9,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#fafafa",
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    inputView: {
        fontSize: 12, 
        width: F_WIDTH * 0.75
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon1: {
        // position: "absolute",
        left: 10,
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    },
    errorMsg:{
        color: 'red',
        fontSize: 12, 
        fontWeight: '600',
    },
});