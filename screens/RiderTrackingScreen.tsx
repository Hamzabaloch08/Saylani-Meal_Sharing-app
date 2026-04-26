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
  ScrollView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const { height, width } = Dimensions.get("window");

const RiderTrackingScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200" }}
          style={styles.mapImage}
          className="opacity-50"
        />

        {/* Custom Header Overlay */}
        <View style={styles.headerContainer} className="px-6 py-4 flex-row justify-between items-center">
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            className="bg-white/90 w-12 h-12 rounded-2xl items-center justify-center shadow-lg shadow-gray-200 backdrop-blur-md"
          >
            <Ionicons name="arrow-back" size={24} color={Colors.heading} />
          </TouchableOpacity>
          <View className="bg-white/90 px-6 py-3 rounded-2xl shadow-lg shadow-gray-200 backdrop-blur-md flex-row items-center">
            <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />
            <Text className="text-sm font-jakarta-extrabold text-heading">
              Live Transit
            </Text>
          </View>
          <TouchableOpacity className="bg-white/90 w-12 h-12 rounded-2xl items-center justify-center shadow-lg shadow-gray-200 backdrop-blur-md">
            <Ionicons name="share-social" size={20} color={Colors.heading} />
          </TouchableOpacity>
        </View>

        {/* Map Markers */}
        {/* Pickup Point */}
        <View className="absolute top-[35%] left-[30%] items-center">
          <View className="w-10 h-10 bg-white rounded-2xl items-center justify-center shadow-xl border border-gray-100">
            <Ionicons name="location" size={20} color={Colors.primary} />
          </View>
        </View>

        {/* Rider Marker */}
        <View className="absolute top-[50%] right-[30%] items-center">
           <View className="relative">
             <View className="w-16 h-16 bg-orange-500/20 rounded-full items-center justify-center">
                <View className="w-10 h-10 bg-orange-500 rounded-2xl items-center justify-center border-2 border-white shadow-2xl">
                  <MaterialCommunityIcons name="moped" size={20} color="white" />
                </View>
             </View>
             <View className="absolute -top-12 -left-12 bg-white px-4 py-2 rounded-2xl shadow-lg border border-gray-50 min-w-[120px]">
                <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase">Ali is near</Text>
                <Text className="text-xs font-jakarta-extrabold text-heading">1.2 km away</Text>
                <View className="absolute -bottom-2 left-1/2 -ml-2 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-50" />
             </View>
           </View>
        </View>

        {/* Map Controls */}
        <View className="absolute right-6 bottom-[48%] flex-col gap-y-4">
           <TouchableOpacity className="bg-white w-12 h-12 rounded-2xl items-center justify-center shadow-lg border border-gray-50">
              <Ionicons name="locate" size={24} color={Colors.primary} />
           </TouchableOpacity>
           <TouchableOpacity className="bg-white w-12 h-12 rounded-2xl items-center justify-center shadow-lg border border-gray-50">
              <Ionicons name="layers" size={24} color={Colors.grey} />
           </TouchableOpacity>
        </View>
      </View>

      {/* Modern Bottom Sheet */}
      <View style={styles.bottomSheet} className="bg-white">
        <View className="items-center mt-3 mb-4">
          <View className="w-12 h-1.5 bg-gray-100 rounded-full" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
          <View className="px-8">
            {/* Header Info */}
            <View className="flex-row justify-between items-end mb-8">
              <View>
                <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-1">
                  Arriving in
                </Text>
                <Text className="text-4xl font-jakarta-extrabold text-heading">
                  4 <Text className="text-lg text-gray-400">mins</Text>
                </Text>
              </View>
              <View className="items-end">
                <Text className="text-xs font-jakarta-bold text-orange-500 mb-1">12:45 PM</Text>
                <Text className="text-[10px] font-jakarta-medium text-gray-400 uppercase">Estimated Delivery</Text>
              </View>
            </View>

            {/* Rider Quick Actions Card */}
            <View className="bg-gray-50/50 rounded-[40px] p-6 border border-gray-100 flex-row items-center mb-8">
               <View className="relative">
                 <Image
                   source={{ uri: "https://i.pravatar.cc/150?u=ali" }}
                   className="w-16 h-16 rounded-[24px]"
                 />
                 <View className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white items-center justify-center">
                    <Ionicons name="checkmark" size={12} color="white" />
                 </View>
               </View>
               <View className="flex-1 ml-4">
                 <Text className="text-lg font-jakarta-extrabold text-heading">Ali Khan</Text>
                 <View className="flex-row items-center mt-0.5">
                    <Ionicons name="star" size={14} color="#FBBF24" />
                    <Text className="text-xs font-jakarta-medium text-gray-400 ml-1">4.9 • 2.4k Deliveries</Text>
                 </View>
               </View>
               <View className="flex-row gap-x-2">
                 <TouchableOpacity className="bg-orange-500 w-12 h-12 rounded-2xl items-center justify-center shadow-lg shadow-orange-100">
                    <Ionicons name="call" size={20} color="white" />
                 </TouchableOpacity>
                 <TouchableOpacity className="bg-white w-12 h-12 rounded-2xl items-center justify-center shadow-sm border border-gray-100">
                    <Ionicons name="chatbubble-ellipses" size={20} color={Colors.heading} />
                 </TouchableOpacity>
               </View>
            </View>

            {/* Delivery Timeline */}
            <View className="mb-8">
               <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-[2px] mb-6">
                 Delivery Progress
               </Text>
               <View className="flex-row items-center justify-between">
                  {[
                    { label: "Request", status: "completed" },
                    { label: "Picked", status: "completed" },
                    { label: "Transit", status: "active" },
                    { label: "Done", status: "pending" },
                  ].map((step, index) => (
                    <View key={index} className="items-center flex-1">
                       <View className="flex-row items-center w-full">
                          <View className={`h-[2px] flex-1 ${index === 0 ? "bg-transparent" : step.status === "completed" || step.status === "active" ? "bg-orange-500" : "bg-gray-100"}`} />
                          <View className={`w-8 h-8 rounded-full items-center justify-center ${step.status === "completed" ? "bg-orange-500" : step.status === "active" ? "bg-white border-2 border-orange-500" : "bg-gray-100"}`}>
                             {step.status === "completed" ? (
                               <Ionicons name="checkmark" size={16} color="white" />
                             ) : step.status === "active" ? (
                               <View className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                             ) : null}
                          </View>
                          <View className={`h-[2px] flex-1 ${index === 3 ? "bg-transparent" : step.status === "completed" ? "bg-orange-500" : "bg-gray-100"}`} />
                       </View>
                       <Text className={`text-[10px] font-jakarta-bold mt-2 uppercase ${step.status === "pending" ? "text-gray-300" : step.status === "active" ? "text-orange-500" : "text-heading"}`}>
                          {step.label}
                       </Text>
                    </View>
                  ))}
               </View>
            </View>

            {/* Security Note */}
            <View className="bg-blue-50/50 p-6 rounded-[35px] border border-blue-100 flex-row items-center">
               <View className="bg-blue-100 w-12 h-12 rounded-2xl items-center justify-center mr-4">
                  <Ionicons name="shield-checkmark" size={24} color="#3B82F6" />
               </View>
               <View className="flex-1">
                  <Text className="text-sm font-jakarta-bold text-blue-900">Contactless Delivery</Text>
                  <Text className="text-[10px] font-jakarta-medium text-blue-600 leading-4 mt-0.5">Ali is following all safety protocols for a safe delivery.</Text>
               </View>
            </View>
          </View>
        </ScrollView>

        {/* Floating Bottom Nav Mock */}
        <View className="absolute bottom-6 left-8 right-8 bg-heading h-20 rounded-[30px] shadow-2xl flex-row items-center justify-around px-4">
          <TouchableOpacity className="items-center opacity-40">
            <Ionicons name="grid" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="items-center opacity-40">
            <Ionicons name="time" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-orange-500 w-14 h-14 rounded-2xl items-center justify-center -mt-8 shadow-xl shadow-orange-500/40">
             <Ionicons name="location" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="items-center opacity-40">
            <Ionicons name="chatbubble" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="items-center opacity-40">
            <Ionicons name="person" size={24} color="white" />
          </TouchableOpacity>
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
    backgroundColor: "#F3F4F6",
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
    zIndex: 10,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.5,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -20 },
    shadowOpacity: 0.05,
    shadowRadius: 30,
    elevation: 30,
  },
});

export default RiderTrackingScreen;
