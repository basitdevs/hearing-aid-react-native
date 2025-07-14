import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { CustomSwitch } from "@/components/Switch";
import NotificationModal from "@/components/Modals/Notification";
import MicrophoneModal from "@/components/Modals/Microphone";

const UserAvatar = ({ size = "w-[40px] h-[40px]", position = "" }) => (
  <View className={`${size} ${position} bg-gray-300 shrink-0 rounded-full overflow-hidden`}>
    <Image
      source={require("../assets/images/profile.png")}
      className='w-full h-full'
      resizeMode='cover'
    />
  </View>
);

const HearingIcon = () => (
  <View
    className='w-[94px] h-[94px] bg-white rounded-full items-center justify-center'
    style={{
      shadowColor: "#00E0B6",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.17,
      shadowRadius: 4.65,
      elevation: 4,
    }}>
    <View className='flex-col items-center justify-center gap-[3px]'>
      <Image
        source={require("../assets/images/ear.png")}
        className='w-[48px] h-[50px]'
        resizeMode='cover'
      />
      <View className='flex-row items-center justify-center gap-[4px]'>
        <Image source={require("../assets/icons/battery.png")} className='w-[16.5px] h-[7.99px]' />
        <Text className='text-[9px] leading-[13px] font-interMedium text-darkLight'>52%</Text>
      </View>
    </View>
  </View>
);

export default function Index() {
  const [isHearingAssistantEnabled, setIsHearingAssistantEnabled] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [showMicrophone, setShowMicrophone] = useState(false);

  return (
    <SafeAreaView className='flex-1 bg-primary '>
      <ScrollView className='flex-1 mt-12 '>
        <View className='px-[24px]'>
          {/* Header */}
          <View className='flex-row items-center justify-between mb-6'>
            <View className='flex-row items-center gap-[10px]'>
              <UserAvatar />
              <Text className='font-interMedium  text-white text-[17px] '>Welcome Back!</Text>
            </View>
            <Link href='/setting' asChild>
              <TouchableOpacity className='size-[40px] bg-darkLight rounded-[12px] shrink-0 items-center justify-center'>
                <Image
                  source={require("../assets/icons/setting.png")}
                  className='w-[22px] h-[22px]'
                  resizeMode='cover'
                />
              </TouchableOpacity>
            </Link>
          </View>

          {/* Main Hearing Assistant Card */}
          <View className='mb-[13px]'>
            <LinearGradient
              colors={["#E44EB5", "#188AA5", "#00E0B6"]}
              start={{ x: 0.96, y: 1 }}
              end={{ x: 0, y: 0 }}
              className='rounded-[20px] p-[20px] relative overflow-hidden'>
              <View className='flex-row items-center justify-between gap-[20px]'>
                <View className='flex-col gap-[20px] items-start justify-start'>
                  <View className='flex-1'>
                    <Text className='text-darkLight text-[22px] leading-[28px] font-interBold'>
                      Hearing Assistant
                    </Text>
                    <Text className='text-[15px] leading-[20px] text-darkLight font-inter'>
                      No current activity
                    </Text>
                  </View>

                  <CustomSwitch
                    value={isHearingAssistantEnabled}
                    onValueChange={setIsHearingAssistantEnabled}
                  />
                </View>

                <View className='items-center'>
                  <HearingIcon />
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Volume and Sound Enhancement Cards */}
          <View className='flex-row gap-[12px]'>
            <View className='flex-1 bg-darkLight p-[12px] rounded-[12px] gap-[12px]'>
              <View className='flex-col'>
                <Text className='text-white font-interMedium text-[15px] leading-[20px]'>
                  Volume
                </Text>
                <Text className='text-[#B0B0B0] text-[12px] leading-[16px]'>
                  Adjust volume for each ear →
                </Text>
              </View>
              <TouchableOpacity className='bg-secondary rounded-full py-[8px] px-[12px] items-center justify-center text-center'>
                <Text className='text-black text-center font-interMedium text-[13px] leading-[18px]'>
                  View
                </Text>
              </TouchableOpacity>
            </View>
            <View className='flex-1 bg-darkLight p-[12px] rounded-[12px] gap-[12px]'>
              <View className='flex-col'>
                <Text className='text-white font-interMedium text-[15px] leading-[20px]'>
                  Sound Enhancement
                </Text>
                <Text className='text-[#B0B0B0] text-[12px] leading-[16px]'>
                  Adjust sound & clarity →
                </Text>
              </View>
              <TouchableOpacity className='bg-secondary rounded-full py-[8px] px-[12px] items-center justify-center text-center'>
                <Text className='text-black text-center font-interMedium text-[13px] leading-[18px]'>
                  View
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Devices Section */}
          <View className='mt-[32px] gap-[8px]'>
            <View className='flex-row items-center justify-between'>
              <View className='flex-row items-center'>
                <Text className='text-white text-[15px] leading-[20px] font-interMedium'>
                  Recent Devices
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

            {/* Device List */}
            <View className='gap-[10px]'>
              <View className='bg-darkLight rounded-[12px] p-[16px] flex-row items-center justify-between'>
                <View className='flex-row items-center flex-1 gap-[8px]'>
                  <View className='w-[40px] h-[40px] bg-[#FEE6A1] rounded-[8px] items-center justify-center'>
                    <Image
                      source={require("../assets/icons/headphones.png")}
                      className='w-[21px] h-[21px]'
                      resizeMode='cover'
                    />
                  </View>
                  <View className='flex-1'>
                    <Text className='text-white font-interMedium text-[12px] leading-[16px]'>
                      Earpiece
                    </Text>
                    <Text className='text-[#B0B0B0] text-[12px] leading-[16px]'>
                      BT232-G44-12-ghJK12
                    </Text>
                  </View>
                </View>
                <TouchableOpacity className='bg-secondary rounded-[230px] px-[13px] py-[5px]'>
                  <Text className='text-black font-interMedium text-[13px]  leading-[18px]'>
                    Pair
                  </Text>
                </TouchableOpacity>
              </View>

              <View className='bg-darkLight rounded-[12px] p-[16px] flex-row items-center justify-between'>
                <View className='flex-row items-center flex-1 gap-[8px]'>
                  <View className='w-[40px] h-[40px] bg-[#DBD1FB] rounded-[8px] items-center justify-center'>
                    <Image
                      source={require("../assets/icons/headphones.png")}
                      className='w-[21px] h-[21px]'
                      resizeMode='cover'
                    />
                  </View>
                  <View className='flex-1'>
                    <Text className='text-white font-interMedium text-[12px] leading-[16px]'>
                      Headphone
                    </Text>
                    <Text className='text-[#B0B0B0] text-[12px] leading-[16px]'>
                      B12B2-G44-12-ghJK12
                    </Text>
                  </View>
                </View>
                <TouchableOpacity className='bg-secondary rounded-[230px] px-[13px] py-[5px]'>
                  <Text className='text-black font-interMedium text-[13px]  leading-[18px]'>
                    Pair
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Link href='/signup' className='text-[20px] text-white mt-4 ml-8'>
          Signup
        </Link>
      </ScrollView>
      {/* Premium Upgrade Banner */}
      <Link href={"/premium"} className='absolute bottom-0 left-0 right-0 w-full'>
        <LinearGradient
          colors={["#E2FFF9", "#C9DAFF"]}
          start={{ x: 0.96, y: 1 }}
          end={{ x: 0, y: 0 }}
          className='p-[20px] '>
          <View className='w-full flex-1 flex-row items-center justify-between gap-[10px]'>
            <View className='flex-1'>
              <Text className='text-[#0B0B16] text-[20px] font-interBold leading-[100%]'>
                Upgrade to Premium
              </Text>
              <Text className='text-[#0B0B1699] text-[12px] font-interMedium'>
                Get premium to enjoy enhanced features
              </Text>
            </View>
            <Image
              source={require("../assets/images/premium.png")}
              className='w-[61px] h-[76px]'
              resizeMode='cover'
            />
          </View>
        </LinearGradient>
      </Link>

      {/* Floating Actionr Button */}
      <TouchableOpacity className='absolute bottom-[130px] right-6 w-[46px] h-[46px] bg-secondary rounded-full items-center justify-center'>
        <Image
          source={require("../assets/icons/bluetooth.png")}
          className='w-[11px] h-[18px]'
          resizeMode='cover'
        />
      </TouchableOpacity>

      {/* Notification Modal */}

      <NotificationModal
        visible={showNotification}
        onClose={() => setShowNotification(false)}
        onSubmit={() => {
          setShowNotification(false);
        }}
      />

      {/* Microphone Modal */}

      <MicrophoneModal
        visible={showMicrophone}
        onClose={() => setShowMicrophone(false)}
        onSubmit={() => {
          setShowMicrophone(false);
        }}
      />
    </SafeAreaView>
  );
}
