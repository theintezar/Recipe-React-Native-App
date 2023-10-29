import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 2500);
  }, [])
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-rose-400">

      {/* logo image with some rings */}
      <View className='bg-white/20 rounded-1 p-10'>
        <View className='bg-white/20 rounded-1 p-8'>
          <Image source={require('../../assets/Images/welcome.jpg')} style={{ width: 190, height: 190 }} />
        </View>
      </View>

      {/* title and punchline */}
      <View className='flex items-center space-y-1'>
        <Text className='font-bold text-white tracking-widest text-6xl'>Food</Text>
        <Text className='font-medium text-white tracking-widest text-lg'>Best food App</Text>
      </View>
    </View>
  )
}

export default WelcomeScreen