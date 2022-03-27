import { View, Button, Text, FlatList} from 'react-native'
import React from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import mainService from '../helpers/main-service'

const ServiceScreen = () => {
  const [{title, preacher, videoId, date}] = mainService

  const [playing, setPlaying] = React.useState(false)
  const togglePlaying = () => {
    setPlaying((prev) => !prev)
  }

  return (
    <View style={{flex:1}}>
      <Text>{title}</Text>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoId}
      />
      <Text>{`by ${preacher}`}</Text>
      <Text>{date}</Text>
      <View style={{flex:0.5}}>
        <Text>Previous Services</Text>
        <View style={{flex:1}}>
          <FlatList>

          </FlatList>
        </View>
      </View>
    </View>
  )
}

export default ServiceScreen