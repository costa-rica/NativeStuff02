import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { supprimerPhoto } from "../reducers/document";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function GalleryScreen({ navigation }) {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.user.value);
  const documentRedux = useSelector((state) => state.document.value);

  const photos = documentRedux.photosPermenant.map((data, i) => {
    //   const photos = documentRedux.photos.map((data, i) => {
    return (
      <View key={i} style={styles.photoContainer}>
        <TouchableOpacity onPress={() => dispatch(supprimerPhoto(data))}>
          <FontAwesome
            name="times"
            size={20}
            color="#000000"
            style={styles.deleteIcon}
          />
        </TouchableOpacity>

        <Image source={{ uri: data }} style={styles.photo} />
        <Text>permenant: {data}</Text>
        <Text>cache: {documentRedux.photos}</Text>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <FontAwesome name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Gallery</Text>

      <ScrollView contentContainerStyle={styles.galleryContainer}>
        {photos}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonsContainer: {
    // flex: 0.1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "gray",
  },
  button: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 50,
  },
  galleryContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  photoContainer: {
    alignItems: "flex-end",
  },
  photo: {
    margin: 10,
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: "Futura",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  deleteIcon: {
    marginRight: 10,
  },
  text: {
    marginBottom: 15,
  },
});
