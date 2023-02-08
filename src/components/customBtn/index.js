import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { F_WIDTH, PRIMARY_MAIN } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const CustomButton = ({data, style, textStyle, onPress, icon}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}
        onPress={onPress}
    >
        <View style={[styles.btn, style]}>
            <Ionicons name={icon} color={"#fff"}  />
            <Text style={[styles.btnText, textStyle]}>{data}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
    btn: {
        width: F_WIDTH * 0.7,
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30, 
        flexDirection: "row",
    },
    btnText: {
        color: PRIMARY_MAIN,
        fontSize: 15,
        fontWeight: "700",
        marginLeft: 10
    }
})