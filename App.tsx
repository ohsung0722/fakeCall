import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/FakeCallScreen/Header";
import FakeCallScreen from "./src/screens/FakeCallScreen";

export default function App() {
  return <FakeCallScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
