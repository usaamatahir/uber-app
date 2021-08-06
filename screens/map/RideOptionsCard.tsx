import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../../redux/slices/navSlice";
import { RideDataType } from "../../types/redux";
import { MapsStackParamList } from "../RootStackPrams";
import "intl";
import "intl/locale-data/jsonp/en-PK";

type authScreenProp = StackNavigationProp<
  MapsStackParamList,
  "RideOptionsCard"
>;

const data = [
  {
    id: "Uber-X-123",
    name: "Uber-X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    name: "Uber-XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    name: "Uber-LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const SURGE_CHARGE_RATE = 1.5;
  const navigation = useNavigation<authScreenProp>();
  const [selected, setSelected] = useState<RideDataType>();
  const timeToTravel = useSelector(selectTravelTimeInformation);
  console.log("TIme to travel ==> ", timeToTravel);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" type="fontawesome" size={22} />
        </TouchableOpacity>
        <Text style={styles.title}>
          Select a Ride - {timeToTravel.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.cardContainer,
              item.id === selected?.id && { backgroundColor: "#dddddd" },
            ]}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View style={{ marginLeft: -12 }}>
              <Text style={{ fontSize: 18, fontWeight: "700" }}>
                {item.name}
              </Text>
              <Text>{timeToTravel.distance.text} Time Travel</Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(
                (timeToTravel.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          disabled={!selected}
          style={[
            styles.bottomBtn,
            !selected && { backgroundColor: "#cccccc" },
          ]}
        >
          <Text style={styles.btnText}>Choose {selected?.name}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flexGrow: 1,
  },
  icon: {
    position: "absolute",
    top: 6,
    left: 10,
    zIndex: 999,
    padding: 6,
  },
  title: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: "700",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bottomContainer: {
    marginTop: "auto",
    borderTopColor: "#dddddd",
  },
  bottomBtn: { backgroundColor: "black", paddingVertical: 6, margin: 6 },
  btnText: { textAlign: "center", color: "white", fontSize: 18 },
});
