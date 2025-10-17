import ThemedCard from "@/components/themed-components/ThemedCard";
import ThemedView from "@/components/themed-components/ThemedView";
import Spacer from "@/components/ui/Spacer";
import ExpenseSummaryCard from "@/modules/expense-tracker/components/ExpenseSummaryCard";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";

export default function Tracker() {
  const [balance, setBalance] = useState({
    currency: "INR",
    amount: 10000.24,
  });

  return (
    <ThemedView
      style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
      }}
    >
      <ExpenseSummaryCard
        balance={balance}
        expense={balance}
        income={balance}
      />
      <Spacer height={30} />
      <ThemedView
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
          rowGap: 15,
        }}
      >
        <ThemedCard style={{ width: "48%", elevation: 5 }}>
          <View
            style={{
              aspectRatio: 5 / 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="basket-outline" size={40} color="red"></Ionicons>
          </View>
        </ThemedCard>
        <ThemedCard style={{ width: "48%", elevation: 5 }}>
          <View
            style={{
              aspectRatio: 5 / 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="car-outline" size={40} color="red"></Ionicons>
          </View>
        </ThemedCard>

        <ThemedCard style={{ width: "48%", elevation: 5 }}>
          <View
            style={{
              aspectRatio: 5 / 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="document-text-outline"
              size={40}
              color="red"
            ></Ionicons>
          </View>
        </ThemedCard>
        <ThemedCard
          style={{
            width: "48%",
            elevation: 5,
          }}
        >
          <View
            style={{
              aspectRatio: 5 / 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="ellipsis-horizontal-circle-outline"
              size={40}
              color="red"
            ></Ionicons>
          </View>
        </ThemedCard>

        <ThemedCard
          style={{
            width: "100%",
            elevation: 5,
          }}
        >
          <View
            style={{
              aspectRatio: 9 / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="cash-outline" size={40} color="red"></Ionicons>
          </View>
        </ThemedCard>
      </ThemedView>
    </ThemedView>
  );
}
