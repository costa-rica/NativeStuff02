import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function ExpoDocPicker({ navigation }) {
  // const App = () => {
  console.log("- started app");
  // const [file, setFile] =
  // (useState < DocumentPicker.DocumentResult) | (null > null);
  const [file, setFile] = useState([]);

  const handleSelectFile = async () => {
    try {
      // Pick a single document
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Allows any file type
      });
      if (result.type === "success") {
        console.log("Selected file URI:", result.uri);
        setFile(result); // Store the result if selection was successful
      } else {
        console.log("Selected file URI:", result.uri);
        console.log("failed to select file");
        setFile(null); // Reset if the user cancels
      }
    } catch (err) {
      console.error("Error selecting document:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select File" onPress={handleSelectFile} />
      {file && file.type === "success" && (
        <View style={styles.fileInfo}>
          <Text style={styles.fileText}>File Name: {file.name}</Text>
          <Text style={styles.fileText}>File URI: {file.uri}</Text>
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
  },
  fileText: {
    fontSize: 16,
    color: "#333",
  },
});

// export default App;
