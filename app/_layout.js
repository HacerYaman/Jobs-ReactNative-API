import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// splash screen olmasını sağlayacak
//SplashScreen.preventAutoHideAsync(); // takılı kalmasına sebep oluyo

const Layout=()=>{
    
    const [fontsLoaded]= useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),

    })
    
    const onLayoutRootView= useCallback(
        async ()=> {
            if(fontsLoaded){
                await SplashScreen.hideAsync();
            }
        }, [fontsLoaded])


    if (!fontsLoaded) return null

    //fontun yükleneceğinden emin olduk
        
    return <Stack onLayout={onLayoutRootView}></Stack>
}

export default Layout