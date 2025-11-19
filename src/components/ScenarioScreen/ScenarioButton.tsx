import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SPACING } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

interface ScenarioButtonProps {
  title: string;
  description: string;
  onPress: () => void;
}

function ScenarioButton({ title, description, onPress }: ScenarioButtonProps) {
  const pressStyle = (pressed: boolean) => ({
    opacity: pressed ? 0.6 : 1,
    transform: [{ scale: pressed ? 0.97 : 1 }],
  });
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [pressStyle(pressed)]}>
      <LinearGradient
        colors={[COLORS.listBackgroundStart, COLORS.listBackgroundEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <Ionicons name="call" size={26} color={COLORS.red} />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 16,
    padding: SPACING.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.listBorder,
  },
  title: {
    fontSize: FONT.md,
    color: COLORS.white,
    fontWeight: "600",
  },
  description: {
    fontSize: FONT.sm,
    color: COLORS.gray.light,
    marginTop: 2,
  },
});

export default ScenarioButton;
