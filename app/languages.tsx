import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const languages = ["English", "Arab", "Hindi", "Spanish", "Chinese", "Japanese"];

const LanguagesScreen = () => {
  const [language, setLanguage] = useState("English");

  return (
    <SafeAreaView className='flex-1 bg-primary relative h-full'>
      <ScrollView className='flex-1 mt-12 '>
        <View className='px-[24px] py-[12px]'>
          <View className='mb-[12px] flex-row items-center justify-center'>
            <TouchableOpacity className='bg-darkLight size-[40px] rounded-[12px] items-center justify-center flex'>
              <Image
                source={require("../assets/icons/arrow-left.png")}
                className='w-[16px] h-[16px] '
                resizeMode='cover'
              />
            </TouchableOpacity>
            <Text className='text-white flex-1 items-center justify-center text-center text-[16px] font-inter'>
              Language
            </Text>
          </View>

          <View>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang}
                onPress={() => {
                  setLanguage(lang);
                }}
                className='flex-row justify-between items-center p-[12px] bg-darkLight h-[46px] rounded-[8px] mb-2'>
                <Text className='text-white text-[15px] font-inter'>{lang}</Text>
                <View
                  className={`w-[22px] h-[22px] ${
                    language != lang ? "border-[1.5px] border-[#4F4F4F]" : "bg-secondary "
                  } rounded-full items-center justify-center`}>
                  {language == lang && <Text className='text-[#272727] text-[14px]'>✓</Text>}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LanguagesScreen;

