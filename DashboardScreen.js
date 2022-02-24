import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const DashboardScreen = ({navigation}) => {
  return (
    <View>
      <Text>DashboardScreen</Text>
      <TouchableOpacity onPress={()=>{
          navigation.navigate('Login')
      }}><Text>Logout</Text></TouchableOpacity>
      {/* <Button 
        title="Go to Dashboard Again"
        onPress={() => navigation.navigate('Dashboard')}
      /> */}
      {/* <Button 
        title="Go to Dashboard Again"
        onPress={() => navigation.push('Dashboard')}
      />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}

    </View>
  )
}

export default DashboardScreen