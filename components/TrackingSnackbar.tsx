import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";

// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TrackingSnackbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isExpanded) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    // Standard layout animation for the container resizing
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable onPress={toggleExpand}>
          {/* Pull Handle */}
          <View className="items-center mb-2">
            <View className="w-10 h-1 bg-gray-100 rounded-full" />
          </View>

          {/* Header Section - Always Visible */}
          <View className="flex-row justify-between items-center">
            <View className="flex-1">
              <View className="flex-row items-center">
                <Text
                  className="text-[10px] font-jakarta-extrabold uppercase tracking-[1.5px]"
                  style={{ color: Colors.primary }}
                >
                  Delivery in Progress
                </Text>
                <View className="ml-2 w-1.5 h-1.5 rounded-full bg-green-500" />
              </View>
              <Text
                className="text-xl font-jakarta-extrabold mt-0.5"
                style={{ color: Colors.heading }}
              >
                Rider is 5 mins away
              </Text>
            </View>
            <View className="rounded-2xl bg-orange-100 p-3 items-center justify-center">
              <MaterialCommunityIcons
                name={isExpanded ? "chevron-down" : "truck-outline"}
                size={24}
                color={Colors.primary}
              />
            </View>
          </View>

          {/* Expanded Content Wrapper */}
          {isExpanded && (
            <Animated.View style={{ opacity: fadeAnim, marginTop: 24 }}>
              {/* Simple Progress Bar Section */}
              <View style={{ marginBottom: 24, paddingHorizontal: 4 }}>
                <View
                  style={{
                    height: 8,
                    width: "100%",
                    backgroundColor: "#F3F4F6",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "75%",
                      backgroundColor: Colors.primary,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View className="flex-row justify-between mt-3">
                  <Text className="text-[9px] font-jakarta-bold text-gray-400 uppercase">Pickup</Text>
                  <Text className="text-[9px] font-jakarta-bold text-gray-400 uppercase">Transit</Text>
                  <Text className="text-[9px] font-jakarta-bold uppercase" style={{ color: Colors.primary }}>Destination</Text>
                </View>
              </View>

              {/* Divider */}
              <View className="h-[1px] w-full bg-gray-50 mb-6" />

              {/* Info Section */}
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center flex-1">
                  <View className="bg-[#E7F9F3] p-2.5 rounded-2xl mr-3">
                    <Ionicons name="restaurant" size={18} color="#10B981" />
                  </View>
                  <View className="flex-1">
                    <Text
                      className="text-sm font-jakarta-bold"
                      style={{ color: Colors.heading }}
                      numberOfLines={1}
                    >
                      15 Meals •{" "}
                      <Text className="text-gray-400 font-jakarta-medium">
                        Al-Bake
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </Animated.View>
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 20,
    zIndex: 9999,
  },
  content: {
    backgroundColor: Colors.white,
    borderRadius: 40,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    borderWidth: 0.5,
    borderColor: Colors.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default TrackingSnackbar;
