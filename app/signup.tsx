import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from "react-native";

// import {
//   GoogleSignin,
//   isSuccessResponse,
//   isErrorWithCode,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

const SignupScreen = () => {
  const [showLoginButtons, setShowLoginButtons] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState("start");

  // Replace with your actual client ID from Google Console
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "122505109534-0b7j9r99f7091h700mq3nhan01ai06qo.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri(),
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      setShowMessage("Signed In Successfully 🎉");
      const { authentication } = response;
      console.log("Access Token:", authentication?.accessToken);
      // You can now use the access token to fetch user data from Google
    } else if (response?.type === "error") {
      setShowMessage("Google Sign In Failed");
    }
  }, [response]);

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      await promptAsync();
    } catch (error) {
      console.error(error);
      setShowMessage("Error Occurred During Sign In");
    } finally {
      setIsSubmitting(false);
    }
  };

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     iosClientId: "122505109534-qf2keqla3lmppanfpq33se601vk0247h.apps.googleusercontent.com",
  //     webClientId: "122505109534-0b7j9r99f7091h700mq3nhan01ai06qo.apps.googleusercontent.com",
  //     profileImageSize: 150,
  //   });
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginButtons(true);
    }, 1000); // 1 seconds

    return () => clearTimeout(timer);
  }, []);

  // const handleGoogleSignIn = async () => {
  //   try {
  //     setIsSubmitting(true);
  //     await GoogleSignin.hasPlayServices();
  //     const response = await GoogleSignin.signIn();

  //     if (isSuccessResponse(response)) {
  //       console.log(response.data);
  //       const { idToken, user } = response.data;
  //       const { email, name, photo } = user;
  //     } else {
  //       setShowMessage("Google Sign In Failed/Cancelled");
  //     }
  //   } catch (error) {
  //     if (isErrorWithCode(error)) {
  //       switch (error.code) {
  //         case statusCodes.IN_PROGRESS:
  //           setShowMessage("Google Sign In in Progress");
  //           break;
  //         case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
  //           setShowMessage("Play Services Not Available");
  //           break;
  //         default:
  //           setShowMessage("Google Sign In Failed/Cancelled");
  //           break;
  //       }
  //     } else {
  //       setShowMessage("Error Occured");
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <SafeAreaView className='flex-1 bg-primary relative h-full'>
      {showLoginButtons ? (
        <>
          <ScrollView
            className='flex-1'
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}>
            <View className='px-[24px] py-[12px] flex-1 gap-[12px] items-center justify-center'>
              <View className='gap-[10px]'>
                <Text className='text-[20px] font-interMedium text-white text-center leading-[25px] '>
                  Let’s Get Started!
                </Text>
                <Text className='text-[13px] font-inter text-[#B0B0B0] text-center leading-[18px] '>
                  Discover the latest 1000+ Headphone Aids
                </Text>
              </View>

              <View className='gap-[12px] w-full'>
                <TouchableOpacity
                  onPress={handleGoogleSignIn}
                  disabled={!request || isSubmitting}
                  className='items-center py-[12px] px-[16px] justify-center flex-row w-full bg-[#333333] h-[48px]  rounded-[12px] '>
                  <Image
                    source={require("../assets/icons/google.png")}
                    className='w-[24px] h-[24px] object-cover'
                    resizeMode='cover'
                  />
                  <Text className='text-white text-[15px] font-[400]  flex-1 text-center'>
                    {isSubmitting ? "Signing In..." : "Continue with Google"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className='items-center py-[12px] px-[16px] justify-center flex-row w-full bg-[#333333] h-[48px]  rounded-[12px] '>
                  <Image
                    source={require("../assets/icons/apple.png")}
                    className='w-[24px] h-[24px] object-cover'
                    resizeMode='cover'
                  />
                  <Text className='text-white text-[15px] font-[400]  flex-1 text-center'>
                    Continue with Apple
                  </Text>
                </TouchableOpacity>
              </View>

              <View className='text-[13px] font-inter flex-row items-center justify-center gap-[3px]'>
                <Text className='text-[#B0B0B0]'>Already Have an Account?</Text>
                <Link href={"/signin"}>
                  <Text className='text-[#00E0B6]'>Sign in</Text>
                </Link>
              </View>
              {showMessage !== "" && (
                <Text className='text-red-400 text-[13px] text-center mt-[10px]'>
                  {showMessage}
                </Text>
              )}
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <ScrollView className='flex-1 mt-12 '>
            <View className='px-[24px] py-[12px]'>
              <View className='flex-col items-center justify-center mt-[40px]'>
                <View className='bg-[#FFFFFF0A] w-[100px] h-[100px] rounded-full items-center justify-center relative'>
                  <Image
                    source={require("../assets/images/login-ear.png")}
                    className='w-[67px] h-[69px]'
                    resizeMode='cover'
                  />
                  <View className='bg-[#A099FF1A] opacity-50  size-[106px] rounded-full absolute right-0 top-1/2 bottom-1/2 -translate-y-1/2'></View>
                </View>
              </View>
              <View className='mt-[20px] gap-[15px]'>
                <Text className='text-[22px] font-interBold text-white text-center leading-[1] '>
                  Hearing Assistant
                </Text>
                <Text className='text-[12px] font-inter text-[#B0B0B0] text-center leading-[1] '>
                  Powerful Hearing Enhancement With Your Smartphone
                </Text>
              </View>
            </View>
          </ScrollView>

          <View className='absolute bottom-0 left-0 right-0'>
            <Image
              source={require("../assets/images/girl.png")}
              className='w-full h-auto object-contain'
              resizeMode='cover'
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default SignupScreen;
