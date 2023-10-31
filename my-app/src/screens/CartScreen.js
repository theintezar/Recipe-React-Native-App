import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CartContext } from "../Context/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PlusIcon,
  MinusIcon,
  TrashIcon,
  ArrowLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import colors from "../helpers/color.config";
import { useNavigation } from "@react-navigation/native";


const CartScreen = () => {
  const { cartState, dispatch } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      className="p-3 flex-1"
      style={{ backgroundColor: colors.background }}
    >
      {/* Back button */}
      <TouchableOpacity
        className="rounded-full w-9 h-9 flex justify-center items-center bg-orange-400"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={25} color={"white"} />
      </TouchableOpacity>

      {/* Title */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-center items-center gap-2 mt-3">
          <ShoppingCartIcon size={45} color={colors.primary} />
          <Text className="text-4xl font-bold text-gray-700">My Cart</Text>
        </View>

        {/* Show Cart item */}
        {cartState.items.map((item, index) => (
          <View className="flex justify-center items-center mt-3" key={index}>
            <View
              className="bg-white p-3 flex-row items-center justify-between rounded-xl"
              style={{ width: 350, height: 120 }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ height: 80, width: 80 }}
                className="rounded-full"
              ></Image>
              <View className="flex items-center gap-0">
                <Text className=" text-sm font-bold text-gray-700">
                  {item.name}
                </Text>
                <Text className="text-xs font-medium text-gray-500">
                  {item.ing}
                </Text>
              </View>

              <View className="flex items-center gap-3 ">
                <Text className="text-sm font-bold text-gray-700">
                  {item.quantity}
                </Text>
                <View className="flex-row items-center bg-orange-400 rounded-full p-1">
                  <TouchableOpacity
                    className="p-1 bg-white rounded-full m-1"
                    onPress={() =>
                      dispatch({ type: "INCREMENT_ITEM", payload: item.id })
                    }
                  >
                    <PlusIcon size={25} color={"black"} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="p-1 bg-white rounded-full m-1"
                    onPress={() =>
                      dispatch({ type: "DECREMENT_ITEM", payload: item.id })
                    }
                  >
                    <MinusIcon size={25} color={"black"} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="p-1 bg-white rounded-full m-1"
                    onPress={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                    }
                  >
                    <TrashIcon size={25} color={"black"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
