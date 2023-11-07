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
    height: "36%",
  },
  topHalfContainer: {
    width: "100%",
    height: "52%",
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
    fontSize: 14,
    fontFamily: "3720Font",
  },
  textSmall: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "3720Font",
  },
  blockContainer: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    width: "100%",
    padding: "2%",
  },
  blockSubContainer: {
    flexDirection: "row",
  },
  blockLeftHalf: {
    padding: "2%",
    marginHorizontal: "4%",
    width: "24%",
  },
  blockRightHalf: {
    width: "66%",
    padding: "2%",
  },
  listContainer: {
    width: "100%",
    paddingVertical: "5%",
    paddingHorizontal: "2%",
  },
  switchContainer: {},
  submitButtonContainer: {
    justifyContent: "center",
    width: "94%",
    marginHorizontal: "3%",
  },
  submitButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  tidbitsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: "100%",
    width: "100%",
  },
  groupSliderContainer: {
    width: "43%",
    height: "98%",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    allignItems: "center",
    paddingHorizontal: 6,
  },
  checkBoxContainer: {
    width: "55%",
    height: "98%",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
});

export default styles;
