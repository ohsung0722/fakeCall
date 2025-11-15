import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/FakeCallScreen/Header";
import FakeCallScreen from "./src/screens/FakeCallScreen";
import ContactListScreen from "./src/screens/ContactListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FakeCallScreen} />
        <Stack.Screen name="Contacts" component={ContactListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
