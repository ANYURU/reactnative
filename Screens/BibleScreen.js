import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

// Icons 
import Icon from 'react-native-vector-icons/Feather'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import DATA from '../helpers/bible-studies'
import { GLOBAL_STYLES } from '../styles/style'
import { COLORS } from '../helpers/constants'

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
            GLOBAL_STYLES.geyButton
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
)}


const Footer = () => {
  
  return (
    <View style={GLOBAL_STYLES.flatListFooter}>
      <TouchableOpacity onPress={() => console.log('start recording')}>
        <FAIcon name="microphone" size={20} color={COLORS.WHITE}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('stop recording') }>
        <FAIcon name="microphone-slash" size={20} color={COLORS.WHITE}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('start playing')}>
        <FAIcon name="play" size={20} color={COLORS.WHITE}/> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> console.log('pause')}>
        <FAIcon name="pause" size={20} color={COLORS.WHITE}/> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> console.log('stop playing')}>
        <FAIcon name="stop" size={20} color={COLORS.WHITE}/> 
      </TouchableOpacity>
      <TouchableOpacity>
        <FAIcon name="paperclip" size={20} color={COLORS.WHITE}/> 
      </TouchableOpacity>
      <TouchableOpacity>
        <FAIcon name="paper-plane" size={20} color={COLORS.WHITE}/>
      </TouchableOpacity>
    </View>
  )
}

const Item =({ item, playing, setPlaying}) => {
  const {title, date, time, preacher, photo, id} = item
  return (
    <View style={GLOBAL_STYLES.flatListItem}>
      <Image source={photo} style={GLOBAL_STYLES.flatListPhoto}/>
      <View style={GLOBAL_STYLES.flatListItemText}>
        <Text style={GLOBAL_STYLES.flatListTitleText}>{title}</Text>
        <Text style={GLOBAL_STYLES.flatListNormalText}>{date} | {time} | {preacher}</Text>
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
const BibleScreen = ({ navigation }) => {
  const [header, setHeader] = React.useState(true)
  const [playing, setplaying] = React.useState(null)

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft:() => (
        <TouchableOpacity style={{paddingRight:10, paddingLeft:10}} 
          onPress={() => navigation.goBack()}>
          <Icon name="home" size={25} color={COLORS.BLACK}/>
        </TouchableOpacity>
      ),
      headerRight:() => <Header switchHeader={setHeader} />,
      headerShown:header,  
    })
  }, [header])

  const renderItem =( item ) => <Item { ...item } playing={ playing } setPlaying={setplaying}/>

  return (
    <View style={{flex:1}}>
      {
        !header && <SearchHeader navigation={navigation}/>
      }

      <View style={GLOBAL_STYLES.flatListContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent = {() => <View style={GLOBAL_STYLES.flatListItemSeparator}></View>}
        />
      </View>
      <Footer style={GLOBAL_STYLES.flatListFooter}/>
    </View>
  )
}

export default BibleScreen