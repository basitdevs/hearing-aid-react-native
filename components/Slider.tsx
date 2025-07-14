import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

interface SimpleVolumeSliderProps {
  label: string;
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const SimpleVolumeSlider: React.FC<SimpleVolumeSliderProps> = ({
  label,
  value,
  onValueChange,
  min = 0,
  max = 100,
}) => {
  const [isSliding, setIsSliding] = useState(false);

  return (
    <View className=''>
      <Text className='text-[#FFFFFF4D] ml-[15px] text-[12px]'>{label}</Text>

      {/* Value Display */}
      <View className='items-center mb-[5px]'>
        <View
          className={`bg-[#1A1A1D] w-[44px] h-[40px] items-center justify-center flex-row rounded-[6px] transition-opacity ${
            true ? "opacity-100" : "opacity-0"
          }`}>
          <Text className='text-white text-[13px] font-interMedium'>{Math.round(value)}</Text>
          {/* Tooltip arrow */}
          <View className='absolute -bottom-1 left-[16px] w-3 h-3 bg-[#1A1A1D] rotate-45' />
        </View>
      </View>

      {/* Slider */}
      <View className=''>
        <Slider
          style={{ width: "100%", height: 26 }}
          minimumValue={min}
          maximumValue={max}
          value={value}
          onValueChange={onValueChange}
          onSlidingStart={() => setIsSliding(true)}
          onSlidingComplete={() => setIsSliding(false)}
          minimumTrackTintColor='#00E0B6'
          maximumTrackTintColor='#0E5B4D'
          thumbTintColor='#00E0B6'
        />
      </View>
    </View>
  );
};
