import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../Constants/Styles.js";

export const MoodBlock = () => {
  return (
    <View style={styles.blockContainer}>
      <Text style={styles.textSmall}>10-23-23 10:20PM</Text>
      <View>
        <Text style={styles.textDefault}>Feels</Text>
        <Text style={styles.textDefault}>Energy</Text>
        <Text style={styles.textDefault}>Hours Slept</Text>
        <Text style={styles.textDefault}>Extras!</Text>
      </View>
      <View></View>
    </View>
  );
};
