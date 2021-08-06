import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// @ts-ignore
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../redux/slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MapsStackParamList } from "../RootStackPrams";
import NavFavorites from "../home/NavFavorites";
import { Icon } from "react-native-elements";

type authScreenProp = StackNavigationProp<MapsStackParamList, "NavigateCard">;

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<authScreenProp>();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.title}>Good Morning, Usama</Text>
      <View style={styles.container}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            styles={{
              container: {
                flex: 0,
                backgroundColor: "white",
                paddingTop: 20,
              },
              textInput: {
                backgroundColor: "#DDDDDF",
                color: "black",
                borderRadius: 0,
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            minLength={2}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            fetchDetails={true}
          />
        </View>
        <NavFavorites />
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.bottomContainer}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" color="white" type="font-awesome" size={16} />
          <Text style={styles.bottomText}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomContainer2}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon
            name="fast-food-outline"
            color="black"
            type="ionicon"
            size={16}
          />
          <Text style={styles.bottomText2}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingVertical: 15,
    fontSize: 18,
  },
  container: {
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    flexShrink: 1,
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    marginTop: "auto",
    borderTopColor: "#eeeeee",
    borderTopWidth: 0.5,
  },
  bottomContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    width: 80,
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContainer2: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 80,
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomText: {
    textAlign: "center",
    color: "white",
  },
  bottomText2: {
    textAlign: "center",
    color: "black",
  },
});
