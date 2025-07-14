import React, { useRef } from "react";
import { View, Text, Animated, PanResponder, StyleSheet } from "react-native";

type FrequencySliderProps = {
  frequency: string;
  value: number;
  index: number;
  onValueChange: (value: number) => void;
};

const SLIDER_HEIGHT = 160;

export const FrequencySlider: React.FC<FrequencySliderProps> = ({
  frequency,
  value,
  index,
  onValueChange,
}) => {
  const sliderRef = useRef<View>(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: (e, gestureState) => {
        handleTouch(e.nativeEvent.pageY);
      },
      onPanResponderMove: (e, gestureState) => {
        handleTouch(e.nativeEvent.pageY);
      },
    })
  ).current;

  const handleTouch = (globalY: number) => {
    sliderRef.current?.measure((x, y, width, height, pageX, pageY) => {
      const localY = globalY - pageY;
      const clamped = Math.max(0, Math.min(1, 1 - localY / SLIDER_HEIGHT));
      onValueChange(clamped);
    });
  };

  return (
    <View className='items-center flex-1 w-full'>
      <View className='h-40 justify-end mb-2'>
        <View
          ref={sliderRef}
          className='w-[2px] bg-gray-700 rounded-full relative'
          style={{ height: SLIDER_HEIGHT }}>
          {/* Active fill */}
          <View
            className='w-[2px] bg-[#00E0B6] rounded-full absolute bottom-0'
            style={{ height: value * SLIDER_HEIGHT }}
          />

          {/* Slider knob */}
          <Animated.View
            {...panResponder.panHandlers}
            className='w-[14px] h-[14px] bg-[#00E0B6] rounded-full absolute -left-[5px] shadow-md'
            style={{
              bottom: value * SLIDER_HEIGHT - 8,
            }}
          />
        </View>
      </View>
      <Text className='text-[#FFFFFF4D] text-[10px] font-inter text-center'>{frequency}</Text>
    </View>
  );
};
