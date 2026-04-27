import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const { height, width } = Dimensions.get("window");

const RiderTrackingScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Map Section (Full background placeholder) */}
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200" }}
          style={styles.mapImage}
          className="opacity-40"
        />

        {/* Custom Header Overlay */}
        <View style={styles.headerContainer}>
          <View className="flex-row justify-between items-center px-6 py-4">
            <TouchableOpacity onPress={() => navigation.goBack()} className="bg-white p-3 rounded-2xl shadow-sm">
              <Ionicons name="arrow-back" size={20} color={Colors.heading} />
            </TouchableOpacity>
            <Text className="text-lg font-jakarta-extrabold text-heading">
              Live Tracking
            </Text>
            <TouchableOpacity className="bg-white p-3 rounded-2xl shadow-sm">
              <MaterialCommunityIcons name="dots-vertical" size={20} color={Colors.heading} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Map Markers Overlay */}
        <View className="absolute top-[30%] left-[40%] items-center">
          <View className="bg-orange-500 p-3 rounded-2xl shadow-lg">
            <Ionicons name="location" size={24} color="white" />
          </View>
          <View className="bg-white px-4 py-1.5 rounded-full mt-2 shadow-sm border border-gray-100">
            <Text className="text-[10px] font-jakarta-bold text-heading uppercase">Pickup Point</Text>
          </View>
        </View>

        <View className="absolute top-[45%] right-[20%] items-center">
           <View className="bg-white p-4 rounded-3xl shadow-xl border border-gray-50 items-center justify-center">
             <MaterialCommunityIcons name="moped" size={28} color={Colors.primary} />
           </View>
           <View className="bg-orange-500 px-4 py-1.5 rounded-full mt-2 shadow-lg">
             <Text className="text-[10px] font-jakarta-extrabold text-white uppercase">Ali is 4 mins away</Text>
           </View>
        </View>
      </View>

      {/* Bottom Sheet Section */}
      <View style={styles.bottomSheet}>
        <View className="items-center mt-3 mb-6">
          <View className="w-12 h-1.5 bg-gray-100 rounded-full" />
        </View>

        <View className="px-8">
          <View className="flex-row justify-between items-center mb-8">
            <View>
              <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-widest mb-1">
                Status
              </Text>
              <Text className="text-2xl font-jakarta-extrabold text-heading">
                Donation Transit
              </Text>
            </View>
            <View className="bg-orange-50 px-4 py-2 rounded-2xl">
              <Text className="text-xs font-jakarta-extrabold text-primary">
                Estimated 12:45
              </Text>
            </View>
          </View>

          {/* Timeline */}
          <View className="flex-row mb-10">
            {[
              { icon: "checkmark", color: "#10B981", active: true },
              { icon: "checkmark", color: "#10B981", active: true },
              { icon: "swap-horizontal", color: "#FF8C00", active: true },
              { icon: "radio-button-off", color: "#D1D5DB", active: false },
            ].map((step, index) => (
              <View key={index} className="flex-1 flex-row items-center">
                <View
                  className={`w-10 h-10 rounded-full items-center justify-center shadow-sm ${
                    step.active ? "" : "bg-white border-2 border-gray-100"
                  }`}
                  style={{ backgroundColor: step.active ? step.color : "white" }}
                >
                  <Ionicons name={step.icon as any} size={18} color={step.active ? "white" : "#D1D5DB"} />
                </View>
                {index !== 3 && (
                  <View className={`h-[2px] flex-1 ${step.active ? "bg-orange-500" : "bg-gray-100"}`} />
                )}
              </View>
            ))}
          </View>

          {/* Rider Details Card */}
          <View className="bg-white rounded-[35px] p-6 border border-gray-50 shadow-sm shadow-blue-50 flex-row items-center mb-10">
            <View className="relative">
              <Image
                source={{ uri: "https://i.pravatar.cc/150?u=ali" }}
                className="w-16 h-16 rounded-3xl"
              />
              <View className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </View>
            <View className="flex-1 ml-4">
              <Text className="text-base font-jakarta-extrabold text-heading">Ali Khan</Text>
              <View className="flex-row items-center mt-1">
                 <MaterialCommunityIcons name="moped" size={14} color={Colors.grey} />
                 <Text className="text-xs font-jakarta-medium text-gray-400 ml-1">Electric Scooter</Text>
              </View>
            </View>
            <View className="flex-row gap-x-3">
              <TouchableOpacity className="bg-orange-500 p-4 rounded-3xl shadow-lg shadow-orange-100">
                <Ionicons name="call" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 p-4 rounded-3xl">
                <Ionicons name="chatbubble" size={20} color={Colors.heading} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mapContainer: {
    height: height * 0.55,
    backgroundColor: "#E5E7EB",
  },
  mapImage: {
    width: width,
    height: "100%",
    resizeMode: "cover",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F9FBFC",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
});

export default RiderTrackingScreen;
