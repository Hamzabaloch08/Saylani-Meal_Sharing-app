import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const HistoryScreen = () => {
  const [activeTab, setActiveTab] = useState("active");

  const historyData = [
    {
      id: "1",
      title: "Marriage Hall Biryani",
      date: "24 Oct 2023 • 12:45 PM",
      status: "IN TRANSIT",
      amount: "25kg",
      type: "Cooked",
      icon: "food-variant",
      color: "#FEF3C7",
      textColor: "#D97706",
    },
    {
      id: "2",
      title: "Bakery Surplus",
      date: "22 Oct 2023 • 09:15 AM",
      status: "COMPLETED",
      amount: "15 Boxes",
      type: "Bakery",
      icon: "cookie",
      color: "#DCFCE7",
      textColor: "#166534",
    },
    {
      id: "3",
      title: "Fresh Vegetables",
      date: "20 Oct 2023 • 04:30 PM",
      status: "REJECTED",
      amount: "10kg",
      type: "Groceries",
      icon: "leaf",
      color: "#FEE2E2",
      textColor: "#991B1B",
    },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      className="bg-white mx-6 mb-6 p-6 rounded-[35px] border border-gray-50 shadow-sm shadow-blue-50"
    >
      <View className="flex-row items-center mb-6">
        <View className="bg-orange-50 w-14 h-14 rounded-[22px] items-center justify-center">
          <MaterialCommunityIcons name={item.icon} size={26} color={Colors.primary} />
        </View>
        <View className="flex-1 ml-4">
          <Text className="text-lg font-jakarta-extrabold text-heading leading-tight">{item.title}</Text>
          <Text className="text-xs font-jakarta-medium text-gray-400 mt-0.5">{item.date}</Text>
        </View>
        <View style={{ backgroundColor: item.color }} className="px-3 py-1.5 rounded-xl">
          <Text style={{ color: item.textColor }} className="text-[8px] font-jakarta-extrabold uppercase">
            {item.status}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between border-t border-gray-50 pt-5">
        <View className="flex-row items-center">
          <View className="bg-gray-50 px-4 py-2 rounded-xl flex-row items-center mr-3">
             <Ionicons name="scale" size={14} color={Colors.grey} />
             <Text className="text-[10px] font-jakarta-extrabold text-heading uppercase ml-2">{item.amount}</Text>
          </View>
          <View className="bg-gray-50 px-4 py-2 rounded-xl flex-row items-center">
             <Ionicons name="fast-food" size={14} color={Colors.grey} />
             <Text className="text-[10px] font-jakarta-extrabold text-heading uppercase ml-2">{item.type}</Text>
          </View>
        </View>
        <TouchableOpacity className="bg-gray-50 w-10 h-10 rounded-2xl items-center justify-center">
           <Ionicons name="chevron-forward" size={18} color={Colors.heading} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Premium Title Header */}
      <View className="px-6 py-6 mb-2">
        <Text className="text-4xl font-jakarta-extrabold text-heading">
          Donation<Text className="text-primary"> History</Text>
        </Text>
        <Text className="text-sm font-jakarta-medium text-gray-400 mt-1">Review your past contributions</Text>
      </View>

      {/* Modern Filter Tabs */}
      <View className="px-6 flex-row gap-x-3 mb-8">
        {["active", "completed", "rejected"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`px-6 py-3.5 rounded-2xl border ${activeTab === tab ? "bg-heading border-heading" : "bg-white border-gray-100 shadow-sm shadow-gray-50"}`}
          >
            <Text
              className={`text-[10px] font-jakarta-extrabold uppercase tracking-[1px] ${activeTab === tab ? "text-white" : "text-gray-400"}`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center pt-20">
            <View className="bg-gray-50 w-24 h-24 rounded-full items-center justify-center mb-6">
               <Ionicons name="calendar-outline" size={40} color="#D1D5DB" />
            </View>
            <Text className="text-lg font-jakarta-extrabold text-heading">No history yet</Text>
            <Text className="text-sm font-jakarta-medium text-gray-400 mt-2">Start your first donation today!</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default HistoryScreen;
