import { View, Text, FlatList, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import DATA from '../helpers/bible-studies'
import Icon from 'react-native-vector-icons/Feather'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import { GLOBAL_STYLES } from '../styles/style'
import { SearchBar } from 'react-native-screens'

const Header =() => {
  return (
    <View style={GLOBAL_STYLES.flatListHeader}>
      <SearchBar
        placeHolder='Search'
      />
    </View>
  )
}

const Footer = () => {
  return (
    <View style={GLOBAL_STYLES.flatListFooter}>
      <FAIcon name="microphone" size={30} color="gray"/>
      <FAIcon name="play" size={30} color="gray"/>
      <FAIcon name="paperclip" size={30} color="gray"/>
      <FAIcon name="paper-plane" size={30} color="blue"/>
    </View>
  )
}

const Item = ({item}) => {
  const {title, date, time, preacher, photo} = item
  return(
    <View style={GLOBAL_STYLES.flatListItem}>
      {/* <Image source={require('../assets/media/images/wycliff.png')}/> */}
      <View style={GLOBAL_STYLES.flatListItemText}>
        <Text>{title}</Text>
        <Text>{date} | {time} | {preacher}</Text>
      </View>
      <View style={GLOBAL_STYLES.flatListItemIcons}>
        <Icon name="stop-circle" size={30} color="red"/>
        <Icon name="play-circle" size={30} color="black"/>
      </View>
    </View>
  )
}

const BibleScreen = () => {
  const renderItem = (item) => <Item {...item} />
  return (
    <View style={{flex:1}} >
      <View style={GLOBAL_STYLES.flatListContainer}>
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent ={()=><View style={GLOBAL_STYLES.flatListItemSeparator}></View>}
          ListHeaderComponent={()=><Header />}
        />
      </View>
      <Footer style={GLOBAL_STYLES.flatListFooter}/>
    </View>
  )
}

export default BibleScreen