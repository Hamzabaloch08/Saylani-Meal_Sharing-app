import { BottomTabParamList } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import HistoryScreen from "../../screens/HistoryScreen";
import DashboardStack from "./DashboardStack/DashboardStack";
import DonateStack from "./DonateStack/DonateStack";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabIcon = ({ name, focused }: { name: any; focused: boolean }) => {
  return (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
      <Ionicons
        name={name}
        size={26}
        color={focused ? Colors.primary : "#94A3B8"}
      />
    </View>
  );
};

const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: insets.bottom + 80,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.15,
          shadowRadius: 20,
        },
        tabBarItemStyle: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="DashboardTab"
        component={DashboardStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "grid" : "grid-outline"}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Donate"
        component={DonateStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "heart" : "heart-outline"}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "time" : "time-outline"}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={DashboardStack} // Placeholder until Profile screen is ready
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name={focused ? "person" : "person-outline"}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconContainer: {
    backgroundColor: Colors.primary + "1A", // Light orange highlight
  },
});

export default BottomTabs;
