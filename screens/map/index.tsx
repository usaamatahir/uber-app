import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "./Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "./NavigateCard";
import RideOptionsCard from "./RideOptionsCard";

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Map />
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
