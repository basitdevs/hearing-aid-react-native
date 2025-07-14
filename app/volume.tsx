import { SimpleVolumeSlider } from "@/components/Slider";
import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";

const SimpleVolumeControl = () => {
  const [leftEarVolume, setLeftEarVolume] = useState(52);
  const [rightEarVolume, setRightEarVolume] = useState(52);

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
            <Text className='text-white text-xl font-medium flex-1 text-center mr-8'>Volume</Text>
          </View>

          {/* Volume Sliders */}
          <View className='py-[20px] mt-[20px] w-full flex-1 bg-darkLight rounded-[12px]'>
            <SimpleVolumeSlider
              label='Left Ear'
              value={leftEarVolume}
              onValueChange={setLeftEarVolume}
            />

            <SimpleVolumeSlider
              label='Right Ear'
              value={rightEarVolume}
              onValueChange={setRightEarVolume}
            />
          </View>

          <TouchableOpacity
            className={` mt-[40px] bg-secondary py-[12px]  items-center justify-center text-center px-[16px] w-full flex-1 h-[52px] rounded-full`}>
            <Text className='text-[16px] font-interMedium text-darkLight'>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SimpleVolumeControl;
