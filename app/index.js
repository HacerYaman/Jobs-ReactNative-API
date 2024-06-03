import {View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";



const Home=()=>{

    const router = useRouter()
    return(
        //show the content safely without any notches. uygulama üzerine buton ya da bildirim çubuğu gelmesini engeller
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite} }>  

            <Stack.Screen   //React Navigation kütüphanesiyle beraber kullanılır ve ekranlar arasında geçiş yapmayı sağlar
            options={
                {headerStyle: {backgroundColor: COLORS.white},//HEADER Color 
                headerShadowVisible: false,
                headerLeft:()=>( 
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />),
                headerRight:()=>( 
                    <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />),
                headerTitle:""
            }}>
            </Stack.Screen>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{flex:1, padding: SIZES.medium}}>

                    <Welcome>
                        
                    </Welcome>
                </View>

            </ScrollView>

                
        </SafeAreaView>
    )
}

export default Home;