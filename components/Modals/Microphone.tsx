import React from "react";
import { Text, View, TouchableOpacity, Image, Modal } from "react-native";

interface MicrophoneModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const MicrophoneModal: React.FC<MicrophoneModalProps> = ({ visible, onClose, onSubmit }) => {
  if (!visible) return null;

  return (
    <Modal transparent animationType='fade' visible={visible}>
      <View className='flex-1 relative'>
        {/* Modal Content */}
        <View className='flex-1 z-10 items-center justify-center px-[24px]'>
          <View className='bg-[#333333] pt-[12px] rounded-[8px] w-full max-w-sm'>
            <View className='items-center p-[16px] pt-0 gap-[5px]'>
              <Image
                source={require("../../assets/icons/microphone.png")}
                className='w-[48px] h-[48px]'
                resizeMode='contain'
              />
              <Text className='text-white text-[17px] leading-[22px] font-interMedium text-center'>
                Microphone Access
              </Text>
              <Text className='text-[13px] leading-[18px] font-inter text-[#B0B0B0] text-center'>
                To enhance your experience, we need access to your microphone for recording purposes{" "}
              </Text>
            </View>

            <View className='flex-row justify-between '>
              <TouchableOpacity
                onPress={onClose}
                className='flex-1 h-[44px] border-t-[0.5px] border-[#4F4F4F] items-center justify-center'>
                <Text className='text-white text-[17px] leading-[22px] font-inter'>Later</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onClose}
                className='flex-1 h-[44px] border-t-[0.5px] border-l-[0.5px] border-[#4F4F4F] items-center justify-center'>
                <Text className='text-[#00E0B6] text-[17px] leading-[22px] font-interBold'>
                  Allow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MicrophoneModal;
