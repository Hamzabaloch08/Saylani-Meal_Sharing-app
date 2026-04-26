import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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

const SignupScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.background }}>
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-8 justify-between py-10">
          <View className="w-full">
            {/* Header Section */}
            <View className="items-center mb-10">
              <View className="bg-white p-4 rounded-full shadow-sm mb-6">
                <Image
                  source={require("../assets/images/icon.png")}
                  style={{ width: 60, height: 60 }}
                  resizeMode="contain"
                />
              </View>
              <Text 
                className="text-3xl text-center font-jakarta-extrabold mb-2"
                style={{ color: Colors.heading }}
              >
                Join Arctic Ember
              </Text>
              <Text 
                className="text-xs text-center px-8 font-jakarta leading-5"
                style={{ color: Colors.text }}
              >
                Fighting hunger with glacial efficiency and a warm heart.
              </Text>
            </View>

            {/* Signup Form Card */}
            <View className="bg-white p-8 rounded-[40px] shadow-xl shadow-blue-100">
              {/* Full Name */}
              <View className="mb-6">
                <Text 
                  className="text-[10px] font-bold mb-3 ml-2 uppercase tracking-widest font-jakarta"
                  style={{ color: Colors.grey }}
                >
                  Full Name
                </Text>
                <View 
                  className="flex-row items-center rounded-3xl px-6 py-1 border border-[#F3F7FA]"
                  style={{ backgroundColor: Colors.background }}
                >
                  <Ionicons name="person-outline" size={18} color={Colors.grey} />
                  <TextInput
                    placeholder="John Doe"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor={Colors.grey}
                    className="flex-1 ml-4 text-base py-4 font-jakarta"
                    style={{ color: Colors.heading }}
                  />
                </View>
              </View>

              {/* Phone Number */}
              <View className="mb-6">
                <Text 
                  className="text-[10px] font-bold mb-3 ml-2 uppercase tracking-widest font-jakarta"
                  style={{ color: Colors.grey }}
                >
                  Phone Number
                </Text>
                <View 
                  className="flex-row items-center rounded-3xl px-6 py-1 border border-[#F3F7FA]"
                  style={{ backgroundColor: Colors.background }}
                >
                  <Ionicons name="call-outline" size={18} color={Colors.grey} />
                  <TextInput
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    placeholderTextColor={Colors.grey}
                    className="flex-1 ml-4 text-base py-4 font-jakarta"
                    style={{ color: Colors.heading }}
                  />
                </View>
              </View>

              {/* Password */}
              <View className="mb-8">
                <Text 
                  className="text-[10px] font-bold mb-3 ml-2 uppercase tracking-widest font-jakarta"
                  style={{ color: Colors.grey }}
                >
                  Password
                </Text>
                <View 
                  className="flex-row items-center rounded-3xl px-6 py-1 border border-[#F3F7FA]"
                  style={{ backgroundColor: Colors.background }}
                >
                  <Ionicons name="lock-closed-outline" size={18} color={Colors.grey} />
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

              {/* Terms Section */}
              <Text 
                className="text-[10px] text-center mb-8 px-4 font-jakarta"
                style={{ color: Colors.text }}
              >
                By signing up, you agree to our{" "}
                <Text style={{ color: Colors.primary, fontWeight: 'bold' }}>Terms of Service</Text>{" "}
                and <Text style={{ color: Colors.primary, fontWeight: 'bold' }}>Privacy Policy</Text>
                .
              </Text>

              {/* Sign Up Button */}
              <TouchableOpacity
                activeOpacity={0.9}
                className="rounded-3xl py-5 items-center shadow-lg shadow-orange-200"
                style={{ backgroundColor: Colors.primary }}
              >
                <Text className="text-white text-lg font-bold font-jakarta">Sign Up</Text>
              </TouchableOpacity>

              {/* Login Redirect */}
              <View className="flex-row justify-center items-center mt-8">
                <Text className="text-xs font-jakarta" style={{ color: Colors.text }}>
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text className="text-xs font-bold font-jakarta" style={{ color: Colors.primary }}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Stats Row */}
            <View className="flex-row justify-between mt-10">
              <View className="bg-white/80 p-5 rounded-[30px] items-center flex-1 mr-4 shadow-sm border border-white">
                <Text className="text-2xl font-bold font-jakarta" style={{ color: Colors.primary }}>12k+</Text>
                <Text 
                  className="text-[8px] font-bold uppercase tracking-tighter font-jakarta"
                  style={{ color: Colors.grey }}
                >
                  Meals Shared
                </Text>
              </View>
              <View className="bg-white/80 p-5 rounded-[30px] items-center flex-1 shadow-sm border border-white">
                <Text className="text-2xl font-bold font-jakarta" style={{ color: Colors.primary }}>4.9/5</Text>
                <Text 
                  className="text-[8px] font-bold uppercase tracking-tighter font-jakarta"
                  style={{ color: Colors.grey }}
                >
                  Community Rating
                </Text>
              </View>
            </View>
          </View>

          {/* Bottom Footer Section */}
          <View className="flex-row items-center justify-center mt-auto">
            <Ionicons name="shield-checkmark" size={16} color={Colors.primary} />
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

export default SignupScreen;
