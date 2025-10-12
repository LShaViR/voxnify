import ThemedText from "@/components/themed-components/ThemedText";
import ThemedView from "@/components/themed-components/ThemedView";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ThemedView
      safe
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        rowGap: 20,
      }}
    >
      <ThemedText>Index</ThemedText>
      <Link
        style={{ backgroundColor: "blue", padding: 10, color: "white" }}
        href="/tracker"
      >
        Tracker
      </Link>
      <Link
        style={{ backgroundColor: "green", padding: 10, color: "white" }}
        href="/profile"
      >
        Profile
      </Link>
    </ThemedView>
  );
}
