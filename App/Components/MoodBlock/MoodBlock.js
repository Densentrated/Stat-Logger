import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "../../Constants/Styles.js";

export const MoodBlock = (props) => {
  const {
    timeString,
    locationString,
    feelsString,
    energyString,
    hoursSleptString,
    extrasString,
    borderColor,
  } = props.block;

  return (
    <View style={styles.blockContainer} borderColor={borderColor}>
      <Text style={styles.textSmall}>{timeString}</Text>
      <Text style={styles.textSmall}>{locationString}</Text>
      <View style={styles.blockSubContainer}>
        <View style={styles.blockLeftHalf}>
          <Text style={styles.textDefault}>Feels</Text>
          <Text style={styles.textDefault}>Energy</Text>
          <Text style={styles.textDefault}>Hours</Text>
          <Text style={styles.textDefault}>Extras!</Text>
        </View>
        <View style={styles.blockRightHalf}>
          <Text style={styles.textDefault}>
            -----{">  "} {feelsString}
          </Text>
          <Text style={styles.textDefault}>
            -----{">  "} {energyString}
          </Text>
          <Text style={styles.textDefault}>
            -----{">  "} {hoursSleptString}
          </Text>
          <Text style={styles.textDefault}>
            -----{">  "} {extrasString}
          </Text>
        </View>
      </View>
    </View>
  );
};
