import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../navigation/types";

type Nav = NativeStackNavigationProp<RootStackParamList, "Scenario">;

function ScenarioScreen() {
  const navigation = useNavigation<Nav>();
}

export default ScenarioScreen;
