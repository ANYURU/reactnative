import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from './styles/style'

const DashboardScreen = ({navigation}) => {
  return (
    <View style={GLOBAL_STYLES.container}>
      <Text>DashboardScreen</Text>
      <TouchableOpacity style={GLOBAL_STYLES.button} onPress={()=>{
          navigation.navigate('Login')
      }}><Text style={GLOBAL_STYLES.buttonText}>Logout</Text></TouchableOpacity>
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