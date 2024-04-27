import React, { PropsWithChildren } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, StyleSheet, useWindowDimensions } from "react-native";

import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/components/useColorScheme";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import * as SystemUI from "expo-system-ui";
import { useTheme } from "@/src/hooks";

SystemUI.setBackgroundColorAsync("#222");

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tabIconSelected,
        tabBarInactiveTintColor: theme.tabIconDefault,
        headerShown: useClientOnlyValue(false, true),
        // headerTransparent: true,
        headerTintColor: theme.background,
        tabBarStyle: [
          styles.tabBarContainer,
          {
            backgroundColor: theme.tabBarBackground,
          },
        ],
        tabBarItemStyle: styles.tabItemStyle,
        tabBarActiveBackgroundColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* <Tabs.Screen name='index' options={{ href: null }} /> */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Your Tasks",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    bottom: 0,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "transparent",
  },
  tabItemStyle: {
    borderRadius: 15,
    marginHorizontal: 30,
    alignSelf: "center",
    paddingBottom: 5,
    height: 45,
    width: 45,
  },
});
