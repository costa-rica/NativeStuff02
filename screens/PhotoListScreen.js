import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as FileSystem from "expo-file-system";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function PhotoListScreen({ navigation }) {
  const [photos, setPhotos] = useState([]);

  const loadPhotos = async () => {
    try {
      const photosDirectory = `${FileSystem.documentDirectory}photos/`;
      const files = await FileSystem.readDirectoryAsync(photosDirectory);
      const photoUris = files.map((file) => photosDirectory + file);
      setPhotos(photoUris);
    } catch (error) {
      console.error("Error reading photos directory:", error);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <FontAwesome name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <Button title="Refresh Photos" onPress={loadPhotos} />
      {photos.length > 0 ? (
        <FlatList
          data={photos}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.row}>{item}</Text>}
        />
      ) : (
        <Text>No photos found</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  buttonsContainer: {
    flex: 0.1,
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
  row: {
    padding: 10,
  },
});
