import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../../constants/theme";

function MessageButton() {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>메시지 보내기</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { position: "absolute", bottom: 30 },
  text: { color: COLORS.white, fontSize: 16, opacity: 0.9 },
});

export default MessageButton;
