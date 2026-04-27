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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color={Colors.heading} />
        </TouchableOpacity>
        <Text className="text-xl font-jakarta-extrabold text-heading">
          Donation Tracking
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
        {/* Request ID Card */}
        <View className="mx-6 mt-6 bg-white rounded-[35px] p-6 border border-gray-50 shadow-sm shadow-blue-50">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-widest mb-1">
                Request ID
              </Text>
              <Text className="text-2xl font-jakarta-extrabold text-heading">
                #AFR-9921
              </Text>
              <View className="bg-orange-50 px-3 py-1 rounded-full self-start mt-2">
                <Text className="text-[9px] font-jakarta-extrabold text-primary uppercase">
                  In Progress
                </Text>
              </View>
            </View>
            <TouchableOpacity className="bg-gray-50 p-4 rounded-3xl">
              <Ionicons name="refresh" size={24} color={Colors.grey} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Real-time Rider Tracking Map */}
        <View className="mx-6 mt-8">
          <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6">
            Rider Tracking
          </Text>
          <View className="bg-white rounded-[40px] overflow-hidden border border-gray-50 shadow-sm shadow-blue-50 relative">
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000" }}
              className="w-full h-48 opacity-70"
            />
            {/* Pulsing Rider Marker Overlay */}
            <View className="absolute top-[40%] left-[50%] -ml-6 -mt-6">
               <View className="w-12 h-12 bg-orange-500/20 rounded-full items-center justify-center">
                  <View className="w-8 h-8 bg-orange-500 rounded-full items-center justify-center border-2 border-white shadow-lg">
                    <MaterialCommunityIcons name="moped" size={18} color="white" />
                  </View>
               </View>
            </View>
            
            <View className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-3xl backdrop-blur-md flex-row items-center justify-between">
              <View>
                <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase">Estimated Arrival</Text>
                <Text className="text-sm font-jakarta-extrabold text-heading">4 mins • 1.2 km away</Text>
              </View>
              <TouchableOpacity 
                className="bg-orange-500 px-4 py-2 rounded-xl"
                onPress={() => navigation.navigate("RiderTracking")}
              >
                <Text className="text-[10px] font-jakarta-bold text-white uppercase">Live Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Journey Progress */}
        <View className="mx-6 mt-8">
          <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6">
            Journey Progress
          </Text>
          <View className="bg-white rounded-[40px] p-8 border border-gray-50 shadow-sm shadow-blue-50">
            {/* Steps */}
            {[
              { title: "Submitted", time: "09:42 AM", status: "completed" },
              { title: "Under Review", time: "10:15 AM", status: "completed" },
              { title: "Accepted by Branch", time: "10:45 AM • Processing", status: "active" },
              { title: "Rider Dispatched", time: "Pending", status: "pending" },
              { title: "Successfully Delivered", time: "Pending", status: "pending" },
            ].map((step, index) => (
              <View key={index} className="flex-row mb-6 last:mb-0">
                <View className="items-center mr-4">
                  <View
                    className={`w-6 h-6 rounded-full items-center justify-center ${
                      step.status === "completed" ? "bg-orange-500" : 
                      step.status === "active" ? "bg-white border-2 border-orange-500" : "bg-gray-200"
                    }`}
                  >
                    {step.status === "completed" ? (
                      <Ionicons name="checkmark" size={14} color="white" />
                    ) : step.status === "active" ? (
                      <View className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    ) : null}
                  </View>
                  {index !== 4 && (
                    <View className={`w-[2px] h-12 ${step.status === "completed" ? "bg-orange-500" : "bg-gray-100"}`} />
                  )}
                </View>
                <View className="flex-1 pt-0.5">
                  <Text
                    className={`text-sm font-jakarta-bold ${
                      step.status === "pending" ? "text-gray-300" : 
                      step.status === "active" ? "text-orange-500" : "text-heading"
                    }`}
                  >
                    {step.title}
                  </Text>
                  <Text className="text-[10px] font-jakarta-medium text-gray-400 mt-0.5">
                    {step.time}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Donation Manifest */}
        <View className="mx-6 mt-8">
          <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6">
            Donation Manifest
          </Text>
          <View className="bg-white rounded-[35px] overflow-hidden border border-gray-50 shadow-sm shadow-blue-50">
            {[
              { title: "Biryani", category: "Main Course", qty: "15kg", icon: "food-variant" },
              { title: "Fresh Rotis", category: "Sides", qty: "50 Qty", icon: "cookie" },
              { title: "Large Bowls of Curry", category: "Main Course", qty: "2 Qty", icon: "pot-steam" },
            ].map((item, index) => (
              <View key={index} className={`flex-row items-center p-5 ${index !== 2 ? "border-b border-gray-50" : ""}`}>
                <View className="bg-orange-50 p-3 rounded-2xl mr-4">
                  <MaterialCommunityIcons name={item.icon as any} size={20} color={Colors.primary} />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-jakarta-bold text-heading">{item.title}</Text>
                  <Text className="text-[10px] font-jakarta-medium text-gray-400">{item.category}</Text>
                </View>
                <Text className="text-sm font-jakarta-extrabold text-heading">{item.qty}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Rider Details */}
        <View className="mx-6 mt-8">
          <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6">
            Rider Details
          </Text>
          <View className="bg-white rounded-[35px] p-6 flex-row items-center justify-between border border-gray-50 shadow-sm shadow-blue-50">
            <View className="flex-row items-center">
              <Image
                source={{ uri: "https://i.pravatar.cc/150?u=ali" }}
                className="w-14 h-14 rounded-2xl border border-gray-100 mr-4"
              />
              <View>
                <Text className="text-sm font-jakarta-bold text-heading">Rider Ali Khan</Text>
                <View className="flex-row items-center mt-1">
                  <Ionicons name="star" size={12} color="#FBBF24" />
                  <Text className="text-[10px] font-jakarta-medium text-gray-400 ml-1">4.9 (2k+ deliveries)</Text>
                </View>
              </View>
            </View>
            <View className="flex-row gap-x-2">
              <TouchableOpacity className="bg-orange-500 p-4 rounded-3xl shadow-lg shadow-orange-100">
                <Ionicons name="call" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 p-4 rounded-3xl">
                <Ionicons name="chatbubble-ellipses" size={20} color={Colors.heading} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Support & Help Section */}
        <View className="mx-6 mt-8 mb-10">
          <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6">
            Support & Help
          </Text>
          <View className="flex-row gap-x-4">
            <TouchableOpacity className="flex-1 bg-white p-5 rounded-[30px] border border-gray-50 shadow-sm shadow-blue-50 items-center flex-row justify-center">
              <Ionicons name="business" size={18} color={Colors.primary} />
              <Text className="text-xs font-jakarta-bold text-heading ml-2">Call Branch</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-white p-5 rounded-[30px] border border-gray-50 shadow-sm shadow-blue-50 items-center flex-row justify-center">
              <Ionicons name="warning" size={18} color="#EF4444" />
              <Text className="text-xs font-jakarta-bold text-red-500 ml-2">Report Issue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav Mock */}
      <View className="bg-white pt-4 pb-10 px-8 border-t border-gray-50 flex-row justify-between">
        <View className="items-center opacity-40">
          <Ionicons name="home" size={22} color={Colors.grey} />
          <Text className="text-[8px] font-jakarta-bold mt-1 uppercase">Home</Text>
        </View>
        <View className="items-center">
          <MaterialCommunityIcons name="heart-multiple" size={22} color={Colors.primary} />
          <Text className="text-[8px] font-jakarta-bold mt-1 text-primary uppercase">Donations</Text>
        </View>
        <View className="items-center opacity-40">
          <Ionicons name="map" size={22} color={Colors.grey} />
          <Text className="text-[8px] font-jakarta-bold mt-1 uppercase">Map</Text>
        </View>
        <View className="items-center opacity-40">
          <Ionicons name="person" size={22} color={Colors.grey} />
          <Text className="text-[8px] font-jakarta-bold mt-1 uppercase">Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
});

export default DonationTrackingScreen;
