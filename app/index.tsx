import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AnimatePresence, Motion } from '@legendapp/motion'
import { useRouter } from 'expo-router'

export default function index() {
  const router = useRouter()
  return (
    <AnimatePresence>
    <View className='flex-1 flex justify-end'>
      <StatusBar style="light" />
      <Image className='h-full w-full absolute' source={require('../assets/images/welcome.png')}/>
      <LinearGradient 
      colors={['transparent', '#18181b']}
      style={{width: wp(100), height: hp(70)}}
      start={{x: 0.5, y: 0}}
      end={{x:0.5, y:0.8}}
      className='flex justify-end pb-12 space-y-8'>
        <Motion.View 
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 800,
            delay: 200,
            ease: "easeInOut"
          }}
          className='flex items-center'>
          <Text style={{fontSize: hp(5)}} className='text-white font-bold tracking-wide'>
            Join the <Text className='text-rose-500'>Fitness </Text>
          </Text>
          <Text style={{fontSize: hp(5)}} className='text-white font-bold tracking-wide'>
            Revolution <Text className='text-rose-500'>.</Text>
          </Text>
        </Motion.View>

        <Motion.View
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 800,
            delay: 400,
            ease: "easeInOut"
          }}>
          <TouchableOpacity
            onPress={() => router.push(`/home/`)}
            style={{height: hp(7), width: wp(80)}}
            className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-2 border-neutral-200'
          >
            <Text style={{fontSize: hp(3)}} className='text-white font-bold tracking-widest'>
              Get Started
            </Text>
          </TouchableOpacity>
        </Motion.View>
      <Text style={{fontSize: hp(1)}} className='text-xs font-light text-white text-center'>Roe &copy;2023</Text>
      </LinearGradient>
    </View>
    </AnimatePresence>
  )
}