import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ExpoDocPicker01({ navigation }) {
  console.log("- started app");

  const [file, setFile] = useState(null);
  const [fileObj, setFileObj] = useState({ name: null, uri: null });

  const handleSelectFile = async () => {
    try {
      // Pick a single document
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Allows any file type
      });

      console.log(result.canceled);
      if (!result.canceled) {
        setFile(result.assets);
        console.log("file: ", file);
        setFileObj({ name: result.assets[0].name, uri: result.assets[0].uri });
      }
    } catch (err) {
      console.error("Error selecting document:", err);
    }
  };

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
      {/* <Button title="Select File" onPress={this._pickDocument} /> */}
      <Button title="Select File" onPress={() => handleSelectFile()} />
      {fileObj && (
        <View style={styles.fileInfo}>
          <Text style={styles.fileText}>File Name: {fileObj.name}</Text>
          <Text style={styles.fileText}>File URI: {fileObj.uri}</Text>
        </View>
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
  fileInfo: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "gray",
    height: 50,
    width: 200,
  },
  fileText: {
    fontSize: 16,
    color: "#333",
  },
});
