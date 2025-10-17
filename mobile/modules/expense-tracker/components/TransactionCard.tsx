import ThemedCard from "@/components/themed-components/ThemedCard";
import ThemedText from "@/components/themed-components/ThemedText";
import { TrendIcon } from "@/components/ui/icons/TrendIcon";
import { format } from "date-fns";
import { View } from "react-native";

export const TransactionCard = ({
  item,
}: {
  item: { reciever: string; amount: number; type: string };
}) => {
  return (
    <ThemedCard>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <ThemedText>{item.reciever}</ThemedText>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 5,
            }}
          >
            <ThemedText title>
              {item.amount.toLocaleString("hi-IN", {
                style: "currency",
                currency: "INR",
              })}
            </ThemedText>
            <TrendIcon icon={item.type} />
          </View>

          <ThemedText>{format(new Date(), "dd LLL")}</ThemedText>
        </View>
      </View>
    </ThemedCard>
  );
};
