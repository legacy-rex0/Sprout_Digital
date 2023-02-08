
import { SafeAreaView, StyleProp, StyleSheet, StatusBar, Platform } from "react-native";
import { F_WIDTH } from "../../constants/theme";

const ScreenView = ({children, style, center, top}) => {

    return(
        <>
            <SafeAreaView style={[center ? styles.center : styles.container, 
                top ? {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null} : null,  style
            ]}>
                {children}
            </SafeAreaView>
        </>
    );
};


export default ScreenView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: F_WIDTH,
        backgroundColor: "#fff",
        
    },
    center: {
        flex: 1,
        width: F_WIDTH,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
});

