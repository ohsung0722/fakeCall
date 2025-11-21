import React, { useEffect, useState } from "react";
import useRecorder from "../../hooks/useRecorder";
import * as DocumentPicker from "expo-document-picker";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/theme";
import AudioPlayer from "./AudioPlayer";
import { copyAsync, File } from "expo-file-system";

interface AudioRecorderUploaderProps {
  onChange: (uri: string | null) => void;
}

export default function AudioRecorderUploader({
  onChange,
}: AudioRecorderUploaderProps) {
  const {
    isRecording,
    startRecording,
    stopRecording,
    playRecording,
    stopPlayback,
    player,
    status,
  } = useRecorder();

  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    if (!player?.isLoaded) return;

    const interval = setInterval(() => {}, 300);

    return () => clearInterval(interval);
  }, [player]);

  const handleStopRecording = async () => {
    const uri = await stopRecording();
    if (!uri) return;
    stopPlayback();
    setSource(uri);
    onChange(uri);
  };

  const removeAudio = () => {
    stopPlayback();
    setSource(null);
    onChange(null);
  };

  return (
    <View>
      <Pressable
        style={[styles.btn, isRecording && styles.recordActive]}
        onPress={isRecording ? handleStopRecording : startRecording}
      >
        <Text style={styles.text}>
          {isRecording ? "🟥 녹음 중지" : "🎤 녹음하기"}
        </Text>
      </Pressable>

      {source && (
        <View style={{ marginTop: 12 }}>
          <AudioPlayer
            isPlaying={status.playing}
            duration={status.duration || 0}
            currentTime={status.currentTime || 0}
            onPlayPause={() =>
              status.playing ? stopPlayback() : playRecording()
            }
            onRemove={removeAudio}
            onSeek={(time) => player.seekTo(time)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#3757ff40",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  recordActive: {
    backgroundColor: "#ff4d4d50",
    borderWidth: 1,
    borderColor: "#ff4d4d",
  },
  btnSecondary: {
    backgroundColor: "#3A3A4D",
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "600",
  },
});
