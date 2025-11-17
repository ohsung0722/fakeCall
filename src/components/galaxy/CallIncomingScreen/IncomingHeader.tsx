import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

interface IncomingHeaderProps {
  name: string;
  phoneNumber: string;
}

function IncomingHeader({ name, phoneNumber }: IncomingHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subTitleWrapper}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>UHD</Text>
        </View>
        <Text style={styles.subTitle}>Voice 수신전화</Text>
      </View>

      <View style={{ height: 60 }} />

      <Text style={styles.name}>{name}</Text>

      <View style={{ height: 6 }} />

      <Text style={styles.phone}>휴대전화 {phoneNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 50 },

  subTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  badge: {
    backgroundColor: COLORS.white,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  badgeText: {
    color: COLORS.galaxy.background.start,
    fontSize: 12,
    fontWeight: "700",
  },

  subTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "600",
  },

  name: { color: COLORS.white, fontSize: 40, fontWeight: "bold" },
  phone: { color: "#d1d5db", fontSize: 15 },
});

export default IncomingHeader;
