import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import styles from "../../Constants/Styles.js";
import { VerticalSlider } from "../VerticalSlider/VerticalSlider.js";
import { CheckBoxHolder } from "../CheckBox/CheckBoxHolder.js";
import { SubmitButton } from "../SubmitButton/SubmitButton.js";
import GetLocation from "react-native-get-location";

export const TidbitsContainer = () => {
  // hooks for the sliders
  const [feelsValue, setFeelsValue] = useState(0);
  const [energyValue, setEnergyValue] = useState(0);
  const [hoursValue, setHoursValue] = useState(0);
  // list of slider values
  const sliderValues = [energyValue, hoursValue];

  // hooks for the checkboxes
  const [hasEaten, setHasEaten] = useState(false);
  const [isCaffinated, setIsCaffinated] = useState(false);
  const [haveDeadline, setHaveDeadline] = useState(false);
  const [inPain, setInPain] = useState(false);
  const [thingsDone, setThingsDone] = useState(false);
  // list of checkbox values
  const checkBoxValues = [
    hasEaten,
    isCaffinated,
    haveDeadline,
    inPain,
    thingsDone,
  ];

  function storeList() {
    console.log(makeFeelsString());
    console.log(makeEnergyString());
    console.log(makeHoursSleptString());
    console.log(makeExtrasString());
    console.log(makeTimeString());
    console.log(makeLocationString());
  }

  function makeExtrasString() {
    var extrasString = "";
    for (var i = 0; i < checkBoxValues.length; i++) {
      if (checkBoxValues[i]) {
        extrasString += "[X]";
      } else {
        extrasString += "[O]";
      }
    }
    return extrasString;
  }

  function makeFeelsString() {
    var feelsString = "";
    if (-feelsValue < 0) {
      for (var i = 0; i < feelsValue; i++) {
        feelsString += "- ";
      }
      return feelsString;
    } else if (-feelsValue > 0) {
      for (var i = 0; i < -feelsValue; i++) {
        feelsString += "+ ";
      }
      return feelsString;
    } else if (feelsValue == 0) {
      return "";
    }
  }

  function makeEnergyString() {
    var energyString = "";
    for (var i = 0; i < 8 - energyValue; i++) {
      energyString += "* ";
    }
    return energyString;
  }

  function makeHoursSleptString() {
    var hoursSleptString = "";
    for (var i = 0; i < 8 - hoursValue; i++) {
      hoursSleptString += "* ";
    }
    return hoursSleptString;
  }

  function makeTimeString() {
    const todaysDate = new Date().toDateString();
    const todaysTime = new Date().toLocaleTimeString();
    return todaysDate + ", " + todaysTime;
  }

  function makeLocationString() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then((location) => {
        console.log(location);
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  }

  return (
    <View>
      <View style={styles.submitButtonContainer}>
        <SubmitButton onPress={storeList} />
      </View>
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
        <View style={styles.checkBoxContainer}>
          <CheckBoxHolder
            text="Eaten? "
            check={hasEaten}
            setCheck={setHasEaten}
          />
          <CheckBoxHolder
            text="Caffinated? "
            check={isCaffinated}
            setCheck={setIsCaffinated}
          />
          <CheckBoxHolder
            text="Deadlines? "
            check={haveDeadline}
            setCheck={setHaveDeadline}
          />
          <CheckBoxHolder
            text="In Pain? "
            check={inPain}
            setCheck={setInPain}
          />
          <CheckBoxHolder
            text="Things Done? "
            check={thingsDone}
            setCheck={setThingsDone}
          />
        </View>
      </View>
    </View>
  );
};
