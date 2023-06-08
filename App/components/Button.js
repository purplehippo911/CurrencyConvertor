import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native/types";

import colors from "../constants/colors"

const styles = StyleSheet.create({
    button:{
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    buttonIcon: {
        marginRight: 10,
        width: 20,
        height: 20,
    },
    buttonText: {
        fontSize: 16,
        color: colors.white,
    }
});

export const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image
                source={require("../assets/img/reverse.png")}
                resizeMode="contain"
                style={styles.buttonIcon}
            />

            <Text style={styles.buttonText}>{text}</Text>

        </TouchableOpacity>
    );
}