import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {Image, SafeAreaView, StyleSheet, Text, View, ScrollView, Button  } from 'react-native'
import { Tabs, Redirect, router } from 'expo-router'
import { images } from '../constants'
import CustomButton from '../components/CustomButton';
export default function app(){
  return(
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />

          <Image source={images.cards} className='max-w-[380px] w-full h-[200px]' resizeMode='contain' />
          {/* <Text className='text-white font-psemibold text-3xl'>
            Discover Endless Possibilities with
            <Text className='text-secondary-100 font-psemibold text-2xl'>Aora</Text>
            <Image source={images.path} className='w-[100px]' resizeMode='contain' />
          </Text> */}

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-1 -right-8' resizeMode='contain' />
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          <CustomButton 
          title='Continue With Email'
          handlePress={()=>router.push('/sign-in')}
          containerStyles='w-[90%] mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}