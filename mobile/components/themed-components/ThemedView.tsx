import { Colors } from "@/styles/colors";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({
  style,
  safe = false,
  ...props
}: { style?: Record<string, unknown>; safe?: boolean } & ViewProps) => {
  //const colorScheme = useColorScheme();
  const colorScheme = "dark";

  const theme = colorScheme
    ? Colors[colorScheme] ?? Colors.light
    : Colors.light;

  const insets = useSafeAreaInsets();

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
