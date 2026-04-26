import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { stackScreenOptions } from "@/constants/stackScreenOptions";
import DashboardScreen from "@/screens/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="DashboardHome" component={DashboardScreen} />
    </Stack.Navigator>
  );
}
