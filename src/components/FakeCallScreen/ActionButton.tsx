import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONT, SPACING } from "../../constants/theme";

interface ActionButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  color: string;
  onPress: () => void;
}

function ActionButton({
  icon,
  title,
  subtitle,
  color,
  onPress,
}: ActionButtonProps) {
  const basicStyle = {
    ...styles.button,
    backgroundColor: color,
  };

  const pressStateStyle = (pressed: boolean) => ({
    opacity: pressed ? 0.7 : 1,
    transform: [{ scale: pressed ? 0.98 : 1 }],
  });

  return (
    <Pressable
      style={({ pressed }) => [basicStyle, pressStateStyle(pressed)]}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={26}
        color={COLORS.white}
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
  },
  icon: {
    marginBottom: SPACING.xs,
  },
  title: {
    color: COLORS.white,
    fontSize: FONT.lg,
    fontWeight: "700",
  },
  subtitle: {
    color: COLORS.whiteSub,
    fontSize: FONT.sm,
    marginTop: 4,
  },
});

export default ActionButton;
