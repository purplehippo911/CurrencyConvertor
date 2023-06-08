import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons"

import colors from "../constants/colors";
import { RowItem, RowSeparator, Linking, Alert } from "../components/RowItem"

const openLink = url => {
    Linking.openURL(url).catch(() => {
        Alert.alert("Sorry, something went wrong.", "Please try again later.")
    })
}

export default () => {
    return (
        <SafeAreaView style={{ backgroundColor:"salmon", flex:1 }}>
            <ScrollView>
                <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
                <RowItem
                    text="Theme"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="chevron-right" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowSeparator />
                
                <RowItem
                    text="Cake"
                    onPress={() => openLink(
                        "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
                        )}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowSeparator />
                
                <RowItem
                    text="Cake"
                    onPress={() => openLink(
                        "https://reactnativebyexample.com"
                    )}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />

                <RowItem
                    text="example"
                    onPress={() => alert("todo!")}
                    rightIcon= {
                        <Entypo name="export" size={20} color={colors.blue} />
                    } styles={styles}
                />
            </ScrollView>

        </SafeAreaView>
    )
};