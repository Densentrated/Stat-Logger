import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../Constants/Styles.js";

export const MoodBlock = () => {
  return (
    <View style={styles.blockContainer}>
      <Text style={styles.textSmall}>10-23-23 10:20PM</Text>
      <View style={styles.blockSubContainer}>
        <View style={styles.blockLeftHalf}>
          <Text style={styles.textDefault}>Feels</Text>
          <Text style={styles.textDefault}>Energy</Text>
          <Text style={styles.textDefault}>Hours Slept</Text>
          <Text style={styles.textDefault}>Extras!</Text>
        </View>
        <View style={styles.blockRightHalf}>
          <Text style={styles.textDefault}>
            ---------{">          "} - - - - - - -
          </Text>
          <Text style={styles.textDefault}>
            ---------{">          "} * * * * * * * * * *
          </Text>
          <Text style={styles.textDefault}>
            ---------{">          "} * * * * * *
          </Text>
          <Text style={styles.textDefault}>
            ---------{">          "} [0] [1] [0] [0] [0]
          </Text>
        </View>
      </View>
    </View>
  );
};
