import React from 'react'
import {NavigationContainer, DarkTheme} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import HomeScreen from '../../Pages/HomeScreen/HomeScreen'
import VideoPlayer from '../../Pages/VideoPlayer/VideoPlayer'

import {MyTheme} from '../../Theme/Theme'

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer theme={MyTheme} >
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{title: 'HomeScreen'}}
            />
            <Stack.Screen
            name="VideoPlayer"
            component={VideoPlayer}
            options={{title: 'VideoPlayer'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes