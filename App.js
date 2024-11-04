import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DocumentsScreen from "./screens/DocumentsScreen";
import ExpoDocPicker from "./screens/ExpoDocPicker";
import ExpoDocPicker01 from "./screens/ExpoDocPicker01";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Documents" component={DocumentsScreen} />
        <Stack.Screen name="ExpoDocPicker" component={ExpoDocPicker} />
        <Stack.Screen name="ExpoDocPicker01" component={ExpoDocPicker01} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
