import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { height } from "../../../constants/dimension";
import { COLORS } from "../../../constants/theme";

interface OngoingHeaderProps {
  name: string;
  phoneNumber: string;
}

function OngoingHeader({ name, phoneNumber }: OngoingHeaderProps) {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec: number): string => {
    const minutes = Math.floor(sec / 60);
    const remainSeconds = sec % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <View style={styles.header}>
      <Text style={styles.voiceText}>UHD Voice {formatTime(seconds)}</Text>
      <Text style={styles.callerName}>{name}</Text>
      <Text style={styles.phoneNumber}>휴대전화 {phoneNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: height * 0.12,
    alignItems: "center",
  },
  voiceText: {
    backgroundColor: "#222",
    color: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "600",
    overflow: "hidden",
  },
  callerName: {
    marginTop: 16,
    fontSize: 34,
    color: COLORS.white,
    fontWeight: "bold",
  },
  phoneNumber: {
    color: "#d1d5db",
    fontSize: 15,
    marginTop: 5,
  },
});

export default OngoingHeader;
