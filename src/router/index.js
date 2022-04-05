import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SplashScreen, GetStartedPage } from "../pages"

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={
          {
            headerShown: false
          }
        }
      />
      <Stack.Screen 
        name="GetStarted" 
        component={GetStartedPage}
        options={
          {
            headerShown: false
          }
        }
      />
    </Stack.Navigator>
  )
}

export default Router