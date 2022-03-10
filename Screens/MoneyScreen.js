import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../helpers/constants'
import { GLOBAL_STYLES } from '../styles/style'
import Overlay from '../components/shared/Overlay'

const Money = ({navigation}) => {

  const [ spend, setSpend ] = React.useState(false)
  const [ expense, setExpense ] = React.useState('false')
  React.useEffect(() => 
    navigation.setOptions({
      headerShown: false
    }))

  return (
    <View style={{flex:1,backgroundColor:'#ffeec6'}}>
      <View style={{flex:0.4, borderBottomRightRadius:20, borderBottomLeftRadius:20, backgroundColor:'#d1e3ec',paddingHorizontal:20, flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', paddingVertical:20}}>
        <View style={{height:70, width:70, borderRadius:15, borderWidth:1, borderColor:'#918C88'}}></View>
        <View style={{height:70, width:70, borderRadius:15, borderWidth:1, borderColor:'#918C88'}}></View>
        <View style={{height:70, width:70, borderRadius:15, borderWidth:1, borderColor:'#918C88'}}></View>
        <View style={{height:70, width:70, borderRadius:15, borderWidth:1, borderColor:'#918C88'}}></View>
      </View>
      <View>

      </View>
    </View>
  )
}

export default Money