import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Path, Svg } from "react-native-svg";
import TrackingSnackbar from "../components/TrackingSnackbar";
import { Colors } from "../constants/Colors";

const DashboardScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#F9FBFC" }}
    >
      <StatusBar barStyle="dark-content" />

      {/* Header - Pixel Perfect Alignment */}
      <View className="px-6 py-4 flex-row items-center justify-between">
        <TouchableOpacity className="bg-white w-12 h-12 rounded-2xl items-center justify-center shadow-sm shadow-gray-100 border border-gray-50">
          <Ionicons name="grid-outline" size={22} color={Colors.heading} />
        </TouchableOpacity>

        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity className="relative bg-white w-12 h-12 rounded-2xl items-center justify-center shadow-sm shadow-gray-100 border border-gray-50">
            <Ionicons name="notifications-outline" size={24} color={Colors.heading} />
            <View className="absolute top-3 right-3 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white" />
          </TouchableOpacity>

          <TouchableOpacity className="border-2 border-orange-100 rounded-2xl p-0.5">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?u=hassan" }}
              className="w-10 h-10 rounded-[14px]"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <View className="px-6 pt-4">
          {/* Greeting Section */}
          <View className="mb-8">
            <View className="flex-row items-center">
              <Text className="text-3xl font-jakarta-extrabold text-heading">
                Hi, Hassan!
              </Text>
              <Text className="text-3xl ml-2">👋</Text>
            </View>
            <Text className="text-sm font-jakarta-medium text-gray-400 mt-1">
              Every donation counts towards a better world.
            </Text>
          </View>

          {/* Hero Card - Overhauled for Premium Aesthetics */}
          <TouchableOpacity 
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Donate")}
            className="mb-10"
          >
            <LinearGradient
              colors={[Colors.primary, "#FFA533"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="rounded-[40px] p-8 overflow-hidden shadow-2xl shadow-orange-200"
              style={{ height: 260 }}
            >
              {/* Abstract Background Elements */}
              <View className="absolute -right-10 -bottom-10 opacity-20">
                 <MaterialCommunityIcons name="food-apple" size={250} color="white" />
              </View>

              <View className="flex-row items-center mb-6">
                <View className="bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md">
                  <Text className="text-white font-jakarta-bold text-[10px] uppercase tracking-[2px]">
                    Featured Impact
                  </Text>
                </View>
              </View>

              <Text className="text-white text-4xl font-jakarta-extrabold leading-tight">
                Donate Food{"\n"}<Text className="text-white/80">Save Lives</Text>
              </Text>
              <Text className="text-white/90 font-jakarta-medium text-sm mt-3 mb-8">
                Connect surplus food with those{"\n"}who need it most today.
              </Text>

              <View className="bg-white rounded-2xl py-3.5 px-6 self-start flex-row items-center shadow-lg">
                <Text className="font-jakarta-extrabold text-xs mr-2 text-primary">
                  START DONATING
                </Text>
                <Ionicons name="arrow-forward" size={16} color={Colors.primary} />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Stats Grid - Symmetrical & Clean */}
          <View className="flex-row gap-x-4 mb-10">
            <View className="flex-1 bg-white p-6 rounded-[35px] border border-gray-50 shadow-sm shadow-blue-50">
              <View className="bg-green-50 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                <Ionicons name="people" size={24} color="#10B981" />
              </View>
              <Text className="text-3xl font-jakarta-extrabold text-heading">8.4k</Text>
              <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-widest mt-1">People Fed</Text>
            </View>

            <View className="flex-1 bg-white p-6 rounded-[35px] border border-gray-50 shadow-sm shadow-blue-50">
              <View className="bg-orange-50 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                <Ionicons name="gift" size={24} color={Colors.primary} />
              </View>
              <Text className="text-3xl font-jakarta-extrabold text-heading">156</Text>
              <Text className="text-[10px] font-jakarta-bold text-gray-400 uppercase tracking-widest mt-1">Donations</Text>
            </View>
          </View>

          {/* Recent Activity List */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-xl font-jakarta-extrabold text-heading">
              Recent Requests
            </Text>
            <TouchableOpacity>
              <Text className="text-xs font-jakarta-extrabold text-primary uppercase tracking-widest">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="gap-y-4 mb-10">
            {[
              { title: "Marriage Hall", desc: "25kg Biryani • 2h ago", status: "URGENT", color: "#FEE2E2", textColor: "#EF4444", icon: "restaurant" },
              { title: "KFC Store", desc: "10 Boxes • 5h ago", status: "PENDING", color: "#FEF3C7", textColor: "#D97706", icon: "fast-food" },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white p-5 rounded-[30px] flex-row items-center border border-gray-50 shadow-sm shadow-blue-50"
              >
                <View className="bg-gray-50 w-14 h-14 rounded-2xl items-center justify-center">
                  <Ionicons name={item.icon as any} size={24} color={Colors.primary} />
                </View>
                <View className="flex-1 ml-4">
                  <Text className="text-base font-jakarta-bold text-heading">{item.title}</Text>
                  <Text className="text-xs font-jakarta-medium text-gray-400">{item.desc}</Text>
                </View>
                <View style={{ backgroundColor: item.color }} className="px-3 py-1.5 rounded-xl">
                  <Text style={{ color: item.textColor }} className="text-[9px] font-jakarta-extrabold">
                    {item.status}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Impact Insight Card */}
          <LinearGradient
            colors={["#1E293B", "#0F172A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="p-8 rounded-[40px] shadow-2xl shadow-slate-200"
          >
            <View className="flex-row justify-between items-center mb-4">
              <View className="bg-white/10 p-2 rounded-xl">
                 <Ionicons name="trending-up" size={20} color="#10B981" />
              </View>
              <Text className="text-[#10B981] font-jakarta-extrabold text-[10px]">MONTHLY GROWTH +12%</Text>
            </View>
            <Text className="text-white text-lg font-jakarta-bold leading-7">
              You've helped feed over <Text className="text-orange-400">3,420 people</Text> in your local district this year.
            </Text>
            <TouchableOpacity className="mt-6 flex-row items-center">
               <Text className="text-white/60 text-xs font-jakarta-bold mr-2">VIEW DETAILED INSIGHTS</Text>
               <Ionicons name="chevron-forward" size={14} color="rgba(255,255,255,0.4)" />
            </TouchableOpacity>
          </LinearGradient>

        </View>
      </ScrollView>

      {/* Floating Tracking Snackbar */}
      <TrackingSnackbar />
    </SafeAreaView>
  );
};

export default DashboardScreen;
