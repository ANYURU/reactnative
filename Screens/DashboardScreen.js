import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'

const DashboardScreen = ({navigation}) => {
  return (
    <View style={GLOBAL_STYLES.dashboard}>
      {/* <Text>Dashboard</Text> */}
      <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemPurple]} onPress={()=>{
          navigation.navigate('Prayer')
      }}><Text style={GLOBAL_STYLES.dashboardItemText}>Prayer Request</Text></TouchableOpacity>
      <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemOrange]} onPress={()=>{
          navigation.navigate('Bible')
      }}><Text style={GLOBAL_STYLES.dashboardItemText}>Bible Study</Text></TouchableOpacity>
      <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemWhite]} onPress={()=>{
          navigation.navigate('Testimonies')
      }}><Text style={GLOBAL_STYLES.dashboardItemText}>Testimonies</Text></TouchableOpacity>
      <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemGreen]} onPress={()=>{
          navigation.navigate('Service')
      }}><Text style={GLOBAL_STYLES.dashboardItemText}>Sunday Service</Text></TouchableOpacity>
      <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemPink]} onPress={()=>{
          navigation.navigate('Cell')
      }}><Text style={GLOBAL_STYLES.dashboardItemText}>Online Cell</Text></TouchableOpacity>
      <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemPurple]} onPress={()=>{
          navigation.navigate('Tithe')
      }}><Text style={GLOBAL_STYLES.dashboardItemText}>Tithe</Text></TouchableOpacity>
      <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem, GLOBAL_STYLES.dashboardItemOrange]} ronPress={()=>{
          navigation.navigate('Donate')
      }}><Text style={GLOBAL_STYLES.dashboardItemText}>Donate</Text></TouchableOpacity>
    </View>
  )
}

export default DashboardScreen