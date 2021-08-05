import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// @ts-ignore
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../redux/slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MapsStackParamList } from "../RootStackPrams";

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
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 18,
  },
  container: {
    borderTopWidth: 1,
    borderTopColor: "gray",
    opacity: 0.2,
    flexShrink: 1,
  },
});
