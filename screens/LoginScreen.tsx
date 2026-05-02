import { useAuthNavigation } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

const LoginScreen = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: Colors.background }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-8 justify-between py-10">
          <View className="w-full">
            {/* Logo/Icon Section */}
            <View className="items-center mb-10">
              <View className="bg-white p-6 rounded-full mb-6 shadow-sm flex justify-center items-center">
                <Image
                  source={require("../assets/images/icon.png")}
                  style={{ width: 80, height: 80 }}
                  resizeMode="contain"
                />
              </View>
              <Text
                className="text-lg font-semibold tracking-[4px] uppercase mb-2 font-jakarta"
                style={{ color: Colors.primary }}
              >
                Food Donation Rider
              </Text>
              <Text
                className="text-3xl text-center font-jakarta-extrabold"
                style={{ color: Colors.heading }}
              >
                Welcome Back
              </Text>
            </View>

            {/* Form Card */}
            <View className="bg-white p-8 rounded-[40px] shadow-xl shadow-blue-100">
              {/* Label & Input 1 */}
              <View className="mb-6">
                <Text
                  className="text-[11px] font-bold mb-3 ml-2 uppercase tracking-widest font-jakarta"
                  style={{ color: Colors.grey }}
                >
                  Phone or Email
                </Text>
                <View
                  className="flex-row items-center rounded-3xl px-6 py-2 border border-[#F3F7FA]"
                  style={{ backgroundColor: Colors.background }}
                >
                  <Ionicons name="mail-outline" size={20} color={Colors.grey} />
                  <TextInput
                    placeholder="rider@example.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholderTextColor={Colors.grey}
                    className="flex-1 ml-4 text-base py-4 font-jakarta"
                    style={{ color: Colors.heading }}
                  />
                </View>
              </View>

              {/* Label & Input 2 */}
              <View className="mb-8">
                <Text
                  className="text-[11px] font-bold mb-3 ml-2 uppercase tracking-widest font-jakarta"
                  style={{ color: Colors.grey }}
                >
                  Password
                </Text>
                <View
                  className="flex-row items-center rounded-3xl px-6 py-2 border border-[#F3F7FA]"
                  style={{ backgroundColor: Colors.background }}
                >
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={Colors.grey}
                  />
                  <TextInput
                    placeholder="••••••••"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor={Colors.grey}
                    className="flex-1 ml-4 text-base py-4 font-jakarta"
                    style={{ color: Colors.heading }}
                  />
                </View>
              </View>

              {/* Login Button */}
              <TouchableOpacity
                activeOpacity={0.9}
                className="rounded-3xl py-5 items-center shadow-lg shadow-orange-200"
                style={{ backgroundColor: Colors.primary }}
                onPress={() => navigation.replace("BottomStack")}
              >
                <Text className="text-white text-lg font-bold font-jakarta">
                  Login
                </Text>
              </TouchableOpacity>

              {/* Forgot Password */}
              <TouchableOpacity
                className="items-center mt-6"
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  className="text-sm font-semibold font-jakarta"
                  style={{ color: Colors.grey }}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Redirect to Signup */}
            <View className="flex-row justify-center items-center mt-10">
              <Text
                className="text-sm font-jakarta"
                style={{ color: Colors.text }}
              >
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text
                  className="text-sm font-bold font-jakarta"
                  style={{ color: Colors.primary }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Footer Section */}
          <View className="flex-row items-center justify-center mt-auto">
            <Ionicons
              name="shield-checkmark"
              size={16}
              color={Colors.primary}
            />
            <Text
              className="text-[10px] font-bold ml-2 uppercase tracking-widest font-jakarta"
              style={{ color: Colors.text }}
            >
              Secure Verification System
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
