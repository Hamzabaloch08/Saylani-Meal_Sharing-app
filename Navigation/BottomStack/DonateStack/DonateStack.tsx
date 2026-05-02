import { DonateStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DonateStep1Screen from "../../../screens/DonateStep1Screen";
import DonateStep2Screen from "../../../screens/DonateStep2Screen";
import DonationSuccessScreen from "../../../screens/DonationSuccessScreen";
import DonationTrackingScreen from "../../../screens/DonationTrackingScreen";
import RiderTrackingScreen from "../../../screens/RiderTrackingScreen";

const Stack = createNativeStackNavigator<DonateStackParamList>();

const DonateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="DonateStep1" component={DonateStep1Screen} />
      <Stack.Screen name="DonateStep2" component={DonateStep2Screen} />
      <Stack.Screen name="DonationSuccess" component={DonationSuccessScreen} />
      <Stack.Screen name="DonationTracking" component={DonationTrackingScreen}/>
      <Stack.Screen name="RiderTracking" component={RiderTrackingScreen} />
    </Stack.Navigator>
  );
};

export default DonateStack;
