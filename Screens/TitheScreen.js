import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import Overlay from '../components/shared/Overlay'
import { COLORS } from '../styles/style'

const TitheScreen = ({navigation}) => {
  const [form, setForm] = React.useState(false)

  React.useEffect(() => {
    navigation.setOptions({
      headerRight:() => <Button onPress={()=>{
        setForm(true)
      }}></Button>
    })

  })
  return (
    <View>
      {
        form&&<Overlay 
          title="Online Tithe Deposit"
          titleIconColor={COLORS.GREY}
          onClose={()=> setForm(false)}
          body={(
            <View>
              <TextInput placeholder='name'/>
              <TextInput placeholder='phone number'/>
              <TextInput placeholder='Year joined'/>
              <TextInput placeholder='Source of tithe'/>
            </View>
          )}
        />
      }
      <Text>Tithe</Text>
    </View>
  )
}

export default TitheScreen