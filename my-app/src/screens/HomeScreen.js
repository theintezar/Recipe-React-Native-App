import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { secondaryColor } from "../../color.config";
import { ShoppingBagIcon } from "react-native-heroicons/solid";

const HomeScreen = () => {
  return (
    <View
      className="flex-1 bg-slate-300"
      style={{ backgroundColor: secondaryColor }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* Header and its contain  avatar and kart*/}
        <View className="mx-3 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/Images/Cassandre.webp")}
            style={{
              width: 40,
              height: 40,
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 50,
            }}
          />
          <ShoppingBagIcon size={40} color="black" />
          <Text className="absolute top-0 right-0 bg-red-700 rounded-full px-1 text-xs font-bold">
            0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
