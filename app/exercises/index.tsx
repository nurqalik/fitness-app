import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from '../api/exerciseDB'
import { demoExercises } from '../../constants'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons'
import ExercisesList from '../../components/ExercisesList'
import { ScrollView } from 'react-native-virtualized-view'

export default function Exercises() {
  const [exercises, setExercises] = useState([])
  const router = useRouter()
  const item = useLocalSearchParams()
  
  useEffect(() => {
    if(item) {
      getExercises(item.name)
    }
  }, [item])

  const getExercises = async(bodyPart: string | string[]) => {
    let data = await fetchExercisesByBodypart(bodyPart)
    setExercises(data)
  }

  return (
    <ScrollView>
      <StatusBar style='light' />
      <Image 
        source={item.image as ImageSourcePropType}
        style={{width: wp(100), height: hp(44)}}
        className='rounded-b-[40px]'
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className='bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full'
        style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
      >
        <Ionicons name='caret-back-outline' size={hp(4)} color='white' />
      </TouchableOpacity>

      {/* Exercises */}
      <View className='mx-4 space-y-3 mt-4'>
        <Text style={{fontSize: hp(3)}} className='font-semibold text-neutral-700 capitalize'>{item.name} exercises</Text>
        <View className='mb-10'>
          <ExercisesList data={exercises} />
        </View>
      </View>
    </ScrollView>
  )
}