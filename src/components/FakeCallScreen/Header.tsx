import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT, SPACING } from "../../constants/theme";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons name="call-outline" size={40} color={COLORS.white} />
      </View>
      <Text style={styles.title}>가짜 전화</Text>
      <Text style={styles.subtitle}>불편한 상황을 손쉽게 탈출하세요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: SPACING.lg,
  },
  iconWrapper: {
    backgroundColor: COLORS.red,
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: FONT.xl,
    fontWeight: "700",
    color: COLORS.white,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT.sm,
    color: COLORS.gray.light,
  },
});

export default Header;
