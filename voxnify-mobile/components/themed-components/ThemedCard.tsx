import { Colors } from "@/styles/colors";
import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";

const ThemedCard = ({
  style,
  shadow,
  ...props
}: { style?: Record<string, unknown>; shadow?: boolean } & ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme
    ? Colors[colorScheme] ?? Colors.light
    : Colors.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.uiBackground,
          borderRadius: 20,
        },
        styles.card,
        shadow ? styles.shadow : null,
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
    borderWidth: 2,
    borderColor: "#ffffff22",
    shadowColor: "#fff",
  },

  shadow: {
    elevation: 10,
  },
});
