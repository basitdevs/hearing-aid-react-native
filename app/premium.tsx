import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import UpgradeModal from "@/components/Modals/UpgradeModal";

const features = [
  "AI Enhanced Clarity Mode",
  "Realtime Transcription & Live Subtitles",
  "Low Power Mood - Power Optimization",
  "Connect to Wearable Device",
];

const PremiumScreen = () => {
    const [showUpgrade, setShowUpgrade] = useState(true);
  
  return (
    <SafeAreaView className='flex-1 bg-primary '>
      <ScrollView className='flex-1 mt-12 '>
        <View className='px-[24px] py-[12px]'>
          {/* Top Badge */}
          <View className='items-center justify-center mb-[20px] flex-1'>
            <View className='items-center justify-center flex-1'>
              <Image
                source={require("../assets/images/premium-badge.png")}
                className='w-[250px] h-[194px] object-contain'
                resizeMode='cover'
              />
            </View>
            <View className='items-center justify-center flex-row text-center'>
              <Text className='font-interBold text-[30px] leading-[140%]  text-white  '>
                Upgrade to{" "}
              </Text>
              <Text className='font-interBold text-[30px] leading-[140%]  text-[#F7AC2F]  '>
                Premium
              </Text>
            </View>
            <Text className='text-[16px] leading-[140%] text-white font-inter'>
              Enjoy all features
            </Text>
          </View>

          {/* Features list */}
          <View className='gap-[10px] flex-1 mb-[60px]'>
            {features.map((feature, index) => (
              <View className='flex-row items-center gap-[12px]' key={index}>
                <Image
                  source={require("../assets/icons/check-mark.png")}
                  className='w-[14.6px] h-[13.4px] object-contain'
                  resizeMode='cover'
                />
                <Text className='text-[14px] leading-[125%] font-inter text-white'>{feature}</Text>
              </View>
            ))}
          </View>

          <View className='gap-[12px] flex-1 w-full'>
            <View className='border border-[#FFFFFF14] h-[60px]  rounded-[12px] py-[12px] px-[16px] flex-1 w-full items-center justify-between flex-row'>
              <View className='flex-row items-center gap-[14px]'>
                <Image
                  source={require("../assets/icons/circle-check.png")}
                  className='w-[18px] h-[18px]'
                  resizeMode='cover'
                />
                <Text className='text-[14px] text-white font-interMedium'>Monthly </Text>
              </View>
              <Text className='text-[#00E0B6] text-[14px] font-interBold'>$9.99</Text>
            </View>
            <View className='bg-[#00E0B6] h-[81px] gap-[14px]  py-[12px] px-[16px] rounded-[12px] flex-1 w-full items-center justify-between flex-row'>
              <Image
                source={require("../assets/icons/fill-check.png")}
                className='w-[18px] h-[18px]'
                resizeMode='cover'
              />
              <View className='gap-[3px] flex-1'>
                <Text className='text-[#000000] text-[15px] font-interMedium'>
                  Yearly - Best value
                </Text>
                <Text className='text-[#262626] text-[12px] font'>
                  3 days free Trial, PKR - $89.99/ Yearly after trial ends.
                </Text>
              </View>
            </View>
          </View>

          <View className='mt-[40px] flex-1 w-full items-center justify-center'>
            <Text className='text-[#7D7D7D] text-[10px] font-inter text-center'>
              Cancel Subscription Anytime atleast 24hours before renewal
            </Text>
            <LinearGradient
              colors={["#FFAC2D", "#FEC446"]}
              start={{ x: 0.96, y: 1 }}
              end={{ x: 0, y: 0 }}
              className='rounded-[30px] h-[52px] mt-[8px] p-[16px] pr-[30px] w-full flex-1 relative overflow-hidden items-center flex-row justify-center '>
              <Text className='text-[16px] text-white font-interBold flex-1 text-center'>
                Continue Now
              </Text>
              <Image
                source={require("../assets/icons/arrow-premium-btn.png")}
                className='w-[23px] h-[23px]'
                resizeMode='cover'
              />
            </LinearGradient>
          </View>
        </View>

          <UpgradeModal
          visible={showUpgrade}
          onClose={() => setShowUpgrade(false)}
          onSubmit={() => {
            setShowUpgrade(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PremiumScreen;
