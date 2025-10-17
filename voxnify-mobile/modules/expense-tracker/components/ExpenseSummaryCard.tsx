import ThemedCard from "@/components/themed-components/ThemedCard";
import ThemedText from "@/components/themed-components/ThemedText";
import Spacer from "@/components/ui/Spacer";
import { View } from "react-native";

const ExpenseSummaryCard = ({
  balance,
  expense,
  income,
}: {
  balance: { currency: string; amount: number };
  expense: { currency: string; amount: number };
  income: { currency: string; amount: number };
}) => {
  return (
    <ThemedCard
      style={{
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
      shadow
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <ThemedText style={{ fontSize: 20 }}>
          {"Bal: "}
          {balance.amount.toLocaleString("hi-IN", {
            style: "currency",
            currency: balance.currency,
            maximumFractionDigits: 0,
          })}
        </ThemedText>

        <ThemedText style={{ fontSize: 15 }}>
          .{(balance.amount % 1).toFixed(2).split(".")[1]}
        </ThemedText>
      </View>

      <Spacer height={6} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <ThemedText style={{ fontSize: 10 }}>
          {"Income : "}
          {income.amount.toLocaleString("hi-IN", {
            style: "currency",
            currency: balance.currency,
          })}
        </ThemedText>
      </View>
      <Spacer height={6} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <ThemedText style={{ fontSize: 10 }}>
          {"Expense : "}
          {expense.amount.toLocaleString("hi-IN", {
            style: "currency",
            currency: balance.currency,
          })}
        </ThemedText>
      </View>
    </ThemedCard>
  );
};

export default ExpenseSummaryCard;
