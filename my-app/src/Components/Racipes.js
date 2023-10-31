import React, { useContext } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartSolid } from "react-native-heroicons/solid";
import { CartContext } from "../Context/CartContext";
import { mealData } from "../constants/data";

const Racipes = () => {
  const { cartState, dispatch } = useContext(CartContext);

  const toggleCartItem = (product) => {
    // Check if the item is already in the cart
    const isItemInCart = cartState.items.some(
      (cartItem) => cartItem.id === product.id
    );
    if (isItemInCart) {
      // If it's in the cart, remove it
      dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
    } else {
      // If it's not in the cart, add it
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  return (
    <View className="pb-3">
      <FlatList
        data={mealData}
        renderItem={({ item }) => {
          const isItemInCart = cartState.items.some(
            (cartItem) => cartItem.id === item.id
          );

          return (
            <View className="bg-white items-center mx-3 my-3 py-3 px-3 rounded-lg">
              <Image
                source={{ uri: item.image }}
                style={{ width: 150, height: 150, resizeMode: "center" }}
                className="rounded-full res"
              />
              <Text className="text-sm font-bold text-gray-700">
                {item.name}
              </Text>
              <Text className="text-xs font-medium text-gray-500">
                {item.ing}
              </Text>
              <TouchableOpacity
                className="absolute top-2 right-2"
                onPress={() => toggleCartItem(item)}
              >
                <HeartSolid size={25} color={isItemInCart ? "red" : "black"} />
              </TouchableOpacity>
            </View>
          );
        }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Racipes;

