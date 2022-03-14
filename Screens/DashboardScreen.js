import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'
import { NavigationContainer } from '@react-navigation/native'

const DashboardScreen = ({navigation}) => {
  return (
   <>
   <View style={{flex:0.25, borderWidth:1, flexDirection:'row', backgroundColor:'red', justifyContent:'space-between', alignItems:'center'}}>
       <TouchableOpacity 
       style={{flex:1, borderWidth:1, height:'100%', justifyContent:'center', alignItems:'center'}}
       onPress={()=>navigation.navigate('Prayer')}
       > 
           <Text>Prayer Request</Text> 
       </TouchableOpacity>
       <TouchableOpacity 
       style={{flex:1, borderWidth:1, height:'100%', justifyContent:'center', alignItems:'center'}}
       onPress={()=> navigation.navigate('Bible')}
       >
            <Text>Bible Study</Text> 
       </TouchableOpacity>
       <TouchableOpacity 
       style={{flex:1, borderWidth:1, height:'100%', justifyContent:'center', alignItems:'center'}}
       onPress={() => navigation.navigate('Testimonies')}
       >
            <Text>Testimonies</Text> 
       </TouchableOpacity>
   </View>
   <View style={{flex:0.25, borderWidth:1}}>
       <TouchableOpacity 
       style={{flex:1, borderWidth:1, height:'100%', justifyContent:'center', alignItems:'center'}}
       onPress={() => navigation.navigate('Service') }
       >
           <Text>Main Service</Text>
       </TouchableOpacity>
   </View>
   <View style={{flex:0.25, borderWidth:1, flexDirection:'row'}}>
       <TouchableOpacity 
       style={{flex:1, borderWidth:1, height:'100%', justifyContent:'center', alignItems:'center'}}
       onPress={()=> navigation.navigate('Cell')}
       >
           <Text>Cell</Text>
       </TouchableOpacity>
       <TouchableOpacity 
       style={{flex:1, borderWidth:1, height:'100%', justifyContent:'center', alignItems:'center'}}
       onPress={() => navigation.navigate('Tithe')}
       >
           <Text>Tithe</Text>
       </TouchableOpacity>
       <TouchableOpacity 
       style={{flex:1, borderWidth:1, height:'100%', justifyContent:'center', alignItems:'center'}}
       onPress={() => navigation.navigate('Donate')}
       >
           <Text>Donate</Text>
       </TouchableOpacity>
   </View>
   <View style={{flex:0.25, borderWidth:1}}>
       <TouchableOpacity 
       style={{flex:1, borderWidth:1, height:'100%', justifyContent:'center', alignItems:'center'}}
       onPress={() => navigation.navigate('Money')}
       >
           <Text>Money</Text>
       </TouchableOpacity>

   </View>
   <View style={{flex:0.4}}>

   </View>

   </>
  )
}

export default DashboardScreen

