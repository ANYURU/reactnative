import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { GLOBAL_STYLES } from '../styles/style'

/**
 * @author David Derrick Anyuru
 * Adding Google fonts.
 * 
 */
import { 
    FredokaOne_400Regular, 
    useFonts 
} from '@expo-google-fonts/fredoka-one'
import AppLoading from 'expo-app-loading'
const DashboardScreen = ({navigation}) => {
    let [fontLoaded, error] = useFonts({
        FredokaOne_400Regular,
    })

    if(!fontLoaded) return <AppLoading />
    
  return (
   <>
   <View style={{flex:0.25, flexDirection:'row'}}>
       <TouchableOpacity 
       style={GLOBAL_STYLES.dashboardItem}
       onPress={()=>navigation.navigate('Prayer')}
       > 
           <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings, {fontFamily:'FredokaOne_400Regular'}]}>Prayer Request</Text> 
       </TouchableOpacity>
       <TouchableOpacity 
       style={GLOBAL_STYLES.dashboardItem}
       onPress={()=> navigation.navigate('Bible')}
       >
            <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings, {fontFamily:'FredokaOne_400Regular'}]}>Bible Study</Text> 
       </TouchableOpacity>
       <TouchableOpacity 
       style={GLOBAL_STYLES.dashboardItem}
       onPress={() => navigation.navigate('Testimonies')}
       >
            <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings, {fontFamily:'FredokaOne_400Regular'} ]}>Testimonies</Text> 
       </TouchableOpacity>
   </View>
   <View style={{flex:0.25}}>
       <TouchableOpacity 
       style={GLOBAL_STYLES.dashboardItem}
       onPress={() => navigation.navigate('Service') }
       >
           <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings, {fontFamily:'FredokaOne_400Regular'}]}>Main Service</Text>
       </TouchableOpacity>
   </View>
   <View style={{flex:0.25, flexDirection:'row'}}>
       <TouchableOpacity 
       style={GLOBAL_STYLES.dashboardItem}
       onPress={()=> navigation.navigate('Cell')}
       >
           <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings, {fontFamily:'FredokaOne_400Regular'}]}>Cell</Text>
       </TouchableOpacity>
       <TouchableOpacity 
       style={GLOBAL_STYLES.dashboardItem}
       onPress={() => navigation.navigate('Tithe')}
       >
           <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings, {fontFamily:'FredokaOne_400Regular'}]}>Tithe</Text>
       </TouchableOpacity>
       <TouchableOpacity 
       style={GLOBAL_STYLES.dashboardItem}
       onPress={() => navigation.navigate('Donate')}
       >
           <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings, {fontFamily:'FredokaOne_400Regular'}]}>Donate</Text>
       </TouchableOpacity>
   </View>
   <View style={{flex:0.25, justifyContent:'space-between'}}>
       <TouchableOpacity 
       style={GLOBAL_STYLES.dashboardItem}
       onPress={() => navigation.navigate('Money')}
       >
           <Text style={[GLOBAL_STYLES.dashboardItemText, GLOBAL_STYLES.headings, {fontFamily:'FredokaOne_400Regular'}]}>Money</Text>
       </TouchableOpacity>

   </View>
   <View style={{flex:0.4}}>

   </View>
   </>
  )
}




export default DashboardScreen

