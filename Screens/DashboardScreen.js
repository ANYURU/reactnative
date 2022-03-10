import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'

const DashboardScreen = ({navigation}) => {
  return (
    <>
      {/* <Text>Dashboard</Text> */}
      <View style={[GLOBAL_STYLES.flexRow,{flex:.25}]}>
        <TouchableOpacity 
            style={[
                GLOBAL_STYLES.dashboardItem, 
                // GLOBAL_STYLES.dashboardItemPurple
            ]} 
            onPress={()=>{
            navigation.navigate('Prayer')
            }}
            >
            <Text 
                style={[
                        GLOBAL_STYLES.dashboardItemText, 
                        GLOBAL_STYLES.headings
                ]}
            >Prayer Request
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={[GLOBAL_STYLES.dashboardItem]} onPress={()=>{
            navigation.navigate('Bible')
        }}>
            <Text style={[
                GLOBAL_STYLES.dashboardItemText, 
                GLOBAL_STYLES.headings
                ]}>Bible Study</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem]} onPress={()=>{
            navigation.navigate('Testimonies')
        }}><Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings]}>Testimonies</Text></TouchableOpacity>
        </View>
      <View style={[GLOBAL_STYLES.flexRow, {flex:.25}]}>
        <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem]} onPress={()=>{
            navigation.navigate('Service')
        }}><Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings]}>Main Service</Text></TouchableOpacity>
      </View>
      <View style={[GLOBAL_STYLES.flexRow, {flex:.25}]}>
        <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem]} onPress={()=>{
            navigation.navigate('Cell')
        }}><Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings]}>Online Cell</Text></TouchableOpacity>
        <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem]} onPress={()=>{
            navigation.navigate('Tithe')
        }}><Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings]}>Tithe</Text></TouchableOpacity>
        <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem]} onPress={()=>{
            navigation.navigate('Donate')
        }}><Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings]}>Donate</Text></TouchableOpacity>
      </View>
      <View style={[GLOBAL_STYLES.flexRow, {flex:.25}]}>
        <TouchableOpacity style={[GLOBAL_STYLES.dashboardItem]} onPress={()=>{
          navigation.navigate('Money')
        }}>
          <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings]}>money</Text>
        </TouchableOpacity>
      </View>
      <View style={[GLOBAL_STYLES.flexRow, {flex:0.4}]}>
      </View>

    </>
  )
}

export default DashboardScreen

