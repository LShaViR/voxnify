import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { ColorValue } from "react-native";

const GradientWrapper = ({
  children,
  height,
  width,
  colors,
}: {
  children: React.ReactElement;
  height?: number;
  width?: number;
  colors: [ColorValue, ColorValue];
}) => {
  return (
    <MaskedView maskElement={children}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ width: width || 40, height: height || 40 }}
      />
    </MaskedView>
  );
};

export { GradientWrapper };
