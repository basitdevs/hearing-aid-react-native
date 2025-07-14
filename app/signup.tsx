import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from "react-native";


const SignupScreen = () => {
  const [showLoginButtons, setShowLoginButtons] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginButtons(true);
    }, 1000); // 1 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-primary relative h-full'>
      {showLoginButtons ? (
        <>
          <ScrollView
            className='flex-1'
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}>
            <View className='px-[24px] py-[12px] flex-1 gap-[12px] items-center justify-center'>
              <View className='gap-[10px]'>
                <Text className='text-[20px] font-interMedium text-white text-center leading-[25px] '>
                  Let’s Get Started!
                </Text>
                <Text className='text-[13px] font-inter text-[#B0B0B0] text-center leading-[18px] '>
                  Discover the latest 1000+ Headphone Aids
                </Text>
              </View>

              <View className='gap-[12px] w-full'>
                <TouchableOpacity
                  className='items-center py-[12px] px-[16px] justify-center flex-row w-full bg-[#333333] h-[48px]  rounded-[12px] '>
                  <Image
                    source={require("../assets/icons/google.png")}
                    className='w-[24px] h-[24px] object-cover'
                    resizeMode='cover'
                  />
                  <Text className='text-white text-[15px] font-[400]  flex-1 text-center'>
                    Continue with Google
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className='items-center py-[12px] px-[16px] justify-center flex-row w-full bg-[#333333] h-[48px]  rounded-[12px] '>
                  <Image
                    source={require("../assets/icons/apple.png")}
                    className='w-[24px] h-[24px] object-cover'
                    resizeMode='cover'
                  />
                  <Text className='text-white text-[15px] font-[400]  flex-1 text-center'>
                    Continue with Apple
                  </Text>
                </TouchableOpacity>
              </View>

              <View className='text-[13px] font-inter flex-row items-center justify-center gap-[3px]'>
                <Text className='text-[#B0B0B0]'>Already Have an Account?</Text>
                <Link href={"/signin"}>
                  <Text className='text-[#00E0B6]'>Sign in</Text>
                </Link>
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <ScrollView className='flex-1 mt-12 '>
            <View className='px-[24px] py-[12px]'>
              <View className='flex-col items-center justify-center mt-[40px]'>
                <View className='bg-[#FFFFFF0A] w-[100px] h-[100px] rounded-full items-center justify-center relative'>
                  <Image
                    source={require("../assets/images/login-ear.png")}
                    className='w-[67px] h-[69px]'
                    resizeMode='cover'
                  />
                  <View className='bg-[#A099FF1A] opacity-50  size-[106px] rounded-full absolute right-0 top-1/2 bottom-1/2 -translate-y-1/2'></View>
                </View>
              </View>
              <View className='mt-[20px] gap-[15px]'>
                <Text className='text-[22px] font-interBold text-white text-center leading-[1] '>
                  Hearing Assistant
                </Text>
                <Text className='text-[12px] font-inter text-[#B0B0B0] text-center leading-[1] '>
                  Powerful Hearing Enhancement With Your Smartphone
                </Text>
              </View>
            </View>
          </ScrollView>

          <View className='absolute bottom-0 left-0 right-0'>
            <Image
              source={require("../assets/images/girl.png")}
              className='w-full h-auto object-contain'
              resizeMode='cover'
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default SignupScreen;
