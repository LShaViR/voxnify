import ThemedText from "@/components/themed-components/ThemedText";
import ThemedView from "@/components/themed-components/ThemedView";

export default function Profile() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      safe
    >
      <ThemedText>Profile</ThemedText>
    </ThemedView>
  );
}
