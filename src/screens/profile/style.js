import { StyleSheet } from "react-native";
import { F_WIDTH, PRIMARY_MAIN } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: F_WIDTH,
        alignSelf: "center",
        backgroundColor: "#fff"
    },
    headerContainer: {
        width: F_WIDTH,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
        backgroundColor: "#fff"
    },
    btn: {
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: PRIMARY_MAIN,
    },
    profile: {
        marginLeft: 30,
        fontWeight: "700",
        color: PRIMARY_MAIN
    },
    view1: {
        width: F_WIDTH,
        marginTop: 20,
        padding: 10
    },
    containerItem: {
        flexDirection: "row",
        alignItems: "center",
    }
});