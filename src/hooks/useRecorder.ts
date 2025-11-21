import {
  AudioModule,
  AudioRecorder,
  RecordingPresets,
  setAudioModeAsync,
  useAudioPlayer,
  useAudioPlayerStatus,
  useAudioRecorder,
} from "expo-audio";
import { useEffect, useState } from "react";

export default function useRecorder() {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingUri, setRecordingUri] = useState<string | null>(null);

  const player = useAudioPlayer(recordingUri || undefined);
  const status = useAudioPlayerStatus(player);

  const startRecording = async () => {
    await recorder.prepareToRecordAsync();
    recorder.record();
    setIsRecording(true);
  };

  const stopRecording = async () => {
    try {
      await recorder.stop();
      await new Promise((res) => setTimeout(res, 150));

      const uri = recorder.uri;
      setRecordingUri(uri ?? null);

      return uri;
    } finally {
      setIsRecording(false);
    }
  };

  const playRecording = async () => {
    if (!player) return;
    player.seekTo(0);
    player.play();
  };

  const stopPlayback = async () => {
    player?.pause();
  };

  useEffect(() => {
    (async () => {
      const permission = await AudioModule.requestRecordingPermissionsAsync();
      if (!permission.granted) return;

      // iOS 무음 모드에서도 재생/녹음 가능하도록 설정
      await setAudioModeAsync({
        allowsRecording: true,
        playsInSilentMode: true,
      });
    })();
  }, []);

  return {
    player,
    status,
    isRecording,
    recordingUri,
    startRecording,
    stopRecording,
    playRecording,
    stopPlayback,
  };
}
