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
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      {/* Header */}
      <View className="px-6 py-6 flex-row items-center justify-between">
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={28} color={Colors.heading} />
        </TouchableOpacity>

        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity className="relative">
            <Ionicons name="notifications-outline" size={30} color={Colors.heading} />
            <View
              className={`absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-[1px] border-[${Colors.background}]`}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?u=hassan" }}
              className="w-10 h-10 rounded-full border border-gray-100"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        <View className="px-6 pt-2">
          {/* Greeting */}
          <View className="mb-6">
            <View className="flex-row items-center">
              <Text className="text-3xl font-jakarta-extrabold" style={{ color: Colors.heading }}>
                Hi, Hassan!
              </Text>
              <Text className="text-3xl ml-2">👋</Text>
            </View>
            <Text className="text-base font-jakarta mt-1" style={{ color: Colors.text }}>
              Ready to warm some hearts today?
            </Text>
          </View>

          {/* Hero Card */}
          <LinearGradient
            colors={[Colors.primary, "#FFB347"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 40, height: 250, padding: 20 }}
          >
            {/* Background Fork Icon */}
            <Image
              source={require("../assets/images/fork-icon.png")}
              style={{
                position: "absolute",
                right: -15,
                bottom: -40,
                width: 180,
                height: 180,
                transform: [{ rotate: "10deg" }],
              }}
              resizeMode="contain"
            />

            <View className="flex-row items-center mb-4">
              <View className="bg-white/20 p-2 rounded-lg">
                <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="white"
                  />
                  <Path d="M12 18l-1.5-1.5a10 10 0 0 1-3.5-6.5V9a2 2 0 0 1 4 0v1h2V9a2 2 0 0 1 4 0v1a10 10 0 0 1-3.5 6.5L12 18z" fill="white" opacity="0.3" />
                </Svg>
              </View>
              <Text className="text-white font-jakarta-bold ml-2 uppercase tracking-widest text-[10px]">
                Community Hero
              </Text>
            </View>
            <Text className="text-white text-4xl font-jakarta-extrabold mb-2">
              Donate Food
            </Text>
            <Text className="text-white/80 font-jakarta text-sm mb-8 leading-5">
              Quickly list surplus food and{"\n"}connect with nearby shelters.
            </Text>

            <TouchableOpacity
              className="bg-white rounded-full py-4 px-8 self-start flex-row items-center shadow-sm"
              onPress={() => navigation.navigate("Donate")}
            >
              <Text className="font-jakarta-bold mr-2" style={{ color: Colors.primary }}>
                Start Donation
              </Text>
              <Ionicons name="arrow-forward" size={18} color={Colors.primary} />
            </TouchableOpacity>
          </LinearGradient>

          {/* Stats Grid (2 Cards) */}
          <View className="mt-8 flex-row justify-between mb-8">
            {/* People Fed Card */}
            <View className="bg-white p-6 rounded-[35px] flex-1 mr-4 shadow-sm shadow-blue-50">
              <View className="flex-row items-center mb-4">
                <View className="bg-green-50 p-3 rounded-2xl">
                  <Ionicons name="people-outline" size={24} color="#10B981" />
                </View>
                <Text className="text-[10px] font-jakarta-bold ml-2 uppercase tracking-widest" style={{ color: Colors.grey }}>
                  People Fed
                </Text>
              </View>
              <Text className="text-4xl font-jakarta-extrabold" style={{ color: Colors.heading }}>8,432</Text>
              <Text className="text-xs font-jakarta mt-1" style={{ color: Colors.text }}>Total Impact</Text>
            </View>

            {/* Donation Count Card */}
            <View className="bg-white p-6 rounded-[35px] flex-1 shadow-sm shadow-blue-50">
              <View className="flex-row items-center mb-4">
                <View className="bg-orange-50 p-3 rounded-2xl">
                  <Ionicons name="gift-outline" size={24} color={Colors.primary} />
                </View>
                <Text className="text-[10px] font-jakarta-bold ml-2 uppercase tracking-widest" style={{ color: Colors.grey }}>
                  Donations
                </Text>
              </View>
              <Text className="text-4xl font-jakarta-extrabold" style={{ color: Colors.heading }}>156</Text>
              <Text className="text-xs font-jakarta mt-1" style={{ color: Colors.text }}>Contributions</Text>
            </View>
          </View>

          {/* Recent Requests */}
          <View className="flex-row justify-between items-end mb-6 px-1">
            <Text className="text-xl font-jakarta-extrabold" style={{ color: Colors.heading }}>
              Recent Requests
            </Text>
            <TouchableOpacity>
              <Text className="text-xs font-jakarta-bold uppercase tracking-widest" style={{ color: Colors.primary }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="gap-y-4 mb-10">
            {[
              { title: "Marriage Hall", desc: "25kg Biryani • 2h ago", status: "URGENT", color: "#FEE2E2", textColor: "#EF4444", icon: "restaurant-outline" },
              { title: "Bakery", desc: "10 Boxes • 5h ago", status: "SCHEDULED", color: "#E0F2FE", textColor: "#0EA5E9", icon: "fast-food-outline" },
              { title: "Superstore", desc: "Fresh Veggies • 1d ago", status: "PENDING", color: "#F3F4F6", textColor: "#6B7280", icon: "storefront-outline" },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                className="bg-white p-5 rounded-[25px] flex-row items-center shadow-sm shadow-blue-100"
              >
                <View className="bg-orange-50 p-3 rounded-2xl">
                  <Ionicons name={item.icon as any} size={24} color={Colors.primary} />
                </View>
                <View className="flex-1 ml-4">
                  <Text className="text-base font-jakarta-bold" style={{ color: Colors.heading }}>{item.title}</Text>
                  <Text className="text-xs font-jakarta" style={{ color: Colors.text }}>{item.desc}</Text>
                </View>
                <View style={{ backgroundColor: item.color }} className="px-3 py-1 rounded-lg">
                  <Text style={{ color: item.textColor }} className="text-[8px] font-jakarta-bold uppercase">
                    {item.status}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Your Impact */}
          <View className="bg-white p-8 rounded-[35px] border border-white shadow-xl shadow-blue-100">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-jakarta-extrabold" style={{ color: Colors.heading }}>
                Your Impact
              </Text>
              <View className="bg-green-50 px-3 py-1 rounded-full">
                <Text className="text-[10px] font-jakarta-bold" style={{ color: "#10B981" }}>
                  +12% this month
                </Text>
              </View>
            </View>
            <Text className="font-jakarta text-sm leading-6" style={{ color: Colors.text }}>
              You've helped feed over <Text className="font-jakarta-bold" style={{ color: Colors.heading }}>3,420 people</Text> in your local district.
            </Text>
          </View>

        </View>
      </ScrollView>

      {/* Tracking Snackbar (Always Visible) */}
      <TrackingSnackbar/>
    </SafeAreaView>
  );
};

export default DashboardScreen;
