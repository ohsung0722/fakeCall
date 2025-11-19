import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { RootStackParamList } from "../../navigation/types";
import { Animated, StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import AssistButton from "../../components/galaxy/CallOngoingScreen/AssistButton";
import ControlsGroup from "../../components/galaxy/CallOngoingScreen/ControlsGroup";
import OngoingHeader from "../../components/galaxy/CallOngoingScreen/OngoingHeader";

type CallOngoingRoute = RouteProp<RootStackParamList, "Ongoing">;

function CallOngoingScreen() {
  const route = useRoute<CallOngoingRoute>();
  const navigation = useNavigation();
  const bgAnimation = useRef(new Animated.Value(0)).current;

  const { from } = route.params;
  const caller =
    from === "Contacts" ? route.params.caller : route.params.scenario;

  const bgInterpolation = bgAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.galaxy.background.start, COLORS.galaxy.background.end],
  });

  const handleEndCallButton = () => {
    const targetRoute = from === "Contacts" ? "Contacts" : "Scenario";

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: targetRoute }],
      })
    );
  };

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(bgAnimation, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: false,
        }),
        Animated.timing(bgAnimation, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: false,
        }),
      ])
    );

    loop.start();
    return () => loop.stop();
  }, [bgAnimation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[StyleSheet.absoluteFill, { backgroundColor: bgInterpolation }]}
      />

      <LinearGradient
        colors={["transparent", "#40364b", "#524860"]}
        locations={[0.3, 0.7, 1]}
        style={StyleSheet.absoluteFill}
      />

      <OngoingHeader phoneNumber={caller.phoneNumber} name={caller.name} />
      <AssistButton />
      <ControlsGroup onEndCall={handleEndCallButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CallOngoingScreen;
