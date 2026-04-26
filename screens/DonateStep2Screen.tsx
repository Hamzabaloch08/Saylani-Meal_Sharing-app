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
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

const DonateStep2Screen = () => {
  const navigation = useNavigation<any>();
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [servings, setServings] = useState(20);

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#F9FBFC" }}
    >
      <StatusBar barStyle="dark-content" />

      {/* Premium Header */}
      <View className="px-6 py-4 flex-row items-center justify-between">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="bg-white w-12 h-12 rounded-2xl items-center justify-center shadow-sm shadow-gray-100 border border-gray-50"
        >
          <Ionicons name="arrow-back" size={24} color={Colors.heading} />
        </TouchableOpacity>
        <Text className="text-xl font-jakarta-extrabold text-heading">Finalize Donation</Text>
        <View className="w-12" /> {/* Spacer */}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="px-6 pt-6">
          
          {/* Phase Indicator - Pixel Perfect */}
          <View className="mb-10 px-1">
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center">
                 <View className="bg-orange-500 w-2 h-2 rounded-full mr-2" />
                 <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-orange-500">
                    PHASE 2: LOCATION & REVIEW
                 </Text>
              </View>
              <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-300">
                Final Step
              </Text>
            </View>
            <View className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <View className="h-full bg-orange-500 rounded-full" style={{ width: "100%" }} />
            </View>
          </View>

          {/* Pickup Address Section */}
          <View className="bg-white p-8 rounded-[45px] shadow-xl shadow-blue-50/50 border border-gray-50 mb-8">
            <View className="flex-row items-center mb-6">
              <View className="bg-orange-50 w-10 h-10 rounded-2xl items-center justify-center">
                 <Ionicons name="location" size={20} color={Colors.primary} />
              </View>
              <Text className="ml-3 font-jakarta-extrabold text-lg text-heading">
                Pickup Address
              </Text>
            </View>

            <View className="bg-gray-50 rounded-3xl p-5 flex-row items-center mb-6 border border-gray-100">
              <Ionicons name="search" size={18} color="#9CA3AF" />
              <TextInput
                placeholder="Street, City, Zip Code"
                className="ml-3 flex-1 font-jakarta-bold text-sm text-heading"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            {/* Mock Map View - Premium Version */}
            <View className="h-40 bg-gray-100 rounded-[35px] overflow-hidden relative border border-gray-100">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1000",
                }}
                className="w-full h-full opacity-60"
              />
              <View className="absolute top-1/2 left-1/2 -ml-6 -mt-10">
                 <View className="w-12 h-12 bg-orange-500/20 rounded-full items-center justify-center">
                    <Ionicons name="location" size={32} color={Colors.primary} />
                 </View>
              </View>
              <View className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-2xl backdrop-blur-md">
                 <Text className="text-[9px] font-jakarta-extrabold text-heading uppercase">Live Selection</Text>
              </View>
            </View>
          </View>

          {/* Food Details Summary Review */}
          <View className="bg-white p-8 rounded-[45px] shadow-xl shadow-blue-50/50 border border-gray-50 mb-8">
            <View className="flex-row items-center mb-8">
              <View className="bg-orange-50 w-10 h-10 rounded-2xl items-center justify-center">
                 <MaterialCommunityIcons name="food-variant" size={20} color={Colors.primary} />
              </View>
              <Text className="ml-3 font-jakarta-extrabold text-lg text-heading">
                Review Details
              </Text>
            </View>

            <View className="mb-8">
              <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-4">
                Description
              </Text>
              <View className="bg-gray-50 p-6 rounded-[30px] min-h-[120px] border border-gray-100">
                <TextInput
                  placeholder="Additional notes about food (allergens, special instructions...)"
                  className="font-jakarta-bold text-sm text-heading leading-6"
                  multiline
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </View>

            <View className="flex-row gap-x-4 mb-2">
              <View className="flex-1 bg-gray-50 p-5 rounded-[30px] border border-gray-100">
                <Text className="text-[9px] font-jakarta-bold text-gray-400 uppercase mb-2">Cooked Time</Text>
                <View className="flex-row items-center">
                  <Text className="font-jakarta-extrabold text-sm text-heading mr-2">12:30 PM</Text>
                  <Ionicons name="time" size={14} color={Colors.primary} />
                </View>
              </View>
              <View className="flex-1 bg-gray-50 p-5 rounded-[30px] border border-gray-100">
                <Text className="text-[9px] font-jakarta-bold text-gray-400 uppercase mb-2">Quantity</Text>
                <View className="flex-row items-center">
                  <Text className="font-jakarta-extrabold text-sm text-heading mr-2">{servings} People</Text>
                  <Ionicons name="people" size={14} color={Colors.primary} />
                </View>
              </View>
            </View>
          </View>

          {/* Delivery Method Selection - Tactile & Premium */}
          <View className="bg-white p-8 rounded-[45px] shadow-xl shadow-blue-50/50 border border-gray-50 mb-10">
            <View className="flex-row items-center mb-8">
              <View className="bg-orange-50 w-10 h-10 rounded-2xl items-center justify-center">
                 <MaterialCommunityIcons name="truck-delivery" size={20} color={Colors.primary} />
              </View>
              <Text className="ml-3 font-jakarta-extrabold text-lg text-heading">
                Fulfillment
              </Text>
            </View>

            <View className="flex-row gap-x-4">
              <TouchableOpacity
                onPress={() => setDeliveryMethod("pickup")}
                activeOpacity={0.9}
                className={`flex-1 p-6 rounded-[35px] items-center border-2 ${deliveryMethod === "pickup" ? "border-orange-500 bg-orange-500 shadow-lg shadow-orange-200" : "border-gray-50 bg-gray-50"}`}
              >
                <View className={`w-12 h-12 rounded-2xl items-center justify-center mb-3 ${deliveryMethod === "pickup" ? "bg-white/20" : "bg-white"}`}>
                   <Ionicons name="bicycle" size={24} color={deliveryMethod === "pickup" ? "white" : "#9CA3AF"} />
                </View>
                <Text className={`text-[10px] font-jakarta-extrabold tracking-[1px] uppercase ${deliveryMethod === "pickup" ? "text-white" : "text-gray-400"}`}>
                  I NEED PICKUP
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setDeliveryMethod("dropoff")}
                activeOpacity={0.9}
                className={`flex-1 p-6 rounded-[35px] items-center border-2 ${deliveryMethod === "dropoff" ? "border-orange-500 bg-orange-500 shadow-lg shadow-orange-200" : "border-gray-50 bg-gray-50"}`}
              >
                <View className={`w-12 h-12 rounded-2xl items-center justify-center mb-3 ${deliveryMethod === "dropoff" ? "bg-white/20" : "bg-white"}`}>
                   <MaterialCommunityIcons name="hand-heart" size={24} color={deliveryMethod === "dropoff" ? "white" : "#9CA3AF"} />
                </View>
                <Text className={`text-[10px] font-jakarta-extrabold tracking-[1px] uppercase ${deliveryMethod === "dropoff" ? "text-white" : "text-gray-400"}`}>
                  I WILL DROP-OFF
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Final Submit Action */}
          <View className="pb-10">
            <TouchableOpacity
              activeOpacity={0.9}
              className="bg-orange-600 py-6 rounded-[35px] flex-row items-center justify-center shadow-2xl shadow-orange-300"
              onPress={() => {
                navigation.navigate("DonationSuccess");
              }}
            >
              <Text className="text-white font-jakarta-extrabold text-base uppercase tracking-[2px] mr-2">
                Submit Donation
              </Text>
              <Ionicons name="send" size={18} color="white" />
            </TouchableOpacity>
            <Text className="text-[10px] font-jakarta-medium text-center text-gray-400 mt-6 px-10 leading-4">
              By submitting, you guarantee the freshness and safety standards of the food shared.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonateStep2Screen;
