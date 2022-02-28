import { View } from 'react-native'
import React from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';

const ServiceScreen = () => {
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={'84WIaK3bl_s'}
      />
    </View>
  )
}

export default ServiceScreen