import ThemedView from "@/components/themed-components/ThemedView";
import Spacer from "@/components/ui/Spacer";
import ExpenseSummaryCard from "@/modules/expense-tracker/components/ExpenseSummaryCard";
import TransactionButton from "@/modules/expense-tracker/components/TransactionButton";
import { useState } from "react";

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
        <TransactionButton
          icon="basket-outline"
          label="Grocery"
          labelWidth={50}
        />
        <TransactionButton icon="car-outline" label="Travel" />
        <TransactionButton
          icon="document-text-outline"
          label="Bills"
          labelWidth={30}
        />
        <TransactionButton
          icon="ellipsis-horizontal-circle-outline"
          label="Other"
          labelWidth={35}
        />
        <TransactionButton
          colors={["#00800088", "#ffffff"]}
          icon="cash-outline"
          label="Income/Transfer"
          labelWidth={118}
          large
        />
      </ThemedView>
    </ThemedView>
  );
}
