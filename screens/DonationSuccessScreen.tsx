import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const DonationSuccessScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header - Matches simplified Tab headers as per previous instruction */}
      <View className="px-6 pt-10 mb-4">
        <Text
          className="text-2xl font-jakarta-extrabold"
          style={{ color: Colors.primary }}
        >
          Donation Submitted
        </Text>
      </View>

      <View className="flex-1 px-8 items-center justify-center -mt-20">
        {/* Success Icon instead of image */}
        <View 
          style={{ backgroundColor: Colors.primary + "1A" }}
          className="w-32 h-32 rounded-full items-center justify-center mb-10 border-4 border-white shadow-xl shadow-orange-100"
        >
          <Ionicons name="checkmark-circle" size={80} color={Colors.primary} />
        </View>

        {/* Title & Description */}
        <Text className="text-3xl font-jakarta-extrabold text-heading text-center leading-tight mb-4">
          Request Submitted{"\n"}Successfully
        </Text>
        <Text className="text-sm font-jakarta-medium text-gray-400 text-center leading-6 mb-12 px-4">
          Thank you for your incredible generosity. Your donation helps us provide warmth and shelter to those who need it most.
        </Text>

        {/* Request ID Card - Clean Premium Design */}
        <View className="w-full bg-white rounded-[40px] p-8 border border-gray-50 shadow-2xl shadow-blue-50 mb-10">
          <View className="items-center mb-6">
            <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-2">
              Request Identifier
            </Text>
            <Text className="text-2xl font-jakarta-extrabold text-heading">
              #AFR-9921
            </Text>
          </View>

          <View className="h-[1px] bg-gray-50 w-full mb-6" />

          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[1px] mb-2">
                Current Status
              </Text>
              <View className="flex-row items-center">
                <View className="w-2.5 h-2.5 rounded-full bg-orange-400 mr-2 shadow-sm shadow-orange-400" />
                <Text className="text-sm font-jakarta-bold text-heading">
                  Under Review
                </Text>
              </View>
            </View>

            <View className="bg-orange-50 px-4 py-2.5 rounded-2xl flex-row items-center border border-orange-100">
              <Ionicons name="flash" size={14} color={Colors.primary} className="mr-1" />
              <Text className="text-[10px] font-jakarta-extrabold text-primary uppercase ml-1">
                Live Update
              </Text>
            </View>
          </View>
        </View>

        {/* Primary Action */}
        <TouchableOpacity
          className="w-full bg-orange-500 py-6 rounded-[30px] items-center justify-center shadow-xl shadow-orange-200 mb-6"
          onPress={() => navigation.navigate("DonationTracking")}
        >
          <Text className="text-white font-jakarta-extrabold text-base tracking-widest">
            TRACK YOUR DONATION
          </Text>
        </TouchableOpacity>

        {/* Secondary Action */}
        <TouchableOpacity 
          className="py-4 px-8 rounded-2xl"
          onPress={() => navigation.navigate("BottomStack")}
        >
          <Text className="text-orange-500 font-jakarta-bold text-sm uppercase tracking-widest">
            Return to Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC", // Consistent light background
  },
});

export default DonationSuccessScreen;
