import { Text, TextProps, useColorScheme } from "react-native";
import { Colors } from "@/styles/colors";

const ThemedText = ({
  style,
  title = false,
  ...props
}: { style?: Record<string, unknown>; title?: boolean } & TextProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme
    ? (Colors[colorScheme] ?? Colors.light)
    : Colors.light;

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
