import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { height } from "../../../constants/dimension";
import { COLORS } from "../../../constants/theme";

function AssistButton() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.assistButton}>
      <Ionicons name="sparkles" size={18} color={COLORS.white} />
      <Text style={styles.assistText}>통화 어시스트</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  assistButton: {
    position: "absolute",
    bottom: height * 0.5,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  assistText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "500",
  },
});

export default AssistButton;
