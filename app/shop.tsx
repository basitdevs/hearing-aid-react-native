import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const categories = [
  { id: 1, name: "True Wireless", image: require("../assets/images/wireless.jpg") },
  { id: 2, name: "Wired Headphones", image: require("../assets/images/wired.jpg") },
  { id: 3, name: "Neck Band", image: require("../assets/images/neck.jpg") },
  { id: 4, name: "True Wireless", image: require("../assets/images/wireless.jpg") },
  { id: 5, name: "Wired Headphones", image: require("../assets/images/wired.jpg") },
  { id: 6, name: "Neck Band", image: require("../assets/images/neck.jpg") },
];

const products = [
  {
    id: 1,
    title: "Turtle Beach",
    image: require("../assets/images/headphone.png"),
    oldPrice: "$120.00",
    price: "$99.00",
    slug: "turtle-beach",
  },
  {
    id: 2,
    title: "Donton Games",
    image: require("../assets/images/headphone.png"),
    oldPrice: "$120.00",
    price: "$99.00",
    slug: "donton-games",
  },
  {
    id: 3,
    title: "Bass Pro",
    image: require("../assets/images/headphone.png"),
    oldPrice: "$130.00",
    price: "$110.00",
    slug: "bass-pro",
  },
];

const ShopScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-primary '>
      <ScrollView className='flex-1 mt-12 '>
        <View className='px-[24px]'>
          {/* Header */}
          <View className='flex-row items-center'>
            <TouchableOpacity className=''>
              <Image
                source={require("../assets/icons/arrow-left.png")}
                className='w-4 h-4 tint-white'
                resizeMode='cover'
              />
            </TouchableOpacity>
            <Text className='text-white text-xl font-medium flex-1 text-center'>Store</Text>
          </View>

          {/* Products */}

          <View className='mt-[32px] gap-[15px]'>
            <View className='flex-row items-center justify-between'>
              <View className='flex-row items-center'>
                <Text className='text-white text-[15px] leading-[20px] font-interMedium'>
                  Popular
                </Text>
              </View>
              <TouchableOpacity className='flex-row items-center'>
                <Text className='text-white  text-[13px] leading-[18px] font-inter'>See all</Text>
                <Image
                  source={require("../assets/icons/arrow-right.png")}
                  className='w-[17px] h-[17px]'
                  resizeMode='cover'
                />
              </TouchableOpacity>
            </View>

            {/* Product List */}
            <View className='gap-[15px] flex-1 w-full flex-row'>
              {/* Product 1 */}
              <Link
                href={{ pathname: "/products/[slug]", params: { slug: "turtle-beach" } }}
                asChild>
                <Pressable className='bg-darkLight flex-1 rounded-[12px] py-[21px] px-[17px] gap-[30px] items-center justify-between'>
                  <Image
                    source={require("../assets/images/headphone.png")}
                    className='w-[84px] h-[78px]'
                    resizeMode='cover'
                  />
                  <View className='gap-[17px]'>
                    <Text className='text-white font-interMedium text-[15px] text-center'>
                      Turtle Beach
                    </Text>
                    <View className='flex-row items-center justify-between w-full'>
                      <Text className='text-[#B0B0B0] font-interMedium text-[10px] line-through'>
                        $120.00
                      </Text>
                      <Text className='text-secondary font-interBold text-[18px]'>$99.00</Text>
                    </View>
                  </View>
                </Pressable>
              </Link>

              {/* Product 2 */}
              <Link
                href={{ pathname: "/products/[slug]", params: { slug: "donton-games" } }}
                asChild>
                <Pressable className='bg-darkLight flex-1 rounded-[12px] py-[21px] px-[17px] gap-[30px] items-center justify-between'>
                  <Image
                    source={require("../assets/images/headphone.png")}
                    className='w-[84px] h-[78px]'
                    resizeMode='cover'
                  />
                  <View className='gap-[17px]'>
                    <Text className='text-white font-interMedium text-[15px] text-center'>
                      Donton Games
                    </Text>
                    <View className='flex-row items-center justify-between w-full'>
                      <Text className='text-[#B0B0B0] font-interMedium text-[10px] line-through'>
                        $120.00
                      </Text>
                      <Text className='text-secondary font-interBold text-[18px]'>$99.00</Text>
                    </View>
                  </View>
                </Pressable>
              </Link>
            </View>
          </View>

          {/* Avalaible */}

          <View className='gap-[16px] mt-[20px]'>
            <Text className='text-white font-interMedium text-[15px]'>Available</Text>
            <View className='flex-row flex-wrap -mx-1'>
              {categories.map((item) => (
                <View
                  key={item.id}
                  className='w-1/3 min-h-[98px] items-center justify-center  px-[6px] mb-3'>
                  <View className='py-[11px] px-[10px] rounded-[10px] bg-darkLight w-full items-center'>
                    <Image
                      source={item.image}
                      className='w-[70px] h-[70px] rounded-full'
                      resizeMode='cover'
                    />
                    <Text className='text-white text-[10px] font-interMedium mt-2 text-center'>
                      {item.name}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Shop Now button */}

          <TouchableOpacity
            className={` bg-secondary py-[12px]  flex-row gap-[10px] mt-[20px]  items-center justify-center text-center px-[16px] w-full flex-1 h-[52px] rounded-full`}>
            <View className='w-[18px] h-[17px] relative'>
              <Image
                source={require("../assets/icons/cart.png")}
                className='w-full h-full'
                resizeMode='cover'
              />
              <View className='size-[10px] absolute top-[-2px] right-[-3px] rounded-full bg-[#FBFBFF] items-center justify-center text-center'>
                <Text className='text-black text-[7px] font-interMedium leading-[1]'>2 </Text>
              </View>
            </View>
            <Text className='text-[16px] font-interMedium text-black'>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
