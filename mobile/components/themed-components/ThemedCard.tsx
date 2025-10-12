import { Colors } from "@/styles/colors";
import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";

const ThemedCard = ({
  style,
  ...props
}: { style?: Record<string, unknown> } & ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme
    ? Colors[colorScheme] ?? Colors.light
    : Colors.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.uiBackground,
          elevation: 10,
          shadowColor: "#fff",
          borderRadius: 20,
        },
        styles.card,
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
  },
});
