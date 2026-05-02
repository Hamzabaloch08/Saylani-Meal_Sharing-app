import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, CompositeNavigationProp } from "@react-navigation/native";

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

export type DashboardStackParamList = {
  Dashboard: undefined;
  DonationTracking: undefined;
  RiderTracking: undefined;
};

export type DonateStackParamList = {
  DonateStep1: undefined;
  DonateStep2: undefined;
  DonationSuccess: undefined;
  DonationTracking: undefined;
  RiderTracking: undefined;
};

export type BottomTabParamList = {
  DashboardTab: undefined;     
  Donate: undefined;
  History: undefined;
  Profile: undefined; 
};

export type RootStackParamList = {
  AuthStack: undefined;
  BottomStack: undefined;
};

// Composite Props (Nested navigation ke liye)
export type AuthNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AuthStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type DashboardNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<DashboardStackParamList>,
  BottomTabNavigationProp<BottomTabParamList>
>;

export type DonateNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<DonateStackParamList>,
  BottomTabNavigationProp<BottomTabParamList>
>;

// Helpers
export const useAuthNavigation = () => useNavigation<AuthNavigationProp>();
export const useDashboardNavigation = () => useNavigation<DashboardNavigationProp>();
export const useDonateNavigation = () => useNavigation<DonateNavigationProp>();
export const useRootNavigation = () => useNavigation<NativeStackNavigationProp<RootStackParamList>>();
export const useTabNavigation = () => useNavigation<BottomTabNavigationProp<BottomTabParamList>>();
