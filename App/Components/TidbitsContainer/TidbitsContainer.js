import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import styles from "../../Constants/Styles.js";
import { VerticalSlider } from "../VerticalSlider/VerticalSlider.js";

export const TidbitsContainer = () => {
  const [feelsValue, setFeelsValue] = useState(0);
  const [energyValue, setEnergyValue] = useState(0);
  const [hoursValue, setHoursValue] = useState(0);
  return (
    <View style={styles.tidbitsContainer}>
      <View style={styles.groupSliderContainer}>
        <VerticalSlider
          min={-8}
          max={8}
          letter="F"
          value={-feelsValue}
          onChange={setFeelsValue}
        />
        <VerticalSlider
          min={0}
          max={8}
          letter="E"
          value={8 - energyValue}
          onChange={setEnergyValue}
        />
        <VerticalSlider
          min={0}
          max={8}
          letter="H"
          value={8 - hoursValue}
          onChange={setHoursValue}
        />
      </View>
      <View style={styles.checkBoxContainer}></View>
    </View>
  );
};
