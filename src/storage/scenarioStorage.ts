import AsyncStorage from "@react-native-async-storage/async-storage";
import { Scenario } from "../constants/scenario";

const STORAGE_KEY = "USER_SCENARIOS";

export async function saveScenario(newScenario: Scenario) {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  const scenarios: Scenario[] = stored ? JSON.parse(stored) : [];

  const updated = [...scenarios, newScenario];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export async function getUserScenarios(): Promise<Scenario[]> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}
