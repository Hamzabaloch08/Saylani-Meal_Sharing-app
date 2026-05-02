import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigation";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
