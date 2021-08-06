import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];
const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => (
        <View style={{ backgroundColor: "#eeeeee", height: 0.5 }} />
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container}>
          <Icon
            name={item.icon}
            size={24}
            type="ionicon"
            color="white"
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>{item.location}</Text>
            <Text style={styles.subTitle}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 15,
    borderRadius: 20,
    padding: 6,
    backgroundColor: "#cccccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  subTitle: {
    color: "#aaaaaa",
  },
});
