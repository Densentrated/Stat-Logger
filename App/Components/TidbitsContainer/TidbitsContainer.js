import React from "react";
import { View, StyleSheet } from "react-native";

export const TidbitsContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}></View>
      <View style={styles.rightView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftView: {
    width: "45%",
    height: 100,
    backgroundColor: "red",
  },
  rightView: {
    width: "45%",
    height: 100,
    backgroundColor: "blue",
  },
});
