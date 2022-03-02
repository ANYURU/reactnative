import { View, Text, FlatList, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import DATA from '../helpers/bible-studies'
import Icon from 'react-native-vector-icons/Feather'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { GLOBAL_STYLES } from '../styles/style'
import { COLORS } from '../styles/style'

const Header =() => {
  return (
    <View style={GLOBAL_STYLES.flatListHeader}>      
    
        <TouchableOpacity>
          <FAIcon name="search" size={20} color="black"/>
        </TouchableOpacity>
      
    </View>
  )
}

const Footer = () => {
  return (
    <View style={GLOBAL_STYLES.flatListFooter}>
      <FAIcon name="microphone" size={20} color={COLORS.WHITE}/>
      <FAIcon name="play" size={20} color={COLORS.WHITE}/>
      <FAIcon name="paperclip" size={20} color={COLORS.WHITE}/>
      <FAIcon name="paper-plane" size={20} color={COLORS.WHITE}/>
    </View>
  )
}

const Item = ({item, playing, setPlaying}) => {
  const {title, date, time, preacher, photo, id} = item
  return(
    <View style={GLOBAL_STYLES.flatListItem}>
      <Image source={photo} style={GLOBAL_STYLES.flatListPhoto}/>
      <View style={GLOBAL_STYLES.flatListItemText}>
        <Text style={GLOBAL_STYLES.flatListTitleText}>{title}</Text>
        <Text stle={GLOBAL_STYLES.flatListNormalText}>{date} | {time} | {preacher}</Text>
      </View>
      <View style={GLOBAL_STYLES.flatListItemIcons}>
        {
          playing === id ? (
            <> 
              <TouchableOpacity onPress={()=> setPlaying(null)}>
                <Icon name="stop-circle" size={20} color="red"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setPlaying(null)}>
                <Icon name="pause-circle" size={20} color="gray"/>
              </TouchableOpacity>
            </>
          )
          :
          (
            <TouchableOpacity onPress={() => setPlaying(id)}>
              <Icon name={playing === id ? "pause-circle": "play-circle"} size={20} color="black"/>
            </TouchableOpacity>
          )
        }
        
      </View>
    </View>
  )
}

const BibleScreen = ({navigation}) => {
  navigation.setOptions({
    // headerTitle: ()=><Header />,
    headerRight: ()=><Header />
  })

  const [playing, setPlaying] = React.useState(null)

  const renderItem = (item) => <Item {...item} playing={playing} setPlaying={setPlaying}/>
  return (
    <View style={{flex:1}} >
      <View style={GLOBAL_STYLES.flatListContainer}>
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent ={()=><View style={GLOBAL_STYLES.flatListItemSeparator}></View>}
        />
      </View>
      <Footer style={GLOBAL_STYLES.flatListFooter}/>
    </View>
  )
}

export default BibleScreen