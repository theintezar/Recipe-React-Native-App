import React, { useState } from 'react';
import { View, Text, Switch, Button } from 'react-native';
import Slider from '@react-native-community/slider';


const FilterComponent = ({ priceRange, onPriceChange, isVegetarian, onVegetarianChange }) => {
  
  return (
    <View className="p-3 flex gap-2">
      <Text className="text-lg font-bold text-gray-700 mb-2">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</Text>
      <Slider
        minimumValue={100}
        maximumValue={500}
        step={5}
        value={priceRange[0]}
        onValueChange={(value) => onPriceChange([value, priceRange[1]])}
      />
      <Slider
        minimumValue={100}
        maximumValue={500}
        step={5}
        value={priceRange[1]}
        onValueChange={(value) => onPriceChange([priceRange[0], value])}
      />
      <View className="flex-row items-center justify-between mr-14">
        <Text className="text-lg font-bold text-gray-700">Filter By</Text>
        <Button
          title="Vegetarian"
          onPress={() => onVegetarianChange(true)}
          color={isVegetarian ? 'green' : 'gray'}
          style={{ borderRadius: 10 }}
        />
        <Button
          title="All Meal"
          onPress={() => onVegetarianChange(false)}
          color={!isVegetarian ? 'green' : 'gray'}
        />
      </View>
    </View>
  );
};

export default FilterComponent;
