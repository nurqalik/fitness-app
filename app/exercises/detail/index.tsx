import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Motion } from '@legendapp/motion'

export default function ExercisesDetail() {
  const item = useLocalSearchParams()
  const router = useRouter()

  return (
    <View className='flex-1 flex'>
      <View className='shadow-md bg-neutral-200 rounded-b-[40px]'>
        <Image 
          source={{uri: item.gifUrl as string}}
          contentFit='cover'
          style={{width: wp(100), height: wp(100)}}
          className='rounded-b-[40px]'
        />
      <TouchableOpacity
        onPress={() => router.back()}
        className='mx-4 absolute rounded-full mt-2 right-0'
        style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
      >
        <Ionicons name='close-circle' size={hp(4.5)} color='#f43f5e' />
      </TouchableOpacity>
      </View>


      {/* Details */}

      <ScrollView className='mx-4 space-y-2 mt-3 capitalize' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60}} >
        <Motion.Text
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{
            type: 'tween',
            duration: 600,
            ease: "easeInOut"
          }}
          style={{fontSize: hp(3.5)}}
          className='font-semibold text-neutral-800 tracking-wide capitalize'
        >
          {item.name}
        </Motion.Text>
        <Motion.Text
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{
            type: 'tween',
            duration: 600,
            delay: 100,
            ease: "easeInOut"
          }}
          style={{fontSize: hp(2)}}
          className='text-neutral-700 tracking-wide'
        >
          Equipment : <Text className='font-bold text-neutral-800 capitalize'>
          {item?.equipment}
          </Text>
        </Motion.Text>
        <Motion.Text
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{
            type: 'tween',
            duration: 600,
            delay: 200,
            ease: "easeInOut"
          }}
          style={{fontSize: hp(2)}}
          className='text-neutral-700 tracking-wide'
        >
          Secondary Muscles : <Text className='font-bold text-neutral-800 capitalize'>
          {item?.secondaryMuscles}
          </Text>
        </Motion.Text>
        <Motion.Text
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{
            type: 'tween',
            duration: 600,
            delay: 300,
            ease: "easeInOut"
          }}
          style={{fontSize: hp(2)}}
          className='text-neutral-700 tracking-wide'
        >
          Target : <Text className='font-bold text-neutral-800 capitalize'>
          {item?.target}
          </Text>
        </Motion.Text>
        <Motion.Text
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{
            type: 'tween',
            duration: 600,
            delay: 400,
            ease: "easeInOut"
          }}
          style={{fontSize: hp(3)}}
          className='font-semibold text-neutral-800 tracking-wide capitalize mt-12'
        >
          Instructions
        </Motion.Text>

        {
          (item?.instructions as string).split(',').map((instruction, index) => {
            return (
              <Motion.Text
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{
                type: 'tween',
                duration: 600,
                delay: (index+6)*100,
                ease: "easeInOut"
              }} 
                key={instruction+index+1}
                style={{fontSize: hp(1.7)}}
                className='text-neutral-800'
              >
                {`${index+1}. ${instruction}`}
              </Motion.Text>
            )
            })
        }
      </ScrollView>
    </View>
  )
}