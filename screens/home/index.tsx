import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import NavOptions from "./NavOptions";

const Home = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View>
        <Image
          source={{ uri: "https://links.papareact.com/gzs" }}
          style={styles.logo}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 15,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
