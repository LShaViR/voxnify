import ThemedStatus from "@/components/themed-components/ThemedStatus";
import ThemedView from "@/components/themed-components/ThemedView";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemedView style={{ flex: 1 }} safe>
      <ThemedStatus />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemedView>
  );
}
