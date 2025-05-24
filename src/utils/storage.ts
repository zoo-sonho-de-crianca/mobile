import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "hasSeenOnboarding";

export async function hasSeenOnboarding(): Promise<boolean> {
  const value = await AsyncStorage.getItem(KEY);
  return value === "true";
}

export async function markOnboardingSeen() {
  await AsyncStorage.setItem(KEY, "true");
}
