import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SPACING } from "../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";

interface ContactButtonProps {
  name: string;
  phone: string;
  onCall: () => void;
}

function ContactButton({ name, phone, onCall }: ContactButtonProps) {
  return (
    <LinearGradient
      colors={[COLORS.listBackgroundStart, COLORS.listBackgroundEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>

      <Pressable onPress={onCall}>
        <Ionicons name="call-outline" size={26} color={COLORS.blue} />
      </Pressable>
    </LinearGradient>
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
  name: {
    fontSize: FONT.md,
    color: COLORS.white,
    fontWeight: "600",
  },
  phone: {
    fontSize: FONT.sm,
    color: COLORS.gray.light,
    marginTop: 2,
  },
});

export default ContactButton;
