import { View, Text, FlatList, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import DATA from '../helpers/bible-studies'
import Icon from 'react-native-vector-icons/Feather'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { GLOBAL_STYLES } from '../styles/style'
import { COLORS } from '../styles/style'
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player'
import RNFetchBlob from 'rn-fetch-blob'



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
  )
}

const Footer = () => {
  const [player, setPlayer] = React.useState({
    isLoggingIn: false,
    recordSecs: 0,
    recordTime: '00:00:00',
    currentPositionSec:0,
    currentDurationSec: 0,
    playTime:'00:00:00',
    duration:'00:00:00'
  })

  const onStartRecord = async () => {
    // if (Platform.OS === 'android') {
    //   try {
    //     const grants = await PermissionsAndroid.requestMultiple([
    //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //       PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    //     ]);
    
    //     console.log('write external stroage', grants);
    
    //     if (
    //       grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
    //         PermissionsAndroid.RESULTS.GRANTED &&
    //       grants['android.permission.READ_EXTERNAL_STORAGE'] ===
    //         PermissionsAndroid.RESULTS.GRANTED &&
    //       grants['android.permission.RECORD_AUDIO'] ===
    //         PermissionsAndroid.RESULTS.GRANTED
    //     ) {
    //       console.log('Permissions granted');
    //     } else {
    //       console.log('All required permissions not granted');
    //       return;
    //     }
    //   } catch (err) {
    //     console.warn(err);
    //     return;
    //   }
    // }


    // const path = 'sample.mp3'

    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.select({
      ios: 'trial.m4a',
      android: `${dirs.CacheDir}/trial.mp3`,
    });

    // const uri = await audioRecorderPlayer.startRecorder(path);

    
    const audioSet = {
      AudioEncoderAndroid:AudioEncoderAndroidType.ACC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVENumberOfChannelsKeyIOS:2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    }

    console.log('audioSet', audioSet);
    const  uri = await audioRecorderPlayer.startRecorder(path, audioSet);

    audioRecorderPlayer.addRecordBackListener((e) => {
      console.log(e)
      setPlayer({
        ...player,
        recordSecs: e.current_position,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position))
      })
    })  
  }

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener(); 
    setPlayer({
      ...player,
      recordSecs: 0,
    })
    console.log(result)
  }
  
  const onStartPlay = async(e) => {
    console.log('onStartPlay')
    const  path = 'sample.m4a'
    const msg = await audioRecorderPlayer.startPlayer(path)
    audioRecorderPlayer.setVolume(1.0)
    console.log(msg)
    audioRecorderPlayer.addRecordBackListener((e) => {
      if (e.current_position === e.duration) {
        console.log('finished')
        audioRecorderPlayer.stopPlayer()
      }

      setPlayer({
        ...player,
        currentDurationSec: e.current_position,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration))
      })
    })
  } 

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer()
  }

  const onStopPlay = async () => {
    console.log('onStopPlay')
    await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener()
  }
  const audioRecorderPlayer = new AudioRecorderPlayer()
  audioRecorderPlayer.setSubscriptionDuration(0.09)
  return (
    <>
      <View style={GLOBAL_STYLES.flatListFooter}>
        <TouchableOpacity onPress={()=>onStartRecord()}>
          <FAIcon name="microphone" size={20} color={COLORS.WHITE}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onStopRecord()}>
          <FAIcon name="microphone-slash" size={20} color={COLORS.WHITE}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onStartPlay()}>
          <FAIcon name="play" size={20} color={COLORS.WHITE}/> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPausePlay()}>
          <FAIcon name="pause" size={20} color={COLORS.WHITE}/> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onStopPlay()}>
          <FAIcon name="stop" size={20} color={COLORS.WHITE}/> 
        </TouchableOpacity>
        <TouchableOpacity>
          <FAIcon name="paperclip" size={20} color={COLORS.WHITE}/> 
        </TouchableOpacity>
        <TouchableOpacity>
          <FAIcon name="paper-plane" size={20} color={COLORS.WHITE}/>
        </TouchableOpacity>
      </View>
      <View>
        
      </View>
    </>
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

  React.useEffect(() => {
    navigation.setOptions({
      // headerTitle: ()=><Header />,
      headerLeft:() => <TouchableOpacity style={{paddingRight:10, paddingLeft:10}} onPress={() => navigation.goBack()}>
        <Icon name="home" size={25} color={COLORS.BLACK}/>
      </TouchableOpacity>,
      headerRight:()=><Header switchHeader={setHeader}/>,
      headerShown:header,  
    })
  }, [header])

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