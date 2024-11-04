import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

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
