import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React, { useState } from "react";
import { MoodList } from "../Components/MoodList/MoodList.js";
import styles from "../Constants/Styles.js";
import { TidbitsContainer } from "../Components/TidbitsContainer/TidbitsContainer.js";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#151718" />
      <View style={styles.topHalfContainer}>
        <MoodList />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.bottomHalfContainer}>
        <TidbitsContainer />
      </View>
    </View>
  );
};
