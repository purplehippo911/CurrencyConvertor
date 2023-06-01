import { StyleSheet, View, StatusBar, Dimensions, Image, Text  } from "react-native";

import colors from "../constants/colors";

import ConversionInput from "../components/ConversionInput";

import { format } from "date-fns";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        width: screen,
        justifyContent: "center"
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    logoBackground: {
        width: screen.width / 0.45,
        height: screen.width * 0.45,
    },
    logo: {
        position: "absolute",
        width: screen.width * 0.25,
        height: screen.width * 0.25,
      },
    textHeader: {
        color: colors.white,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    text: {
        color: colors.white,
        fontSize: 14,
        textAlign: "center"
    }
});

export default Home = () => {
    const baseCurrency = "USD";
    const quoteCurrency = "GBP";
    const conversionRate = 0.8345;
    const date = new Date();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logoBackground}
                    source={require("../assets/img/background.png")}
                    resizeMode="contain"
                    />
            </View>

            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require("../assets/img/logo.png")}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.textHeader}>Currency Convertor</Text>

            <ConversionInput 
                text={baseCurrency}
                value="123"
                onButtonPress={() => alert("todo!")}
                keyboardType="numeric"
                onChangeText={(text) => console.log(text, "text")}
            />

            <ConversionInput
                text={quoteCurrency}
                value="123"
                onButtonPress={() => alert("todo!")}
                keyboardType="numeric"
                editable={false}
            />

            <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of 
                ${format(date, "do MMMM, YYYY" )}`}
            </Text>
                    
        </View>
    )

}