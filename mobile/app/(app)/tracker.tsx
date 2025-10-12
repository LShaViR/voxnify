import ThemedCard from "@/components/themed-components/ThemedCard";
import ThemedText from "@/components/themed-components/ThemedText";
import ThemedView from "@/components/themed-components/ThemedView";
import { useState } from "react";
import { View } from "react-native";

export default function Tracker() {
  const [balance, setBalance] = useState(10000.23);

  return (
    <ThemedView
      style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10,
      }}
    >
      <ThemedCard
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <ThemedText style={{ fontSize: 30 }}>
            {balance.toLocaleString("hi-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            })}
          </ThemedText>

          <ThemedText style={{ fontSize: 25 }}>
            .{(balance % 1).toFixed(2).split(".")[1]}
          </ThemedText>
        </View>
      </ThemedCard>
      <ThemedView></ThemedView>
    </ThemedView>
  );
}
