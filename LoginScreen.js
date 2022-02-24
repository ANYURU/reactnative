import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const LoginScreen = (props) => {
  return (
    <View style={STYLES.container}>
      <Text>LoginScreen</Text>
        <TouchableOpacity 
            style={STYLES.button}
            onPress={()=>{
                props.navigation.navigate('Dashboard')
            }}>
            <Text style={{'color':'white'}}>Login</Text>
       </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const STYLES = StyleSheet.create({
    container:{
        'flex':1,
        'justifyContent':'center',
        'alignItems':'center'
    },

    button: {
        'backgroundColor':'red',
        'width':'100%',
        'padding':10,
    }
})