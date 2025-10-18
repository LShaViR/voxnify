import ThemedCard from "@/components/themed-components/ThemedCard";
import { GradientWrapper } from "@/components/ui/GradientWrapper";
import { Ionicons } from "@expo/vector-icons";
import { ColorValue, Text, TouchableOpacity, View } from "react-native";

const TransactionButton = ({
  icon,
  label,
  labelWidth,
  large,
  colors,
}: {
  icon: string;
  label: string;
  labelWidth?: number;
  large?: boolean;
  colors?: [ColorValue, ColorValue];
}) => {
  return (
    <ThemedCard style={{ width: large ? "100%" : "48%", elevation: 5 }}>
      <TouchableOpacity
        style={{
          aspectRatio: large ? 9 / 2 : 5 / 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <GradientWrapper colors={colors ?? ["#FF000088", "#ffffff"]}>
            <Ionicons name={icon as any} size={40} color="red"></Ionicons>
          </GradientWrapper>

          <GradientWrapper
            colors={colors ?? ["#FF000088", "#ffffff"]}
            width={labelWidth ?? 40}
            height={20}
          >
            <Text>{label}</Text>
          </GradientWrapper>
        </View>
      </TouchableOpacity>
    </ThemedCard>
  );
};

export default TransactionButton;
