import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants/data";

const Categories = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-3"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((cat, index) => (
          <TouchableOpacity key={index} className="flex items-center space-y-1">
            <View className="rounded-full p-1">
              <Image
                source={{ uri: cat.image }}
                style={{ width: 60, height: 60 }}
                className="rounded-full"
              />
            </View>
            <Text className="text-neutral-700 text-xs font-bold"> {cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
