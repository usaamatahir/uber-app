import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

type authScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Record = [
  {
    id: "123",
    title: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <FlatList
      data={Record}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            navigation.navigate(
              item.screen === "MapScreen" ? "MapScreen" : "EatsScreen"
            )
          }
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={styles.text}>{item.title}</Text>
            <Icon
              style={styles.icon}
              type="antdesign"
              name="arrowright"
              color="#fff"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    paddingLeft: 6,
    paddingBottom: 8,
    paddingTop: 4,
    margin: 4,
    width: 120,
    backgroundColor: "#dddddd",
  },
  text: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: "700",
  },
  icon: {
    padding: 2,
    backgroundColor: "#000",
    width: 30,
    marginTop: 4,
    borderRadius: 15,
  },
});
