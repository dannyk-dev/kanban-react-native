import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TimeDataFilters, TimeDataFiltersList } from "../types";
import Button from "./Button";

interface TimeFrameTabsProps {
  activeFilter: TimeDataFilters;
  setActiveFilter: (activeFilter: TimeDataFilters) => void;
}

const TimeFrameTabs = ({
  activeFilter,
  setActiveFilter,
}: TimeFrameTabsProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      {TimeDataFiltersList.map((filter) => (
        <Button
          text={filter}
          contentStyle={styles.btnText}
          size="sm"
          ghost={filter !== activeFilter}
          onPress={() => setActiveFilter(filter)}
        />
      ))}
    </View>
  );
};

export default TimeFrameTabs;

const styles = StyleSheet.create({
  btnText: {
    fontSize: 14,
  },
});
