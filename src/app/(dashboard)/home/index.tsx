import { StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import Container from "@/src/components/Container";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/br";
import React, { useState } from "react";
import Clock from "@/src/components/Clock";
import { TimeDataFilters } from "@/src/types";
import TimeFrameTabs from "@/src/components/TimeFrameTabs";

dayjs.extend(relativeTime);
dayjs.locale("br");

const HomeScreen = () => {
  const [timeFilter, setTimeFilter] = useState<TimeDataFilters>("today");

  return (
    <Container
      primaryContainerStyle={{
        justifyContent: "space-around",
        paddingLeft: 15,
      }}
    >
      <TimeFrameTabs
        activeFilter={timeFilter}
        setActiveFilter={setTimeFilter}
      />
      <Clock />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
