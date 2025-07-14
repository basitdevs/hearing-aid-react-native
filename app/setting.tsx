import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { CustomSwitch } from "@/components/Switch";
import LogoutModal from "@/components/Modals/LogoutModal";

const SettingScreen = () => {
  const [noiseSwitch, setNoiseSwitch] = useState(false);
  const [language, setLanguage] = useState("English");
  const [showLogout, setShowLogout] = useState(false);

  return (
    <SafeAreaView className='flex-1 bg-primary text-white'>
      <ScrollView className='flex-1 mt-12 '>
        <View className='px-[24px] gap-[4px] w-full'>
          <View className=' flex-1'>
            <Text className='text-white text-[16px] font-inter text-center'>Settings</Text>
          </View>
          <View className='gap-[16px] flex-1 w-full'>
            <View className='h-[72px] w-full bg-darkLight rounded-[12px] p-[16px] flex-row items-center justify-between'>
              <View className='flex-row gap-[10px] items-center'>
                <View className={`bg-gray-300 shrink-0 rounded-full size-[40px] overflow-hidden`}>
                  <Image
                    source={require("../assets/images/profile.png")}
                    className='w-full h-full'
                    resizeMode='cover'
                  />
                </View>
                <View className='gap-[2px]'>
                  <Text className='text-[13px] text-white font-interMedium leading-[18px]'>
                    Dexy Labs
                  </Text>
                  <Text className='text-[#B0B0B0] text-[13px] font-inter'>Dexy.labs@gmail.com</Text>
                </View>
              </View>
              <Image
                source={require("../assets/icons/arrow-dark.png")}
                className='w-[21px] h-[20px] '
                resizeMode='cover'
              />
            </View>

            <View className='bg-darkLight rounded-[12px] p-[16px]  gap-[16px]'>
              <View className='flex-row items-center justify-between w-full gap-[10px]'>
                <Text className='text-[12px] text-white font-inter'>Noise Reductions</Text>
                <CustomSwitch
                  value={noiseSwitch}
                  onValueChange={setNoiseSwitch}
                  bgInactive='#161616'
                  thumbColor='#333333'
                  activeColor='#00E0B6'
                />
              </View>

              <View className='flex-row items-center justify-between w-full gap-[10px]'>
                <Text className='text-[12px] text-white font-inter'>Allow New Devices</Text>
                <CustomSwitch
                  value={noiseSwitch}
                  onValueChange={setNoiseSwitch}
                  bgInactive='#161616'
                  thumbColor='#333333'
                  activeColor='#00E0B6'
                />
              </View>
            </View>

            <View className='bg-darkLight rounded-[12px] p-[16px]  gap-[16px]'>
              <View className='flex-row items-center justify-between w-full gap-[10px]'>
                <Text className='text-[12px] text-white font-inter'>Notifications</Text>
                <CustomSwitch
                  value={noiseSwitch}
                  onValueChange={setNoiseSwitch}
                  bgInactive='#161616'
                  thumbColor='#333333'
                  activeColor='#00E0B6'
                />
              </View>

              <View className='flex-row items-center justify-between w-full gap-[10px]'>
                <Text className='text-[12px] text-white font-inter'>Vibrate</Text>
                <CustomSwitch
                  value={noiseSwitch}
                  onValueChange={setNoiseSwitch}
                  bgInactive='#161616'
                  thumbColor='#333333'
                  activeColor='#00E0B6'
                />
              </View>

              <View className='w-full'>
                <TouchableOpacity
                  className='flex-row items-center justify-between w-full gap-[10px]'>
                  <Text className='text-[12px] text-white font-inter'>Vibrate</Text>
                  <View className='flex-row items-center gap-[6px]'>
                    <Text className='text-[12px] font-inter text-white'>{language}</Text>
                    <Image
                      source={require("../assets/icons/arrow-dark.png")}
                      className='w-[20px] h-[19px] '
                      resizeMode='cover'
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View className='bg-darkLight rounded-[12px] p-[16px]  gap-[16px]'>
              <View className='flex-row items-center justify-between w-full gap-[10px]'>
                <Text className='text-[12px] text-white font-inter'>Help & Support</Text>
                <Image
                  source={require("../assets/icons/arrow-dark.png")}
                  className='w-[20px] h-[19px] '
                  resizeMode='cover'
                />
              </View>
              <View className='flex-row items-center justify-between w-full gap-[10px]'>
                <Text className='text-[12px] text-white font-inter'>Privacy Policy</Text>
                <Image
                  source={require("../assets/icons/arrow-dark.png")}
                  className='w-[20px] h-[19px] '
                  resizeMode='cover'
                />
              </View>
              <View className='flex-row items-center justify-between w-full gap-[10px]'>
                <Text className='text-[12px] text-white font-inter'>Rate App</Text>
                <Image
                  source={require("../assets/icons/arrow-dark.png")}
                  className='w-[20px] h-[19px] '
                  resizeMode='cover'
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setShowLogout(true)}
              className='bg-darkLight rounded-[12px] p-[16px]  gap-[16px]'>
              <View className='flex-row items-center justify-between w-full gap-[10px]'>
                <Text className='text-[12px] text-[#FF9999] font-inter'>Logout</Text>
                <Image
                  source={require("../assets/icons/arrow-red.png")}
                  className='w-[20px] h-[19px] '
                  resizeMode='cover'
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <LogoutModal
          visible={showLogout}
          onClose={() => setShowLogout(false)}
          onLogout={() => {
            setShowLogout(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
