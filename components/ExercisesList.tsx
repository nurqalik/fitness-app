import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Motion } from '@legendapp/motion'

export default function ExercisesList({data}: any) {
  const router = useRouter()
  return (
    <View>
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 60, paddingTop: 20}}
      columnWrapperStyle={{
        justifyContent: 'space-between'
      }}
      renderItem={({item, index}) => <ExerciseCard router={router} index={index} item={item} />}
    />
  </View>
  )
}

const ExerciseCard = ({item, index, router}: any) => {
  return (
    <Motion.View
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{
        type: 'tween',
        duration: 500,
        delay: index*200,
        ease: "easeInOut"
      }}>
      <TouchableOpacity className='flex py-3 space-y-2' onPress={() => router.push({pathname: '/exercises/detail/', params: item})} >
        <View className='bg-neutral-200 shadow rounded-[25px]'>
          <Image 
            source={{uri: item.gifUrl}}
            contentFit='cover'
            style={{width: wp(44), height: wp(52)}}
            className='rounded-[25px]'
          />
        </View>

      <Text style={{fontSize: hp(1.7)}} className='text-neutral-700 font-semibold ml-1 tracking-wide capitalize'>
        {item?.name?.length>20 ? item.name.slice(0,20)+'...' : item.name}
      </Text>
      </TouchableOpacity>
    </Motion.View>

  )
}