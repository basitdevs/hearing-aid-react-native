import React from "react";
import { Text, View, TouchableOpacity, Image, Modal } from "react-native";

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onClose, onLogout }) => {
  if (!visible) return null;

  return (
    <Modal transparent animationType='fade' visible={visible}>
      <View className='flex-1 relative'>
        {/* Modal Content */}
        <View className='flex-1 z-10 items-center justify-center px-[24px]'>
          <View className='bg-[#333333] pt-[12px] rounded-[8px] w-full max-w-sm'>
            <View className='items-center p-[16px] pt-0 gap-[5px]'>
              <Image
                source={require("../../assets/icons/logout.png")}
                className='w-[48px] h-[48px]'
                resizeMode='contain'
              />
              <Text className='text-white text-[17px] leading-[22px] font-interMedium text-center'>
                Logout?
              </Text>
              <Text className='text-[13px] leading-[18px] font-inter text-[#B0B0B0] text-center'>
                Are you sure you want to log out? You'll need to log in again to access your
                account.
              </Text>
            </View>

            <View className='flex-row justify-between '>
              <TouchableOpacity
                onPress={onClose}
                className='flex-1 h-[44px] border-t-[0.5px] border-[#4F4F4F] items-center justify-center'>
                <Text className='text-white text-[17px] leading-[22px] font-inter'>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onClose}
                className='flex-1 h-[44px] border-t-[0.5px] border-l-[0.5px] border-[#4F4F4F] items-center justify-center'>
                <Text className='text-[#FF9999] text-[17px] leading-[22px] font-interBold'>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
