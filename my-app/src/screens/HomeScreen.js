import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { secondaryColor } from "../../color.config";
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import Categories from "../Components/Categories";

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
        <View className="mx-3 flex-row justify-between items-center mb-1">
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
          <Text className="absolute top-0 right-0 bg-red-700 rounded-full text-xs font-bold w-4 text-center">
            0
          </Text>
        </View>

        {/* Person Name with some greetings */}
        <View className='mx-4 spce-y-2 mb-2'>
          <Text className='text-lg font-bold text-gray-700'>Hello, Cassay!</Text>
        </View>


       {/* category with name */}
       <View>
        <Categories/>
       </View>

      </ScrollView>
    </View>
  );
};

export default HomeScreen;
