import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    const storeData = async (text) => {
        try {
            await AsyncStorage.setItem("@contrasena", text);
            console.log("guardando contraseña -> ", text);
        } catch (error) {
            // Error saving data
        }
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("@contrasena");

            if (value !== null) {
                setStoredText(value);
            }
            return null;
        } catch (e) {
            // error reading value
        }
    };

    const [textInput, setTextInput] = useState("");
    const [storedText, setStoredText] = useState("");
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(text) => setTextInput(text)} placeholder="Texto a guardar en memoria"></TextInput>
            <Button onPress={() => storeData(textInput)} title="Guardar"></Button>
            <StatusBar style="auto" />
            <Button onPress={() => getData()} title="Leer datos almacenados"></Button>
            <Text>{storedText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
