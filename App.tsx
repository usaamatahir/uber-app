import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./screens/home";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View>
          <Home />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
