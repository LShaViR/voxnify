import { Colors } from "@/styles/colors";
import { StatusBar, useColorScheme } from "react-native";

const ThemedStatus = () => {
  //const colorScheme = useColorScheme();

  const colorScheme = "dark";
  const theme = colorScheme
    ? (Colors[colorScheme] ?? Colors.light)
    : Colors.light;

  return (
    <StatusBar
      backgroundColor="#121212" // Android background color
      barStyle="light-content" // text/icons color
    />
  );
};

export default ThemedStatus;
