import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import useAudioPlayback from "../../hooks/useAudioPlayback";
import useVibration from "../../hooks/useVibration";
import { COLORS } from "../../constants/theme";
import { height, width } from "../../constants/dimension";
import { LinearGradient } from "expo-linear-gradient";
import IncomingHeader from "../../components/galaxy/CallIncomingScreen/IncomingHeader";
import CallInfoBox from "../../components/galaxy/CallIncomingScreen/CallInfoBox";
import CallButton from "../../components/galaxy/CallIncomingScreen/CallButton";
import MessageButton from "../../components/galaxy/CallIncomingScreen/MessageButton";
import { RootStackParamList } from "../../navigation/types";

type IncomingRoute = RouteProp<RootStackParamList, "Incoming">;

function CallIncomingScreen() {
  const navigation = useNavigation();
  const route = useRoute<IncomingRoute>();
  const params = route.params ?? {};

  const caller = params.caller ??
    params.scenario ?? { name: "???", phoneNumber: "010-0000-0000" };

  const bgAnimation = useRef(new Animated.Value(0)).current;

  const ringtone = useAudioPlayback(
    require("../../../assets/galaxy_ringtone.mp3")
  );
  const vibration = useVibration({ loop: true, pattern: [0, 800, 1200] });

  const bgInterpolation = bgAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.galaxy.background.start, COLORS.galaxy.background.end],
  });

  const handleAccept = () => {
    ringtone.stop();
    vibration.stop();
    //navigation.navigate("OngoingCall", { scenario, from });
  };

  const handleDecline = () => {
    ringtone.stop();
    vibration.stop();
    navigation.goBack();
  };

  useEffect(() => {
    ringtone.start();
    vibration.vibrate();

    return () => {
      ringtone.stop();
      vibration.stop();
    };
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bgAnimation, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false,
        }),
        Animated.timing(bgAnimation, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* 🔥 Background */}
      <Animated.View
        style={[StyleSheet.absoluteFill, { backgroundColor: bgInterpolation }]}
        pointerEvents="none"
      />

      <LinearGradient
        colors={["transparent", "#40364b", "#524860"]}
        locations={[0.2, 0.7, 1]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />

      <IncomingHeader name={caller.name} phoneNumber={caller.phoneNumber} />

      <View style={styles.callInfoSection} pointerEvents="none">
        <CallInfoBox />
      </View>

      <View style={styles.actions}>
        <CallButton
          color={COLORS.green}
          icon="call-outline"
          onComplete={handleAccept}
          iconSize={40}
        />
        <CallButton
          color={COLORS.red}
          icon="call-outline"
          iconRotate="135deg"
          onComplete={handleDecline}
          iconSize={40}
        />
      </View>

      <MessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
  },
  callInfoSection: {
    position: "absolute",
    bottom: height * 0.27,
    width: "100%",
    alignItems: "center",
  },
  actions: {
    position: "absolute",
    bottom: height * 0.12,
    flexDirection: "row",
    width: width * 0.75,
    justifyContent: "space-between",
  },
});

export default CallIncomingScreen;
