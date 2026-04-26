import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { stackScreenOptions } from "../constants/stackScreenOptions";

import { AuthStack } from "./AuthStack/AuthStack";
import BottomTabs from "./BottomStack/BottomTabs";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={stackScreenOptions}
        initialRouteName="AuthStack"
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="BottomStack" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
