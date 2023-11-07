import styles from "../../Constants/Styles.js";
import { View, Text } from "react-native";
import { Slider } from "react-native-elements";

export const VerticalSlider = ({ onChange, min, max, letter, value }) => (
  <View
    width="30%"
    height="100%"
    justifyContent="center"
    allignItems="stretch"
    paddingVertical="28%"
    textAlign="center"
  >
    <Text style={styles.textDefault} padding="4%">
      {letter}: {value}
    </Text>

    <Slider
      width="100%"
      height="100%"
      value={0}
      orientation="vertical"
      onValueChange={onChange}
      maximumValue={max}
      minimumValue={min}
      step={1}
      thumbStyle={{
        height: 8,
        width: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
      }}
      trackStyle={{
        height: "100%",
        width: "20%",
        borderRadius: 0,
      }}
      maximumTrackTintColor="#FFFFFF"
    />
  </View>
);
