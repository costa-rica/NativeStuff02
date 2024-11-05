import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Where To?</Text>
      <TouchableOpacity
        style={styles.touchDoc}
        onPress={() => navigation.navigate("Documents")}
      >
        <Text>DocumentsScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchDoc}
        onPress={() => navigation.navigate("ExpoDocPicker")}
      >
        <Text>ExpoDocPicker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchDoc}
        onPress={() => navigation.navigate("ExpoDocPicker01")}
      >
        <Text>ExpoDocPicker01</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchDoc}
        onPress={() => navigation.navigate("Camera")}
      >
        <Text>Camera Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchDoc}
        onPress={() => navigation.navigate("Gallery")}
      >
        <Text>Gallery Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    alignItems: "center",
    justifyContent: "center",
  },
  titre: {
    fontSize: 20,
  },
  touchDoc: {
    backgroundColor: "gray",
    borderRadius: 12,
    padding: 5,
    paddingHorizontal: 20,
    margin: 5,
  },
});
