import { TouchableOpacity, TextInput, Text, StyleSheet, View} from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        flex:1,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center"
    },
    containerDisabled: {
        backgroundColor: colors.offWhite
    },
    button: {
        backgroundColor: colors.white,
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight:"bold"
    },
    input: {
        flex: 1,
        padding: 10,
        color: colors.textLight
    }


})

export const ConversionInput = ({ text, onButtonPress, ...props }) => {

    const containerStyles = [styles.container];

    if(props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onButtonPress} style={styles.button}>
                <Text style={styles.buttonText}> {text} </Text>
            </TouchableOpacity>

            <TextInput style={styles.input} {...props} />
        </View>
    )

};