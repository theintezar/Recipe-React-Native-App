import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { mealData } from "../constants/data";
import { HeartIcon } from "react-native-heroicons/outline";
import { HeartIcon as HeartSolid } from "react-native-heroicons/solid";
import { CartContext } from "../Context/CartContext";

const Racipes = () => {
  const { cartState, dispatch } = useContext(CartContext);
  

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <View className="pb-3">
      <FlatList
        data={mealData}
        renderItem={({ item }) => {
          const isItemInCart = cartState.items.some((cartItem) => cartItem.id === item.id);
        return(
          <View className="bg-white items-center mx-3 my-3 py-3 px-3 rounded-lg">
            <Image
              source={{ uri: item.image }}
              style={{ width: 150, height: 150, resizeMode: "center" }}
              className="rounded-full res"
            />
            <Text>{item.name}</Text>
            <TouchableOpacity
              className="absolute top-2 right-2"
              onPress={() => addToCart(item)}
            >
              <HeartSolid size={25} color={isItemInCart?"red":"black"} />
            </TouchableOpacity>
          </View>
        )}}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Racipes;
