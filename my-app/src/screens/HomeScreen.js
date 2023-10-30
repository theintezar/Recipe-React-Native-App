import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import Categories from "../Components/Categories";
import Racipes from "../Components/Racipes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../Context/CartContext";
import colors from "../helpers/color.config";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Starter");
  const navigation = useNavigation();
  const { cartState } = useContext(CartContext);

  return (
    <SafeAreaView
      className="flex-1 bg-slate-300"
      style={{ backgroundColor: colors.background, paddingBottom: 350 }}
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <ShoppingBagIcon size={40} color="black" />
        </TouchableOpacity>
        <Text className="absolute top-0 right-0 bg-red-700 rounded-full text-xs font-bold w-4 text-center">
          {cartState ? cartState.items.length : 0}
        </Text>
      </View>

      {/* Person Name with some greetings */}
      <View className="mx-4 spce-y-2 mb-2">
        <Text className="text-lg font-bold text-gray-700">Hello, User!</Text>
      </View>

      {/* category with name */}
      <View>
        <Text className="text-lg font-bold text-gray-700 mx-4 my-3">
          Category
        </Text>
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </View>

      {/* Racipes list with some description */}
      <View>
        <Text className="text-lg font-bold text-gray-700 mx-4 mt-8 mb-2">
          Racipes
        </Text>
        <Racipes />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
