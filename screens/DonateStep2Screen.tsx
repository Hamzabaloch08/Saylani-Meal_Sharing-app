import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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

const DonateStep2Screen = () => {
  const navigation = useNavigation();
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="px-6 pt-10">
          <Text
            className="text-3xl font-jakarta-extrabold mb-6"
            style={{ color: Colors.heading }}
          >
            Donate Food
          </Text>

          {/* Progress Indicator */}
          <View className="mb-8">
            <View className="flex-row justify-between items-center mb-3">
              <Text
                className="text-[10px] font-jakarta-bold uppercase tracking-[1.5px]"
                style={{ color: Colors.primary }}
              >
                Step 2 of 2
              </Text>
              <Text className="text-[10px] font-jakarta-bold uppercase tracking-[1.5px] text-gray-400">
                Location
              </Text>
            </View>
            <View className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <View className="h-full bg-orange-500 rounded-full" style={{ width: "100%" }} />
            </View>
          </View>

          {/* Pickup Address Section */}
          <View className="mb-8 bg-white p-6 rounded-[35px] shadow-sm shadow-blue-50 border border-gray-50">
            <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-6">
              Pickup Address
            </Text>
            
            <View className="bg-gray-50 rounded-2xl p-4 flex-row items-center mb-6">
              <Ionicons name="search" size={18} color="#9CA3AF" />
              <TextInput
                placeholder="Enter pickup address"
                className="ml-2 flex-1 font-jakarta text-sm"
              />
            </View>

            {/* Mock Map View */}
            <View className="h-40 bg-gray-100 rounded-3xl overflow-hidden relative">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1000",
                }}
                className="w-full h-full opacity-60"
              />
              <View className="absolute top-1/2 left-1/2 -ml-4 -mt-4">
                <Ionicons name="location" size={32} color={Colors.primary} />
              </View>
            </View>
          </View>

          {/* Food Details (Review) */}
          <View className="mb-8 bg-white p-6 rounded-[35px] shadow-sm shadow-blue-50 border border-gray-50">
            <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-6">
              Review Food Details
            </Text>
            
            <View className="mb-4">
              <Text className="text-sm font-jakarta-bold mb-2" style={{ color: Colors.heading }}>
                Description
              </Text>
              <View className="bg-gray-50 p-4 rounded-2xl min-h-[100px]">
                <TextInput
                  placeholder="Tell us more about the food..."
                  className="font-jakarta text-sm"
                  multiline
                />
              </View>
            </View>

            <View className="flex-row justify-between mb-4">
              <View className="flex-1 mr-2">
                 <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase mb-2">Category</Text>
                 <Text className="text-sm font-jakarta-bold" style={{ color: Colors.heading }}>Rice (Biryani)</Text>
              </View>
              <View className="flex-1 ml-2">
                 <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase mb-2">Quantity</Text>
                 <Text className="text-sm font-jakarta-bold" style={{ color: Colors.heading }}>25 People</Text>
              </View>
            </View>
          </View>

          {/* Delivery Method Selection */}
          <View className="mb-10">
            <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-6">
              Delivery Method
            </Text>
            <View className="flex-row gap-x-4">
              <TouchableOpacity
                onPress={() => setDeliveryMethod("pickup")}
                className={`flex-1 p-5 rounded-3xl items-center border-2 ${deliveryMethod === "pickup" ? "border-orange-500 bg-orange-50" : "border-gray-50 bg-white"}`}
              >
                <Ionicons name="bicycle" size={24} color={deliveryMethod === "pickup" ? Colors.primary : Colors.grey} />
                <Text className={`text-xs font-jakarta-bold mt-2 ${deliveryMethod === "pickup" ? "text-orange-500" : "text-gray-400"}`}>
                  Need Pickup
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setDeliveryMethod("dropoff")}
                className={`flex-1 p-5 rounded-3xl items-center border-2 ${deliveryMethod === "dropoff" ? "border-orange-500 bg-orange-50" : "border-gray-50 bg-white"}`}
              >
                <MaterialCommunityIcons name="hand-heart" size={24} color={deliveryMethod === "dropoff" ? Colors.primary : Colors.grey} />
                <Text className={`text-xs font-jakarta-bold mt-2 ${deliveryMethod === "dropoff" ? "text-orange-500" : "text-gray-400"}`}>
                  I'll Drop-off
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Final Submit Action */}
          <View className="pb-10">
            <TouchableOpacity
              className="bg-orange-500 py-6 rounded-[30px] items-center justify-center shadow-lg shadow-orange-200"
              onPress={() => {
                navigation.navigate("DonationSuccess");
              }}
            >
              <Text className="text-white font-jakarta-extrabold text-base uppercase tracking-widest">
                Submit Donation
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonateStep2Screen;
