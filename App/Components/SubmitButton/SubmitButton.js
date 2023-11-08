import { View, TouchableOpacity, Text } from "react-native";
import styles from "../../Constants/Styles.js";

export const SubmitButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.submitButton}>
      <Text style={styles.textDefault}>SEND IT!</Text>
    </View>
  </TouchableOpacity>
);
