import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { COLORS } from "../../constants/theme";

interface Props {
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  onPlayPause: () => void;
  onRemove: () => void;
  onSeek: (time: number) => void;
}

export default function AudioPlayerUI({
  isPlaying,
  duration,
  currentTime,
  onPlayPause,
  onRemove,
  onSeek,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPlayPause} style={styles.playButton}>
        <Ionicons
          name={isPlaying ? "pause" : "play"}
          size={18}
          color={COLORS.black}
          style={{ marginLeft: isPlaying ? 0 : 2 }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <Text style={styles.timeText}>
          {format(currentTime)} / {format(duration)}
        </Text>

        <Slider
          value={currentTime}
          minimumValue={0}
          maximumValue={duration > 0 ? duration : 1}
          step={0.1} // 더 부드럽게 제어
          minimumTrackTintColor={COLORS.black}
          maximumTrackTintColor="#cfcfcf"
          thumbTintColor={COLORS.white}
          style={{ height: 28, width: "100%" }}
          onSlidingComplete={onSeek}
        />
      </View>

      <TouchableOpacity onPress={onRemove}>
        <Ionicons name="close" size={18} color="#6b7280" />
      </TouchableOpacity>
    </View>
  );
}

function format(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" + s : s}`;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ECEFF3",
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 30,
    gap: 10,
  },
  playButton: {
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  timeText: {
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 2,
  },
  iconBtn: {
    padding: 6,
  },
});
