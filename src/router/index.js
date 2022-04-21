import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SplashScreen, GetStartedPage, Login, Register, UploadImage } from "../pages"

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={
          {
            headerShown: false,
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
       <Stack.Screen 
        name="Login" 
        component={Login}
        options={
          {
            headerShown: false,
          }
        }
      />
       <Stack.Screen 
        name="Register" 
        component={Register}
        options={
          {
            headerShown: false
          }
        }
      />
      <Stack.Screen 
        name="UploadImage" 
        component={UploadImage}
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