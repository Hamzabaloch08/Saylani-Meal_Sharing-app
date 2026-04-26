import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const categories = [
  { id: "rice", label: "Rice", icon: "bowl-mix-outline" },
  { id: "roti", label: "Roti", icon: "cookie-outline" },
  { id: "curry", label: "Curry", icon: "pot-steam-outline" },
  { id: "others", label: "Others", icon: "dots-horizontal" },
];

const DonateStep1Screen = () => {
  const navigation = useNavigation<any>();
  const [selectedCategory, setSelectedCategory] = useState("rice");
  const [servings, setServings] = useState(25);

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#F9FBFC" }}>
      <StatusBar barStyle="dark-content" />
      
      {/* Premium Header */}
      <View className="px-6 py-4 flex-row items-center justify-between">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="bg-white w-12 h-12 rounded-2xl items-center justify-center shadow-sm shadow-gray-100 border border-gray-50"
        >
          <Ionicons name="arrow-back" size={24} color={Colors.heading} />
        </TouchableOpacity>
        <Text className="text-xl font-jakarta-extrabold text-heading">Donate Food</Text>
        <View className="w-12" /> {/* Spacer */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-6 pt-6">
          
          {/* Enhanced Progress Indicator */}
          <View className="mb-10 px-1">
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-row items-center">
                 <View className="bg-orange-500 w-2 h-2 rounded-full mr-2" />
                 <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-orange-500">
                    PHASE 1: DETAILS
                 </Text>
              </View>
              <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-300">
                Next: Location
              </Text>
            </View>
            <View className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <View className="h-full bg-orange-500 rounded-full" style={{ width: "50%" }} />
            </View>
          </View>

          {/* Dynamic Headline */}
          <View className="mb-10">
            <Text className="text-4xl font-jakarta-extrabold text-heading leading-tight">
              Share your{"\n"}<Text className="text-primary">generosity</Text>
            </Text>
            <Text className="text-sm font-jakarta-medium text-gray-400 mt-3 leading-6">
              Listing your surplus food helps us ensure no one in your community goes hungry today.
            </Text>
          </View>

          {/* Premium Image Upload Area */}
          <TouchableOpacity 
            className="mb-10 bg-white border-2 border-dashed border-orange-100 rounded-[45px] h-64 items-center justify-center overflow-hidden shadow-sm shadow-orange-50"
            activeOpacity={0.8}
          >
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000' }} 
              className="absolute w-full h-full opacity-5"
              resizeMode="cover"
            />
            <View className="bg-orange-50 w-20 h-20 rounded-[30px] items-center justify-center mb-4">
              <Ionicons name="camera" size={32} color={Colors.primary} />
            </View>
            <Text className="font-jakarta-extrabold text-lg text-heading">
              Add Food Photos
            </Text>
            <Text className="text-xs font-jakarta-medium text-gray-400 mt-1">
              Tap to capture or upload
            </Text>
            
            <View className="absolute bottom-6 right-8 bg-orange-500 w-12 h-12 rounded-2xl items-center justify-center shadow-lg shadow-orange-200">
              <Ionicons name="add" size={24} color="white" />
            </View>
          </TouchableOpacity>

          {/* Grid Category Section */}
          <View className="mb-10">
            <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-6 ml-1">
              Select Food Category
            </Text>
            <View className="flex-row flex-wrap gap-4">
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setSelectedCategory(cat.id)}
                  style={{
                    backgroundColor: selectedCategory === cat.id ? Colors.primary : "white",
                    width: (width - 64) / 2,
                    shadowColor: selectedCategory === cat.id ? Colors.primary : "#000",
                    shadowOpacity: selectedCategory === cat.id ? 0.2 : 0.03,
                    shadowRadius: 15,
                    elevation: 8,
                  }}
                  className={`flex-row items-center p-5 rounded-[28px] border ${selectedCategory === cat.id ? "border-primary" : "border-gray-50"}`}
                >
                  <MaterialCommunityIcons 
                    name={cat.icon as any} 
                    size={22} 
                    color={selectedCategory === cat.id ? "white" : Colors.primary} 
                  />
                  <Text 
                    className={`ml-3 font-jakarta-extrabold text-sm ${selectedCategory === cat.id ? "text-white" : "text-heading"}`}
                  >
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Overhauled Servings Picker */}
          <View className="mb-10 bg-white p-8 rounded-[45px] shadow-xl shadow-blue-50/50 border border-gray-50">
            <View className="flex-row justify-between items-center mb-10">
              <View>
                <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-1">
                  Estimated Servings
                </Text>
                <Text className="text-sm font-jakarta-medium text-gray-300">How many people can this feed?</Text>
              </View>
              <View className="bg-orange-50 px-5 py-3 rounded-2xl">
                <Text className="text-3xl font-jakarta-extrabold text-primary">
                  {servings}
                </Text>
              </View>
            </View>

            <View className="h-4 justify-center">
              <View className="h-2 w-full bg-gray-100 rounded-full">
                <View 
                  className="h-full bg-orange-500 rounded-full relative" 
                  style={{ width: `${(servings / 100) * 100}%` }} 
                >
                  <View className="absolute right-0 top-[-10px] w-7 h-7 bg-white border-[6px] border-orange-500 rounded-full shadow-lg" />
                </View>
              </View>
            </View>
            
            <View className="flex-row justify-between mt-6 px-1">
              <Text className="text-[9px] font-jakarta-extrabold text-gray-300">10 PERS</Text>
              <Text className="text-[9px] font-jakarta-extrabold text-gray-300">50 PERS</Text>
              <Text className="text-[9px] font-jakarta-extrabold text-gray-300">100+ PERS</Text>
            </View>
          </View>

          {/* Premium Scheduling Inputs */}
          <View className="mb-12">
            <Text className="text-xl font-jakarta-extrabold text-heading mb-6 ml-1">
              Time Sensitivity
            </Text>
            
            <View className="flex-row gap-x-4">
              <View className="flex-1">
                <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-4 ml-1">
                  Ready Time
                </Text>
                <TouchableOpacity className="bg-white p-6 rounded-[30px] flex-row items-center justify-between border border-gray-50 shadow-sm shadow-blue-50">
                  <Text className="font-jakarta-extrabold text-heading">12:00 PM</Text>
                  <Ionicons name="time" size={20} color={Colors.primary} />
                </TouchableOpacity>
              </View>

              <View className="flex-1">
                <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-4 ml-1">
                  Best Before
                </Text>
                <TouchableOpacity className="bg-white p-6 rounded-[30px] flex-row items-center justify-between border border-gray-50 shadow-sm shadow-blue-50">
                  <Text className="font-jakarta-extrabold text-heading">06:00 PM</Text>
                  <MaterialCommunityIcons name="timer-sand" size={20} color={Colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Final Action Button */}
          <View className="pb-10">
            <TouchableOpacity 
              activeOpacity={0.9}
              className="bg-orange-600 py-6 rounded-[35px] flex-row items-center justify-center shadow-2xl shadow-orange-300"
              onPress={() => navigation.navigate("DonateStep2")}
            >
              <Text className="text-white font-jakarta-extrabold text-base uppercase tracking-[2px] mr-2">
                Continue to location
              </Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonateStep1Screen;
