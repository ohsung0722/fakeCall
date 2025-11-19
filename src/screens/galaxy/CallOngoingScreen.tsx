import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useRef } from "react";
import { RootStackParamList } from "../../navigation/types";
import { Animated } from "react-native";

type CallOngoingRoute = RouteProp<RootStackParamList, "Ongoing">;

function CallOngoingScreen() {
  const route = useRoute<CallOngoingRoute>();
  const navigation = useNavigation();
  const bgAnimation = useRef(new Animated.Value(0)).current;

  const { from } = route.params;
}
