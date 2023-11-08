import React from "react";
import { View, Text } from "react-native";
import styles from "../../Constants/Styles";
import { CheckBox } from "react-native-elements";

export const CheckBoxHolder = ({ text, check, setCheck }) => (
  <View style={styles.checkBoxHolder}>
    <View justifyContent="center">
      <Text style={styles.textDefault}> {text}: </Text>
    </View>
    <View>
      <CheckBox
        checked={check}
        onPress={() => setCheck(!check)}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        checkedColor="#FFFFFF"
        height="12%"
      />
    </View>
  </View>
);
