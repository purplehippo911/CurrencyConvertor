import React, { useState, useContext } from "react";
import { StyleSheet, View, StatusBar, Dimensions, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { format } from "date-fns";
import {Entypo} from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../constants/colors";
import {ConversionInput} from "../components/ConversionInput";
import {Button} from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer"
import { ConversionContext } from "../utils/ConversionContext";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        width: screen,
        alignItems:"center"
    },
    content: {
        paddingTop: screen.height * 0.1
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
    },
    header: {
        alignItems: "flex-end",
        marginHorizontal: 20,
    },
});

export default function Home ({navigation}) {
    const {
        baseCurrency, 
        quoteCurrency, 
        swapCurrencies,
        date,
        rates,
        isLoading
    } = useContext(ConversionContext);
    const [value, setValue] = useState('100');
    const [scrollEnabled, setScrollEnabled] = useState(false);

    const conversionRate = rates[quoteCurrency];


    return (
        <View style={styles.container}>
            <ScrollView scrollEnabled={scrollEnabled}>
                <StatusBar barStyle="light-content" backgroundColor={colors.blue} /> 
                
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.push("Options")}>
                        <Entypo name="cog" size={30} color={colors.white}/>
                    </TouchableOpacity>
                </SafeAreaView>
                
                <View style={styles.content}>
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
                    
                    {isLoading ? (
                        <ActivityIndicator color={colors.white} size="large"/>
                    ) : (
                    <>
                        <ConversionInput
                            text={baseCurrency}
                            defaultValue={value}
                            onButtonPress={() => navigation.push("CurrencyList", {
                                title: "Base Currency",
                                activeCurrency: baseCurrency,
                                isBaseCurrency: true
                                })
                            }
                            keyboardType="numeric"
                            onChangeText={(text) => setValue(text)}
                        />
                        <ConversionInput
                            text={quoteCurrency}
                            value={
                                value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
                            }
                            onButtonPress={() => navigation.push("CurrencyList", {
                                title: "Quote Currency",
                                activeCurrency: quoteCurrency,  
                                isBaseCurrency: false
                            })
                            }
                            keyboardType="numeric"
                            editable={false}
                        />
                        <Text style={styles.text}>
                            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                                date && format(new Date(date), "MMM do, yyyy")
                            }`}
                        </Text>                    
                        <Button text="Reverse Currencies" onPress={() => swapCurrencies()}/>

                        <KeyboardSpacer onToggle={visible => setScrollEnabled(visible)} />
                </>
                )}
                </View>
            </ScrollView>
                    
        </View>
    )

}