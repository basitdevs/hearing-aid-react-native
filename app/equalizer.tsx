import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Svg, { Path, Line } from "react-native-svg";
import Slider from "@react-native-community/slider";
import { FrequencySlider } from "@/components/FrequencySlider";

const { width } = Dimensions.get("window");

const Equalizer = () => {
  const [activeTab, setActiveTab] = useState("Default");
  const [sliderValues, setSliderValues] = useState([0.3, 0.6, 0.8, 0.4, 0.7]);
  const [bassValue, setBassValue] = useState(0.6);

  const tabs = ["Default", "Speech Focus", "Noise Reduction", "Custom"];
  const frequencies = ["60 Hz", "230 Hz", "910 Hz", "3600 Hz", "14000 Hz"];

  const WaveformVisualization = () => {
    // Generate a smooth wave path
    const wavePoints = [];
    const amplitude = 40;
    const frequency = 0.05;
    const centerY = 50;

    for (let x = 0; x <= width - 48; x += 2) {
      const y = centerY + Math.sin(x * frequency) * amplitude * Math.sin(x * 0.01);
      wavePoints.push(`${x},${y}`);
    }

    const pathData = `M ${wavePoints.join(" L ")}`;

    return (
      <View className='h-[160px] mb-[20px] relative'>
        {/* Grid background */}
        <Svg height='130' width={width - 48} className='absolute'>
          {/* Grid lines */}
          {Array.from({ length: 12 }, (_, i) => (
            <Line
              key={`h-${i}`}
              x1='0'
              y1={i * 26}
              x2={width - 48}
              y2={i * 26}
              stroke='#FFFFFF'
              strokeWidth='0.5'
              opacity='0.09'
            />
          ))}
          {Array.from({ length: 20 }, (_, i) => (
            <Line
              key={`v-${i}`}
              x1={i * ((width - 48) / 10)}
              y1='0'
              x2={i * ((width - 48) / 10)}
              y2='120'
              stroke='#FFFFFF'
              strokeWidth='0.5'
              opacity='0.09'
            />
          ))}

          {/* Waveform */}
          <Path d={pathData} stroke='#00E0B6' strokeWidth='3' fill='none' strokeLinecap='round' />
        </Svg>
      </View>
    );
  };

  return (
    <SafeAreaView className='flex-1 bg-primary px-[24px]'>
      <ScrollView className='flex-1 mt-12'>
        {/* Header */}
        <View className=' py-4 flex-row items-center'>
          <TouchableOpacity className='mr-4'>
            <Image
              source={require("../assets/icons/arrow-left.png")}
              className='w-4 h-4 tint-white'
              resizeMode='cover'
            />
          </TouchableOpacity>
          <Text className='text-white text-xl font-medium flex-1 text-center mr-8'>Equalizer</Text>
        </View>

        {/* Tabs */}
        <View className=' mb-6'>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className='flex-row gap-[10px]'>
              {tabs.map((tab) => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setActiveTab(tab)}
                  className={`px-[12px] py-[8px] h-[31px] rounded-[40px] flex-row items-center justify-center ${
                    activeTab === tab ? "bg-secondary" : "border border-[#484848]"
                  }`}>
                  <Text
                    className={`text-[12px] font-inter text-center leading-[1] ${
                      activeTab === tab ? "text-black" : "text-gray-300"
                    }`}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Waveform Visualization */}
        <WaveformVisualization />

        {/* Frequency Sliders */}
        <View className='mb-8 flex-1 w-full'>
          <View className='flex-row flex-1 w-full justify-between items-center '>
            {frequencies.map((freq, index) => (
              <FrequencySlider
                key={freq}
                frequency={freq}
                value={sliderValues[index]}
                index={index}
                onValueChange={(val) => {
                  const updated = [...sliderValues];
                  updated[index] = val;
                  setSliderValues(updated);
                }}
              />
            ))}
          </View>
        </View>

        {/* Bass Control */}
        <View className='py-[12px] w-full flex-1 bg-darkLight rounded-[12px]'>
          <Text className='text-[#FFFFFF4D] ml-[15px] text-[12px]'>Bass</Text>
          <Slider
            value={bassValue}
            onValueChange={setBassValue}
            minimumTrackTintColor='#00E0B6'
            maximumTrackTintColor='#0E5B4D'
            thumbTintColor='#00E0B6'
            style={{ width: "100%", height: 26 }}
            minimumValue={0}
            maximumValue={1}
          />
        </View>

        <View className='flex-row justify-between mt-[30px]'>
          {["3D", "Mid", "High"].map((label, idx) => (
            <View key={idx} className='items-center gap-[20px] relative'>
              <Text className='text-white text-[12px] font-inter'>{label}</Text>
              <View className='w-24 h-24 rounded-full relative border-[10px] border-[#000000]/30 bg-[#00FFD1] items-center justify-center'>
                <View className='w-[2px] h-[10px] bg-[#ffffff] absolute bottom-[7px] left-[20px] rotate-45' />
                {/* <View className='bg-secondary size-[6.4px] absolute bottom-[-8px] left-[-8px] rounded-full' /> */}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Equalizer;
