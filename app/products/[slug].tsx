import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { slug } = useLocalSearchParams();
  const [selectedColor, setSelectedColor] = useState("#0D0C0C");

  const colors = ["#0D0C0C", "#E5D3C7", "#E90A0A"];

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <SafeAreaView className='flex-1 bg-primary '>
      <ScrollView className='mt-12 '>
        <View className='px-[24px]'>
          {/* Header */}
          <View className='flex-row items-center'>
            <TouchableOpacity className=''>
              <Image
                source={require("../../assets/icons/arrow-left.png")}
                className='w-4 h-4 tint-white'
                resizeMode='cover'
              />
            </TouchableOpacity>
            <Text className='text-white text-xl font-medium flex-1 text-center'>Store</Text>
          </View>

          {/* Product */}

          <View className='items-center justify-center flex-1 w-full'>
            <Image
              source={require("../../assets/images/headphone.png")}
              className='w-[240px] h-[250px] object-contain relative z-[99] transform translate-y-[40px]'
              resizeMode='cover'
            />
            <View className='bg-darkLight relative z-[9]  pt-[50px] p-[24px] rounded-[24px] flex-1 w-full gap-[30px]'>
              <View className='flex-row items-center justify-between w-full'>
                <Text className='text-white font-interMedium text-[22px]'>Turtle Black</Text>
                <Text className='text-[#00E0B6] font-interMedium text-[22px]'>$99.00</Text>
              </View>
              <View className='w-full'>
                <Text className='text-[12px] text-[#B0B0B0] leading-[16px] font-inter'>
                  Lörem ipsum regon kopp och dekabel semigögt. Göra en pudel. Pyska presos. Krosade
                  apologi. Tusoplade fadul håbelt. Ögöska sak sperad dena inte ålig. Prena suhuska.
                </Text>
              </View>

              <View className='gap-[16px] w-full'>
                <Text className='text-[18px] text-[#FFFFFF4D]'>Item Colour</Text>
                <View className='flex-row w-full justify-between items-center'>
                  <View className='flex-row items-center gap-[10px]'>
                    {colors.map((color) => {
                      const isSelected = selectedColor === color;
                      return (
                        <Pressable
                          key={color}
                          onPress={() => setSelectedColor(color)}
                          className={`size-[20px] rounded-full ${
                            isSelected ? "border-[2px] border-[#544D4D]" : ""
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      );
                    })}
                  </View>
                  <View className='flex-row items-center gap-[10px] mt-[10px]'>
                    <Text className='text-white text-[18px] font-interBold mr-[4px]'>Qty</Text>

                    {/* Decrement Button */}
                    <Pressable
                      onPress={decrement}
                      className='w-[14px] h-[14px] rounded-[4px] bg-white items-center justify-center'>
                      <Text className='text-black text-[14px] leading-[1] font-interBold'>−</Text>
                    </Pressable>

                    {/* Quantity Number */}
                    <Text className='text-white text-[16px] font-interBold text-center min-w-[10px]'>
                      {quantity}
                    </Text>

                    {/* Increment Button */}
                    <Pressable
                      onPress={increment}
                      className='w-[14px] h-[14px] rounded-[4px] bg-white items-center justify-center'>
                      <Text className='text-black text-[14px] leading-[1] font-interBold'>+</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
