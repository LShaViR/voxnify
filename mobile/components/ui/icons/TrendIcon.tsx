import { Colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
export const TrendIcon = ({ icon }: { icon: string }) => {
  const colorScheme = "dark";

  const theme = colorScheme
    ? Colors[colorScheme] ?? Colors.light
    : Colors.light;

  const trendIcon = {
    EXPENSE: (
      <Ionicons
        name="trending-up"
        size={20}
        color={theme.iconColor}
        style={{ backgroundColor: "transparent" }}
      />
    ),
    INCOME: (
      <Ionicons
        name="trending-down"
        size={20}
        color={theme.iconColor}
        style={{ backgroundColor: "transparent" }}
      />
    ),
    TRANSFER: (
      <Ionicons
        name="swap-vertical-outline"
        size={20}
        color={theme.iconColor}
        style={{ backgroundColor: "transparent" }}
      />
    ),
  };
  return trendIcon[icon as keyof typeof trendIcon];
};
