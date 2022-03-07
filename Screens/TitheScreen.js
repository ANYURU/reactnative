import { 
  View, 
  Text, 
  Button, 
  TextInput 
} from 'react-native'
import React from 'react'
import Overlay from '../components/shared/Overlay'
import { COLORS } from '../styles/style'


const TitheScreen = ({navigation}) => {
  const [form, setForm] = React.useState(false)

  React.useEffect(() => {
    navigation.setOptions({
      headerRight:() => <Button 
        title="Deposit"
        onPress={()=>{
        setForm(true)
      }}
      />
    })

  })
  return (
    <View style={{flex:1}}>
      <Text>Tithe</Text>
      {
        form&&<Overlay 
          title="Online Tithe Deposit"
          titleIconColor={COLORS.GREY}
          onClose={()=> setForm(false)}
          body={(
            <View>
              <TextInput placeholder='Name'/>
              <TextInput placeholder='Phone number'/>
              <TextInput placeholder='Year joined'/>
              <TextInput placeholder='Amount'/>
              <TextInput placeholder='Source of tithe'/>
              <Button
                title='Deposit' 
              />
            </View>
          )}
        />
      }
    </View>
  )
}

export default TitheScreen