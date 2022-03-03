import { View, Text, FlatList, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import DATA from '../helpers/bible-studies'
import Icon from 'react-native-vector-icons/Feather'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { GLOBAL_STYLES } from '../styles/style'
import { COLORS } from '../styles/style'


const SearchHeader = ({navigation}) => {
  return (
    <View style={[GLOBAL_STYLES.spaceHorizontal, GLOBAL_STYLES.customHeader]}>
      <View style={[GLOBAL_STYLES.flexRow, {justifyContent:'center'}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon 
            name="arrow-left"
            size={25}
            stroke={2}
            color={COLORS.BLACK}
          />
        </TouchableOpacity>
        <View style={[GLOBAL_STYLES.flexRow, GLOBAL_STYLES.searchFieldContainer]}>
          <TextInput
            placeholder="Search"
            style={[GLOBAL_STYLES.searchField]}
          />
          <TouchableOpacity>
            <Icon name="x" size={20} color={COLORS.BLACK}/>
          </TouchableOpacity>
        </View>
      </View>     
      <View style={[GLOBAL_STYLES.flexRow,{marginVertical:15}]}>
        <TouchableOpacity
          style={[
            GLOBAL_STYLES.flexRow,
            GLOBAL_STYLES.geyBUtton
          ]}
        >
          <FAIcon name="calendar" size={10} color={COLORS.WHITE}/>
          <Text style={[GLOBAL_STYLES.iconText]}>Date</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            GLOBAL_STYLES.flexRow, 
            GLOBAL_STYLES.greyButton
          ]}
        >
          <FAIcon name="users" size={10}  color={COLORS.WHITE}/>
          <Text style={[GLOBAL_STYLES.iconText]}>Preachers</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const Header = ({switchHeader}) => {
  
  return (
    <View style={GLOBAL_STYLES.flatListHeader}>      
      <TouchableOpacity onPress={()=>switchHeader(false)}>
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
  const [header, setHeader] = React.useState(true)

  navigation.setOptions({
    // headerTitle: ()=><Header />,
    headerLeft:() => <TouchableOpacity style={{paddingRight:10, paddingLeft:10}} onPress={() => navigation.goBack()}>
      <Icon name="home" size={25} color={COLORS.BLACK}/>
    </TouchableOpacity>,
    headerRight:()=><Header switchHeader={setHeader}/>,
    headerShown:header,
    
  })

  const [playing, setPlaying] = React.useState(null)

  const renderItem = (item) => <Item {...item} playing={playing} setPlaying={setPlaying}/>
  return (
    <View style={{flex:1}} >
      {
        !header && <SearchHeader navigation={navigation}/>
      }
        
    
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