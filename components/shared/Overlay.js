import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { OVERLAY_STYLES } from '../../styles/style'
import Icon from 'react-native-vector-icons'

const Overlay = ({title, body, titleIconColor, onClose}) => {


  return (
    <View style={[OVERLAY_STYLES.container]}>
      <View style={[OVERLAY_STYLES.contentWrapper]}>
        <View style={[OVERLAY_STYLES.title]}>
            <TouchableOpacity onPress={()=>onClose()}>
                <Icon name='x' size={25} color={titleIconColor}/>
            </TouchableOpacity>

            <Text style={[OVERLAY_STYLES.titleText]}>{title}</Text>
        </View>
        <View style={[OVERLAY_STYLES.body]}>{body}</View>
      </View>
    </View>
  )
}

export default Overlay