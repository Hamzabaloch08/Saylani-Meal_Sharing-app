import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [resetValue, setResetValue] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#F3F7FA] justify-center">
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps="never"
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        <View className="px-8 flex-1 py-10">
          {/* Centered Form Content */}
          <View className="flex-1 justify-center items-center">
            {/* Hero Icon Section */}
            <View className="mb-12">
              <View
                className="w-32 h-32 bg-white rounded-full items-center justify-center"
              >
                <MaterialCommunityIcons name="lock-reset" size={60} color={Colors.primary} />
              </View>
            </View>

            {/* Title & Subtitle */}
            <Text
              className="text-4xl mb-3 text-center font-jakarta-extrabold"
              style={{ color: Colors.heading }}
            >
              Forgot Password?
            </Text>
            <Text
              className="text-center text-md leading-6 mb-12 mt-2 font-jakarta"
              style={{ color: Colors.text }}
            >
              {`Enter your phone or email to receive a \n password reset code.`}
            </Text>

            {/* Input Field */}
            <View className="w-full mb-8">
              <View className="flex-row items-center bg-white rounded-full px-6">
                <Ionicons name="at-outline" size={22} color={Colors.grey} />
                <TextInput
                  placeholder="Email or phone number"
                  placeholderTextColor={Colors.grey}
                  className="flex-1 ml-3 text-base py-5 font-jakarta"
                  style={{ color: Colors.heading }}
                  value={resetValue}
                  onChangeText={setResetValue}
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Action Button with Linear Gradient */}
            <TouchableOpacity
              activeOpacity={0.8}
              className="w-full shadow-xl elevation-5"
              style={{
                shadowColor: Colors.primary,
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 15,
                borderRadius: 999,
              }}
              onPress={() => console.log("Send Reset Code pressed")}
            >
              <LinearGradient
                colors={[Colors.primary, Colors.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 999, paddingVertical: 20 }}
              >
                <Text className="text-white text-center font-bold text-lg font-jakarta">
                  Send Reset Code
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Back to Login */}
            <TouchableOpacity
              className="flex-row items-center mt-12"
              onPress={() => navigation.replace("Login")}
            >
              <Ionicons name="arrow-back" size={18} color={Colors.grey} />
              <Text
                className="text-sm font-bold ml-2 uppercase tracking-widest font-jakarta"
                style={{ color: Colors.grey }}
              >
                Back to Login
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Footer Section */}
          <View className="flex-row items-center justify-center mt-10">
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

export default ForgotPasswordScreen;
