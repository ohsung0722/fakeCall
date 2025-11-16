import { AudioSource, useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { useCallback, useEffect, useRef } from "react";

interface AudioPlaybackOptions {
  loop?: boolean;
}

interface AudioPlaybackController {
  start: () => void;
  stop: () => void;
  isPlaying: boolean;
  isLoaded: boolean;
}

function useAudioPlayback(
  file: AudioSource,
  options: AudioPlaybackOptions = {}
): AudioPlaybackController {
  const { loop = true } = options;

  const player = useAudioPlayer(file, { downloadFirst: true });
  const status = useAudioPlayerStatus(player);
  const isStopped = useRef(false);

  const start = useCallback(() => {
    try {
      isStopped.current = false;
      player.seekTo(0);
      player.play();
    } catch (error) {
      console.log("Audio Start error: ", error);
    }
  }, [player]);

  const stop = useCallback(() => {
    try {
      if (isStopped.current) return;
      isStopped.current = true;
      player.pause();
    } catch (error) {
      console.log("Audio Stop error: ", error);
    }
  }, [player]);

  useEffect(() => {
    if (!loop) return;

    if (
      !status.playing &&
      status.currentTime >= status.duration &&
      status.duration > 0
    ) {
      player.seekTo(0);
      player.play();
    }
  }, [status, player, loop]);

  useEffect(() => {
    return () => {
      try {
        player.pause();
        player.remove();
      } catch (error) {
        console.log("cleanup error: ", error);
      }
    };
  }, [player]);

  return {
    start,
    stop,
    isPlaying: status.playing,
    isLoaded: status.isLoaded ?? false,
  };
}

export default useAudioPlayback;
