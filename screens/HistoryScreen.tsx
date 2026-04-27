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
      status: "IN PROGRESS",
      amount: "25kg",
      type: "Cooked Food",
      icon: "food-variant",
      color: "#FEF3C7",
      textColor: "#D97706",
    },
    {
      id: "2",
      title: "Bakery Surplus Items",
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
      className="bg-white mx-6 mb-4 p-5 rounded-[30px] border border-gray-50 shadow-sm shadow-blue-50"
    >
      <View className="flex-row items-center mb-4">
        <View className="bg-orange-50 p-3 rounded-2xl">
          <MaterialCommunityIcons name={item.icon} size={24} color={Colors.primary} />
        </View>
        <View className="flex-1 ml-4">
          <Text className="text-base font-jakarta-bold" style={{ color: Colors.heading }}>{item.title}</Text>
          <Text className="text-[10px] font-jakarta-medium text-gray-400 mt-0.5">{item.date}</Text>
        </View>
        <View style={{ backgroundColor: item.color }} className="px-3 py-1 rounded-lg">
          <Text style={{ color: item.textColor }} className="text-[8px] font-jakarta-bold uppercase">
            {item.status}
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center border-t border-gray-50 pt-4">
        <View>
          <Text className="text-[9px] font-jakarta-bold text-gray-400 uppercase mb-1">Quantity</Text>
          <Text className="text-xs font-jakarta-bold text-heading">{item.amount}</Text>
        </View>
        <View className="items-end">
          <Text className="text-[9px] font-jakarta-bold text-gray-400 uppercase mb-1">Category</Text>
          <Text className="text-xs font-jakarta-bold text-heading">{item.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View className="px-6 py-6">
        <Text className="text-3xl font-jakarta-extrabold" style={{ color: Colors.heading }}>
          Donation History
        </Text>
      </View>

      {/* Tabs */}
      <View className="px-6 flex-row gap-x-4 mb-6">
        {["active", "completed", "rejected"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full ${activeTab === tab ? "bg-orange-500" : "bg-gray-50"}`}
          >
            <Text
              className={`text-[10px] font-jakarta-bold uppercase tracking-[1px] ${activeTab === tab ? "text-white" : "text-gray-400"}`}
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
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default HistoryScreen;
