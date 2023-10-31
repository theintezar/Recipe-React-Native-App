import { View, Text, Image, TouchableOpacity, TextInput, Modal } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import Categories from "../Components/Categories";
import Racipes from "../Components/Racipes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../Context/CartContext";
import colors from "../helpers/color.config";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";
import { mealData } from "../constants/data";
import RBSheet from "react-native-raw-bottom-sheet";
import FilterComponent from "../Components/FilterComponent";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Starter");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(mealData);
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  useEffect(() => {
    const filteredMeals = mealData.filter((meal) => {
      const inPriceRange = meal.price >= priceRange[0] && meal.price <= priceRange[1];
      const isFilteredByVegetarian = isVegetarian ? meal.isVegetarian : true ;
      const matchesSearchQuery = meal.name.toLowerCase().includes(searchQuery.toLowerCase());

      return inPriceRange && isFilteredByVegetarian && matchesSearchQuery;
    });

    setFilteredData(filteredMeals);
  }, [priceRange, isVegetarian, searchQuery]);

  const navigation = useNavigation();
  const refRBSheet = useRef();
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

      {/* Search and filter  */}
      <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
        <TextInput
          placeholder="Search any recipe"
          placeholderTextColor={"gray"}
          onChangeText={handleSearch}
          className="flex-1 text-base mb-1 pl-3 tracking-wider"
        />
        <View className="bg-white rounded-full p-3">
          <MagnifyingGlassIcon
            size={15}
            strokeWidth={3}
            color={colors.primary}
          />
        </View>
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
        <View className="rounded-full flex-row items-center justify-between mx-3 mt-4">
          <Text className="text-lg font-bold text-gray-700">Racipes</Text>
          <TouchableOpacity onPress={() => refRBSheet.current.open()} >
            <AdjustmentsHorizontalIcon
              size={30}
              strokeWidth={1.4}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        <Racipes searchData={filteredData} />
      </View>

      {/* Bottom Sheet Modal */}
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: colors.primary
            },
          }}
        >
          <FilterComponent
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            isVegetarian={isVegetarian}
            onVegetarianChange={setIsVegetarian}
          />
        </RBSheet>
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
