import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants/theme";

interface EndCallButtonProps {
  onPress: () => void;
}

function EndCallButton({ onPress }: EndCallButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.endButton}>
      <Ionicons
        name="call"
        size={36}
        color={COLORS.white}
        style={{ transform: [{ rotate: "135deg" }] }}
        onPress={onPress}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  endButton: {
    marginTop: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.red,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EndCallButton;
