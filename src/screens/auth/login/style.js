import { StyleSheet } from "react-native";
import { F_WIDTH } from "../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: F_WIDTH,
        alignSelf: "center",
        backgroundColor: "#fff"
    },
    view1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    view2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 120,
        height: 120
    },
    logoTxt: {
        color: "#a0a0a0",
        fontSize: 11,
        fontWeight: "600",
        marginTop: 5
    }
});