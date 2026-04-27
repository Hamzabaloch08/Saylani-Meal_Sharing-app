import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
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
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
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
              <Text className="text-[10px] font-jakarta-bold uppercase tracking-[1.5px]" style={{ color: Colors.primary }}>
                Step 1 of 2
              </Text>
              <Text className="text-[10px] font-jakarta-bold uppercase tracking-[1.5px] text-gray-400">
                Details
              </Text>
            </View>
            <View className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <View className="h-full bg-orange-500 rounded-full" style={{ width: "50%" }} />
            </View>
          </View>

          {/* Title Section */}
          <View className="mb-8">
            <Text className="text-4xl font-jakarta-extrabold" style={{ color: Colors.heading }}>
              Tell us about
            </Text>
            <Text className="text-4xl font-jakarta-extrabold" style={{ color: Colors.primary }}>
              the food
            </Text>
            <Text className="text-sm font-jakarta text-gray-400 mt-2 leading-6">
              Your contribution helps us match donations with local community needs accurately.
            </Text>
          </View>

          {/* Image Upload Area */}
          <TouchableOpacity 
            className="mb-10 bg-gray-50 border-2 border-dashed border-gray-200 rounded-[40px] h-60 items-center justify-center overflow-hidden"
            activeOpacity={0.7}
          >
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop' }} 
              className="absolute w-full h-full opacity-10"
            />
            <View className="bg-white p-4 rounded-3xl shadow-sm mb-4">
              <Ionicons name="camera-outline" size={32} color={Colors.primary} />
            </View>
            <Text className="font-jakarta-bold text-base" style={{ color: Colors.heading }}>
              Add Food Photos
            </Text>
            <Text className="text-xs font-jakarta text-gray-400 mt-1">
              Maximum 3 high-quality shots
            </Text>
            
            <View className="absolute bottom-6 right-6 bg-white p-3 rounded-2xl shadow-lg">
              <Ionicons name="camera" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>

          {/* Category Section */}
          <View className="mb-10">
            <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400 mb-6">
              Food Category
            </Text>
            <View className="flex-row flex-wrap gap-4">
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setSelectedCategory(cat.id)}
                  style={{
                    backgroundColor: selectedCategory === cat.id ? Colors.primary : Colors.white,
                    width: (width - 64) / 2,
                    shadowColor: selectedCategory === cat.id ? Colors.primary : "#000",
                    shadowOpacity: selectedCategory === cat.id ? 0.3 : 0.05,
                    shadowRadius: 10,
                    elevation: 5,
                  }}
                  className="flex-row items-center p-4 rounded-3xl"
                >
                  <MaterialCommunityIcons 
                    name={cat.icon as any} 
                    size={20} 
                    color={selectedCategory === cat.id ? "white" : Colors.primary} 
                  />
                  <Text 
                    className="ml-3 font-jakarta-bold text-sm"
                    style={{ color: selectedCategory === cat.id ? "white" : Colors.heading }}
                  >
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Servings Section */}
          <View className="mb-10 bg-white p-8 rounded-[40px] shadow-sm shadow-blue-50 border border-gray-50">
            <View className="flex-row justify-between items-center mb-8">
              <Text className="text-[10px] font-jakarta-bold uppercase tracking-[2px] text-gray-400">
                Estimated Servings
              </Text>
              <View className="flex-row items-end">
                <Text className="text-4xl font-jakarta-extrabold" style={{ color: Colors.heading }}>
                  {servings}
                </Text>
                <Text className="text-lg font-jakarta-bold ml-1 mb-1" style={{ color: Colors.primary }}>+</Text>
              </View>
            </View>

            {/* Slider Placeholder (using View as requested before) */}
            <View className="h-10 justify-center">
              <View className="h-1.5 w-full bg-gray-100 rounded-full">
                <View 
                  className="h-full bg-orange-500 rounded-full relative" 
                  style={{ width: `${(servings / 100) * 100}%` }} 
                >
                  <View className="absolute right-0 top-[-8px] w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md" />
                </View>
              </View>
            </View>
            
            <View className="flex-row justify-between mt-4">
              <Text className="text-[9px] font-jakarta-bold text-gray-300 uppercase">10 Pers</Text>
              <Text className="text-[9px] font-jakarta-bold text-gray-300 uppercase">50 Pers</Text>
              <Text className="text-[9px] font-jakarta-bold text-gray-300 uppercase">100+ Pers</Text>
            </View>
          </View>

          {/* Scheduling Section */}
          <View className="mb-6">
            <Text className="text-2xl font-jakarta-extrabold mb-6" style={{ color: Colors.heading }}>
              Scheduling
            </Text>
            
            <View className="flex-row gap-x-4">
              <View className="flex-1">
                <Text className="text-[10px] font-jakarta-bold uppercase tracking-[1.5px] text-gray-400 mb-3">
                  Ready Time
                </Text>
                <TouchableOpacity className="bg-white p-5 rounded-3xl flex-row items-center justify-between border border-gray-50 shadow-sm shadow-blue-50">
                  <Text className="font-jakarta-bold" style={{ color: Colors.heading }}>12:00 PM</Text>
                  <Ionicons name="time-outline" size={20} color={Colors.primary} />
                </TouchableOpacity>
              </View>

              <View className="flex-1">
                <Text className="text-[10px] font-jakarta-bold uppercase tracking-[1.5px] text-gray-400 mb-3">
                  Expiry Notice
                </Text>
                <TouchableOpacity className="bg-white p-5 rounded-3xl flex-row items-center justify-between border border-gray-50 shadow-sm shadow-blue-50">
                  <Text className="font-jakarta-bold" style={{ color: Colors.heading }}>06:00 PM</Text>
                  <MaterialCommunityIcons name="hourglass-empty" size={20} color={Colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Footer Button - Non-sticky */}
          <View className="py-10 mt-4">
            <TouchableOpacity 
              className="bg-orange-500 py-6 rounded-[30px] flex-row items-center justify-center shadow-lg shadow-orange-200"
              onPress={() => navigation.navigate("DonateStep2")}
            >
              <Text className="text-white font-jakarta-extrabold text-base uppercase tracking-widest mr-2">
                Continue
              </Text>
              <Ionicons name="chevron-forward" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonateStep1Screen;
