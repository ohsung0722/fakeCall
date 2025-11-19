import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/theme";

interface ControlButtonProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
}

function ControlButton({ icon, label }: ControlButtonProps) {
  return (
    <Pressable style={styles.controlButton}>
      <MaterialCommunityIcons name={icon} size={28} color={COLORS.white} />
      <Text style={styles.controlLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  controlButton: {
    alignItems: "center",
  },
  controlLabel: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 6,
  },
});

export default ControlButton;
