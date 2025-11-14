import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SPACING } from "../../constants/theme";

interface FooterProps {
  text: string;
}
function Footer({ text }: FooterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray.dark,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: SPACING.md,
    alignItems: "center",
    marginTop: SPACING.xl,
    width: "100%",
  },
  text: {
    color: COLORS.gray.text,
    fontSize: FONT.sm,
  },
});

export default Footer;
