import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import React, { useState } from "react";
import { MoodBlock } from "../Components/MoodBlock.js";
import styles from "../Constants/Styles.js";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topHalfContainer}>
        <MoodBlock />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.bottomHalfContainer}></View>
    </View>
  );
};
