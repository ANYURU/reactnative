import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Overlay from '../components/shared/Overlay';

import { COLORS } from '../helpers/constants'

const Money = ({navigation}) => {
  
  React.useEffect(() => 
    navigation.setOptions({
      headerShown: true,
      headerLeft:()=>(
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon name='arrow-left' size={20} color={COLORS.BLACK} style={{marginRight:10}}/>
        </TouchableOpacity>
      ),
      headerRight:()=>(
        <TouchableOpacity onPress={()=> setConfigurePercentages(true)}>
          <Icon name='settings' size={20} color={COLORS.BLACK}/>
        </TouchableOpacity>
      )

    })
  , [])

  const [budget, setBudget] = React.useState(false)
  const [expenses, setExpenses] = React.useState(false)
  const [recieve, setReceive] = React.useState(false)
  const [configurePercentages, setConfigurePercentages] = React.useState(false)
  
  return (
    <View style={{flex:1,backgroundColor:'#ffeec6'}}>
      <View style={{flex:0.18, borderBottomRightRadius:20, borderBottomLeftRadius:20, backgroundColor:'#d1e3ec',paddingHorizontal:20, flexDirection:'column', justifyContent:'space-between', alignContent:'space-between',paddingVertical:2}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', flex:1, paddingTop:10}}>
          <View >
            <TouchableOpacity 
              style={{height:65, width:65, borderRadius:13, borderWidth:1, borderColor:'#918C88', justifyContent:'center', alignItems:'center'}}
              onPress={()=>{
                setBudget(true)
                setReceive(false)
                setExpenses(false)
                setConfigurePercentages(false)
              }}
              >
              <Icon name='book' size={30} color='rgba(0,0,0,0.6)'/>
              <Text style={{textAlign:'center'}}>Budget</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>100000</Text>
          </View>
          <View>
            <TouchableOpacity 
              style={{height:65, width:65, borderRadius:13, borderWidth:1, borderColor:'#918C88', justifyContent:'center', alignItems:'center'}}
              onPress={()=>{
                setBudget(false)
                setReceive(true)
                setExpenses(false)
                setConfigurePercentages(false)
              }}
              >
              <Icon name='pocket' size={30} color='rgba(0,0,0,0.7)'/>
              <Text style={{textAlign:'center'}}>Income</Text>  
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>50000</Text>
          </View>
          <View >
            <TouchableOpacity 
              style={{height:65, width:65, borderRadius:15, borderWidth:1, borderColor:'#918C88', justifyContent:'center', alignItems:'center'}}
              onPress={()=>{
                setBudget(false)
                setReceive(false)
                setExpenses(true)
                setConfigurePercentages(false)
              }}
              >
              <Icon name='dollar-sign' size={30} color='rgba(0,0,0,0.7)'/>
              <Text style={{textAlign:'center'}}>Expenses</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>70000</Text>
          </View>
          <View >
            <TouchableOpacity 
              style={{height:65, width:65, borderRadius:15, borderWidth:1, borderColor:'#918C88', justifyContent:'center', alignItems:'center'}}
              onPress={()=>{
                setBudget(false)
                setReceive(false)
                setExpenses(false)
                setConfigurePercentages(true)
              }}
              >
              <FontAwesome5 name='money-bill-wave' size={30} color='rgba(0,0,0,0.7)'/>
              <Text style={{textAlign:'center'}}>Balance</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>90000</Text>
          </View>
        </View>
      </View>
      <View style={{flex:.75}}>
        <ScrollView style={{flex:1}}>
          {
            budget && (
              <View style={{alignItems:'center', flex:1}}>
                <Text>Summary</Text>
                <View style={{flexDirection:'row', flex:1, justifyContent:'space-evenly', width:'100%', paddingHorizontal:20}}>
                  <Text style={{flex:1}}>Discipline</Text>
                  <Text style={{flex:1}}>Amount</Text>
                  <Text style={{flex:1}}>Percentage Balance</Text>
                </View>
                <View style={{flexDirection:'row', flex:1, justifyContent:'space-evenly', width:'100%', paddingHorizontal:20}}>
                  <Text style={{flex:1}}>Tithe</Text>
                  <Text style={{flex:1}}>20000</Text>
                  <Text style={{flex:1}}>30000</Text>
                </View>
                <View style={{flexDirection:'row', flex:1, justifyContent:'space-evenly', width:'100%', paddingHorizontal:20}}>
                  <Text style={{flex:1}}>Investment</Text>
                  <Text style={{flex:1}}>20000</Text>
                  <Text style={{flex:1}}>30000</Text>
                </View>
                <View style={{flexDirection:'row', flex:1, justifyContent:'space-evenly', width:'100%', paddingHorizontal:20}}>
                  <Text style={{flex:1}}>Charity</Text>
                  <Text style={{flex:1}}>20000</Text>
                  <Text style={{flex:1}}>30000</Text>
                </View>
                <View style={{flexDirection:'row', flex:1, justifyContent:'space-evenly', width:'100%', paddingHorizontal:20}}>
                  <Text style={{flex:1}}>Miscellaneous</Text>
                  <Text style={{flex:1}}>20000</Text>
                  <Text style={{flex:1}}>30000</Text>
                </View>
                <View style={{flexDirection:'row', flex:1, justifyContent:'space-evenly', width:'100%', paddingHorizontal:20}}>
                  <Text style={{flex:1}}>Welbeing</Text>
                  <Text style={{flex:1}}>20000</Text>
                  <Text style={{flex:1}}>30000</Text>
                </View>
              </View>
            )
          }
          <View style={{height:100, backgroundColor:'aliceblue', margin:10, borderRadius:10}}>
            <Text>Bingo</Text>
          </View>
        </ScrollView>
      </View>
      {
        configurePercentages && (
          <Overlay 
            onClose={()=>setConfigurePercentages(false)}

          />
        )
      }
    </View>
  )
}

export default Money