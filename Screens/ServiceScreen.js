import { View, Button, Text} from 'react-native'
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
    <View>
      <Text>{title}</Text>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoId}
      />
      <Text>{`by ${preacher}`}</Text>
      <Text>{date}</Text>
      {/* <Button 
        title={playing ? 'pause' : 'play'}
        onPress={togglePlaying}
      /> */}
    </View>
  )
}

export default ServiceScreen