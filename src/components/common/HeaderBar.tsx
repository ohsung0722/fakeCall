import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SPACING } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

interface HeaderBarProps {
  title: string;
}

type Nav = NativeStackNavigationProp<RootStackParamList>;

function HeaderBar({ title }: HeaderBarProps) {
  const navigation = useNavigation<Nav>();

  const handleBack = () => {
    const state = navigation.getState();

    if (!state || state.routes.length <= 1) {
      // goBack할 screen이 없을 때 → Home으로 이동
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
      return;
    }

    const currentRoute = state.routes[state.index];
    const prevRoute = state.routes[state.index - 1];

    if (
      currentRoute.name === "Contacts" &&
      (prevRoute?.name === "Incoming" || prevRoute?.name === "Ongoing")
    ) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
      return;
    }

    // 기본 동작
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={handleBack}>
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
