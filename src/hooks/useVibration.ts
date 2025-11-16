import { useCallback, useEffect, useRef, useState } from "react";
import { Platform, Vibration } from "react-native";

interface VibrationOptions {
  loop?: boolean;
  pattern?: number[];
  duration?: number;
}

interface VibraionController {
  vibrate: () => void;
  stop: () => void;
  isVibrating: boolean;
}

function useVibration(options: VibrationOptions = {}): VibraionController {
  const { loop = true, pattern = [300, 400], duration = 400 } = options;

  const [isVibrating, setIsVibrating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const vibrate = useCallback(() => {
    setIsVibrating(true);

    if (Platform.OS === "android") {
      Vibration.vibrate(pattern, loop);
      return;
    }

    if (loop) {
      intervalRef.current = setInterval(() => {
        Vibration.vibrate(duration);
      }, duration + 200);
    } else {
      Vibration.vibrate(duration);
    }
  }, [loop, pattern, duration]);

  const stop = useCallback(() => {
    setIsVibrating(false);
    Vibration.cancel();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => stop();
  }, [stop]);

  return { vibrate, stop, isVibrating };
}

export default useVibration;
