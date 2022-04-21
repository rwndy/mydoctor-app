import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SplashScreen, GetStartedPage, Login, Register, UploadImage, Doctor, Hospitals, Messages } from "../pages"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const ButtomNavigations = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Doctor" component={Doctor}/>
      <Tab.Screen name="Messages" component={Messages}/>
      <Tab.Screen name="Hospitals" component={Hospitals}/>
    </Tab.Navigator>
  )
}


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
      <Stack.Screen 
        name="MainApp" 
        component={ButtomNavigations}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default Router