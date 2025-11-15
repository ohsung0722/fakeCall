import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SPACING } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderBarProps {
  title: string;
}

function HeaderBar({ title }: HeaderBarProps) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={COLORS.white} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.blank} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: FONT.lg,
    color: COLORS.white,
    fontWeight: "700",
  },
  blank: {
    width: 24,
  },
});

export default HeaderBar;
