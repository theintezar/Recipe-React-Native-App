import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../helpers/color.config";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  return (
    <View
      className="flex-1 justify-center items-center space-y-10"
      style={{ backgroundColor: colors.primary }}
    >
      {/* logo image with some rings */}
      <View className="bg-white/20 rounded-full p-10">
        <View className="bg-white/20 rounded-full p-8">
          <Image
            source={require("../../assets/Images/welcome.jpg")}
            style={{ width: 190, height: 190 }}
            className="rounded-full"
          />
        </View>
      </View>

      {/* title and punchline */}
      <View className="flex items-center space-y-1">
        <Text className="font-bold text-white tracking-widest text-5xl">
          Racipe
        </Text>
        <Text className="font-medium text-white tracking-widest text-lg">
          A Best Racipe App
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
