import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151718",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingTop: StatusBar.currentHeight,
  },
  bottomHalfContainer: {
    width: "100%",
    height: "32%",
  },
  topHalfContainer: {
    width: "100%",
    height: "56%",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    backgroundColor: "#FFFFFF",
    height: StyleSheet.hairlineWidth,
    width: "90%",
    margin: "2%",
  },
  textDefault: {
    color: "#FFFFFF",
  },
  textSmall: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  blockContainer: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    width: "86%",
    height: "24%",
    padding: "2%",
  },
  blockLeftHalf: {},
  blockRighthalf: {},
});

export default styles;
