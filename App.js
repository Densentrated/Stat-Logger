import React from "react";
import { HomeScreen } from "./App/Screens/HomeScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

let customFonts = {
  "3720Font": require("./App/Assets/Fonts/3270NerdFont-Regular.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <AppLoading />;
  }
  return <HomeScreen />;
}
