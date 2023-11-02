import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import { MoodList } from "../Components/MoodList/MoodList.js";
import styles from "../Constants/Styles.js";
import { SubmitButton } from "../Components/SubmitButton/SubmitButton.js";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#151718" />
      <View style={styles.topHalfContainer}>
        <MoodList />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.bottomHalfContainer}>
        <View style={styles.switchContainer}>
          <View style={styles.sliderContainer}></View>
          <View style={styles.checkersContainer}></View>
        </View>
        <View style={styles.submitButtonContainer}>
          <SubmitButton title="SUBMIT" />
        </View>
      </View>
    </View>
  );
};
