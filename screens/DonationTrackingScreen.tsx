import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const DonationTrackingScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Premium Header */}
      <View className="px-6 py-4 flex-row justify-between items-center bg-white border-b border-gray-50">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="bg-gray-50 w-12 h-12 rounded-2xl items-center justify-center"
        >
          <Ionicons name="arrow-back" size={24} color={Colors.heading} />
        </TouchableOpacity>
        <Text className="text-xl font-jakarta-extrabold text-heading">
          Donation Tracking
        </Text>
        <TouchableOpacity className="bg-gray-50 w-12 h-12 rounded-2xl items-center justify-center">
          <Ionicons name="ellipsis-vertical" size={20} color={Colors.heading} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
        <View className="px-6 pt-8">
          
          {/* Request ID Hero Card */}
          <View className="bg-white rounded-[45px] p-8 border border-gray-50 shadow-xl shadow-blue-50/50 mb-10">
            <View className="flex-row justify-between items-start mb-8">
              <View>
                <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[3px] mb-2">
                  Request ID
                </Text>
                <Text className="text-4xl font-jakarta-extrabold text-heading">
                  #AFR-9921
                </Text>
              </View>
              <View className="bg-orange-500 px-4 py-2 rounded-2xl shadow-lg shadow-orange-100">
                <Text className="text-[10px] font-jakarta-extrabold text-white uppercase tracking-widest">
                  IN TRANSIT
                </Text>
              </View>
            </View>

            <View className="h-[1px] bg-gray-50 w-full mb-8" />

            <View className="flex-row justify-between items-center">
               <View className="flex-row items-center">
                  <View className="bg-green-100 w-10 h-10 rounded-2xl items-center justify-center mr-3">
                     <Ionicons name="time" size={20} color="#10B981" />
                  </View>
                  <View>
                     <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase">Estimated Delivery</Text>
                     <Text className="text-sm font-jakarta-extrabold text-heading">Today, 12:45 PM</Text>
                  </View>
               </View>
               <TouchableOpacity className="bg-gray-50 p-4 rounded-2xl">
                  <Ionicons name="refresh" size={20} color={Colors.primary} />
               </TouchableOpacity>
            </View>
          </View>

          {/* Live Rider Map Preview Card */}
          <View className="mb-10">
            <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6 ml-1">
              Live Rider Tracking
            </Text>
            <TouchableOpacity 
              activeOpacity={0.9}
              onPress={() => navigation.navigate("RiderTracking")}
              className="bg-white rounded-[45px] overflow-hidden border border-gray-50 shadow-xl shadow-blue-50/50 relative"
            >
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000" }}
                className="w-full h-56 opacity-80"
              />
              {/* Pulsing Marker Overlay */}
              <View className="absolute top-[40%] left-[50%] -ml-8 -mt-8">
                 <View className="w-16 h-16 bg-orange-500/20 rounded-full items-center justify-center">
                    <View className="w-10 h-10 bg-orange-500 rounded-2xl items-center justify-center border-2 border-white shadow-2xl">
                      <MaterialCommunityIcons name="moped" size={22} color="white" />
                    </View>
                 </View>
              </View>
              
              <View className="absolute bottom-6 left-6 right-6 bg-white/95 p-5 rounded-[30px] backdrop-blur-md flex-row items-center justify-between shadow-2xl">
                <View className="flex-row items-center">
                  <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  <Text className="text-xs font-jakarta-extrabold text-heading">Ali is 1.2 km away</Text>
                </View>
                <View className="bg-orange-500 px-5 py-2 rounded-xl">
                  <Text className="text-[10px] font-jakarta-extrabold text-white uppercase tracking-widest">Open Map</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Journey Progress Timeline */}
          <View className="mb-10">
            <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6 ml-1">
              Journey Timeline
            </Text>
            <View className="bg-white rounded-[45px] p-10 border border-gray-50 shadow-xl shadow-blue-50/50">
              {[
                { title: "Request Submitted", time: "09:42 AM", status: "completed" },
                { title: "Under Verification", time: "10:15 AM", status: "completed" },
                { title: "Donation Accepted", time: "10:45 AM", status: "active" },
                { title: "Rider Out for Pickup", time: "Pending", status: "pending" },
                { title: "Delivered to Shelter", time: "Pending", status: "pending" },
              ].map((step, index) => (
                <View key={index} className="flex-row mb-10 last:mb-0">
                  <View className="items-center mr-6">
                    <View
                      className={`w-7 h-7 rounded-full items-center justify-center ${
                        step.status === "completed" ? "bg-orange-500" : 
                        step.status === "active" ? "bg-white border-[3px] border-orange-500" : "bg-gray-100"
                      }`}
                    >
                      {step.status === "completed" ? (
                        <Ionicons name="checkmark" size={16} color="white" />
                      ) : step.status === "active" ? (
                        <View className="w-2 h-2 rounded-full bg-orange-500" />
                      ) : null}
                    </View>
                    {index !== 4 && (
                      <View className={`w-[2px] h-14 ${step.status === "completed" ? "bg-orange-500" : "bg-gray-100"}`} />
                    )}
                  </View>
                  <View className="flex-1 pt-0.5">
                    <Text
                      className={`text-base font-jakarta-bold ${
                        step.status === "pending" ? "text-gray-300" : 
                        step.status === "active" ? "text-orange-500" : "text-heading"
                      }`}
                    >
                      {step.title}
                    </Text>
                    <Text className="text-xs font-jakarta-medium text-gray-400 mt-1">
                      {step.time}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Donation Content Summary */}
          <View className="mb-10">
            <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6 ml-1">
              Donation Manifest
            </Text>
            <View className="bg-white rounded-[45px] overflow-hidden border border-gray-50 shadow-xl shadow-blue-50/50">
              {[
                { title: "Chicken Biryani", category: "Fresh Cooked", qty: "15kg", icon: "food-variant" },
                { title: "Traditional Roti", category: "Sides", qty: "50 Qty", icon: "cookie" },
                { title: "Meat Curry", category: "Main Course", qty: "2 Bowls", icon: "pot-steam" },
              ].map((item, index) => (
                <View key={index} className={`flex-row items-center p-6 ${index !== 2 ? "border-b border-gray-50" : ""}`}>
                  <View className="bg-orange-50 w-14 h-14 rounded-2xl items-center justify-center mr-5">
                    <MaterialCommunityIcons name={item.icon as any} size={24} color={Colors.primary} />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-jakarta-bold text-heading">{item.title}</Text>
                    <Text className="text-xs font-jakarta-medium text-gray-400">{item.category}</Text>
                  </View>
                  <Text className="text-sm font-jakarta-extrabold text-primary">{item.qty}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Rider Quick Action */}
          <View className="mb-10">
            <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6 ml-1">
              Rider Contact
            </Text>
            <View className="bg-white rounded-[45px] p-6 flex-row items-center justify-between border border-gray-50 shadow-xl shadow-blue-50/50">
              <View className="flex-row items-center">
                <Image
                  source={{ uri: "https://i.pravatar.cc/150?u=ali" }}
                  className="w-16 h-16 rounded-[24px] border-2 border-gray-50 mr-4"
                />
                <View>
                  <Text className="text-lg font-jakarta-extrabold text-heading">Ali Khan</Text>
                  <View className="flex-row items-center mt-1">
                    <Ionicons name="star" size={14} color="#FBBF24" />
                    <Text className="text-xs font-jakarta-bold text-gray-400 ml-1">4.9 RATING</Text>
                  </View>
                </View>
              </View>
              <View className="flex-row gap-x-3">
                <TouchableOpacity className="bg-orange-500 w-14 h-14 rounded-2xl items-center justify-center shadow-xl shadow-orange-100">
                  <Ionicons name="call" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Support Section */}
          <View className="mb-12">
            <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6 ml-1">
              Support & Assistance
            </Text>
            <View className="flex-row gap-x-4">
              <TouchableOpacity className="flex-1 bg-white p-6 rounded-[35px] border border-gray-50 shadow-sm shadow-blue-50 items-center flex-row justify-center">
                <Ionicons name="business" size={20} color={Colors.primary} />
                <Text className="text-xs font-jakarta-extrabold text-heading ml-3">BRANCH</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-white p-6 rounded-[35px] border border-gray-50 shadow-sm shadow-blue-50 items-center flex-row justify-center">
                <Ionicons name="chatbubbles" size={20} color="#3B82F6" />
                <Text className="text-xs font-jakarta-extrabold text-blue-500 ml-3">COMPLAIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default DonationTrackingScreen;
