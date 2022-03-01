import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import DATA from '../helpers/bible-studies'
import Icon from 'react-native-vector-icons/Feather';

const Item = ({item}) => {
  const {title, date, time, preacher, photo} = item
  return(
    <View style={{flexDirection:'row', flex:'1'}}>
      {/* <Image source={photo} /> */}
      <View>
        <Text>{title}</Text>
        <Text>{date} | {time} | {preacher}</Text>
      </View>
      <View>
        <Icon name="stop-circle" size={30} color="red"/>
        <Icon name="play-circle" size={30} color="black"/>
      </View>
    </View>
  )
}

const BibleScreen = () => {
  const renderItem = (item) => <Item {...item} />
  return (
    <View >

      <Text>Bible</Text>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default BibleScreen