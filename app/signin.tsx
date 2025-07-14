import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";


const SigninScreen = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  return (
    <SafeAreaView className='flex-1 bg-primary relative h-full'>
      <ScrollView className='flex-1 mt-12 '>
        <View className='px-[24px] py-[12px]'>
          <View className='mb-[12px]'>
            <Link asChild href={"/"}>
              <TouchableOpacity className='bg-darkLight size-[40px] rounded-[12px] items-center justify-center flex'>
                <Image
                  source={require("../assets/icons/arrow-left.png")}
                  className='w-[16px] h-[16px] '
                  resizeMode='cover'
                />
              </TouchableOpacity>
            </Link>
          </View>
          <View className='gap-[20px]'>
            <View className='gap-[5px]'>
              <Text className='text-[22px] font-interBold text-white text-center leading-[28px] '>
                Welcome Back! 👋
              </Text>
              <Text className='text-[15px] font-inter text-[#B0B0B0] text-center leading-[20px] '>
                We’re so glad you’re here, we missed you
              </Text>
            </View>
            <View className='gap-[16px]'>
              <View className='w-full'>
                <View className='relative w-full'>
                  <Image
                    source={require("../assets/icons/email.png")}
                    className='w-[24px] h-[24px] absolute left-[16px] top-1/2 -translate-y-1/2 z-10'
                    resizeMode='contain'
                  />

                  <TextInput
                    placeholder='Email'
                    placeholderTextColor='#B0B0B0'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    onSubmitEditing={() => alert(`Welcome to ${email}`)}
                    className='bg-darkLight text-white text-[15px] leading-[20px] pl-[52px] pr-[16px] py-[16px] w-full h-[56px] rounded-[12px] font-inter'
                  />
                </View>
              </View>
              <TouchableOpacity
                disabled={!isValidEmail(email)}
                onPress={() => alert(`Welcome to ${email}`)}
                className={` disabled:opacity-50 bg-secondary py-[12px]  items-center justify-center text-center px-[16px] w-full flex-1 h-[52px] rounded-full`}>
                <Text className='text-[16px] font-interMedium text-darkLight'>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SigninScreen;
