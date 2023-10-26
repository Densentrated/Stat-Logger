import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import BlockArray from "./BlockArray.js";
import { MoodBlock } from "../MoodBlock/MoodBlock.js";
import styles from "../../Constants/Styles.js";

export const MoodList = () => {
  return (
    <View>
      <FlatList
        data={BlockArray}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <MoodBlock block={item} />
          </View>
        )}
        snapToInterval={160}
        snapToAllignment={"start"}
        contentContainerStyle={{
          alignItems: "center",
          nestedScrollEnabled: true,
        }}
      />
    </View>
  );
};
