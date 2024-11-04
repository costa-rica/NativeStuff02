import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

export default function DocumentsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.vwHaut}>
        <View style={styles.vwTitre}>
          <Text style={styles.txtTitre}>Documents </Text>
        </View>

        <View style={styles.vwPlusButton}>
          <Text>+</Text>
        </View>
      </View>

      <View style={styles.vwBas}>
        <Text>Documents Screen </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  vwHaut: {
    display: "flex",
    flexDirection: "row",
    width: Dimensions.get("screen").width,
    backgroundColor: "gray",
  },
  vwTitre: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    width: Dimensions.get("screen").width * 0.8, // Adjust this
  },
  txtTitre: {
    fontSize: 20,
  },
  vwPlusButton: {
    backgroundColor: "green",
    width: Dimensions.get("screen").width * 0.2, // Adjust this
  },

  vwBas: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
