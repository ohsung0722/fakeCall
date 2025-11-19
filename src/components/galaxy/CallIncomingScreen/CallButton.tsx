import { Ionicons } from "@expo/vector-icons";
import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface CallButtonProps {
  color?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconRotate?: string;
  pulseColor?: string;
  duration?: number;
  onComplete?: () => void;
}

interface CallButtonHandler {
  stop: () => void;
  start: () => void;
}

function CallButton(
  {
    color,
    icon,
    iconSize,
    iconRotate = "0deg",
    pulseColor = "rgba(255,255,255,0.25)",
    duration,
    onComplete,
  }: CallButtonProps,
  ref: Ref<CallButtonHandler>
) {
  const animation = useRef(new Animated.Value(0)).current;
  const loopRef = useRef<Animated.CompositeAnimation | null>(null);

  const startPulse = () => {
    if (loopRef.current) return;

    loopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );

    loopRef.current.start();
  };

  const stopPulse = () => {
    if (loopRef.current) {
      loopRef.current.stop();
      loopRef.current = null;
    }
  };

  const pulseStyle = {
    ...styles.pulseBase,
    backgroundColor: pulseColor,
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2],
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    }),
  };

  useImperativeHandle(ref, () => ({
    stop: stopPulse,
    start: startPulse,
  }));

  useEffect(() => {
    startPulse();
    return () => stopPulse();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={pulseStyle} />
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onComplete}
        style={[styles.circleButton, { backgroundColor: color }]}
      >
        <Ionicons
          name={icon}
          size={iconSize}
          color="#fff"
          style={{ transform: [{ rotate: iconRotate }] }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  circleButton: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  pulseBase: {
    position: "absolute",
    pointerEvents: "none",
    width: 85,
    height: 85,
    borderRadius: 42.5,
  },
});

export default forwardRef(CallButton);
