import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../helpers/constants'
import { GLOBAL_STYLES } from '../styles/style'

const CustomActivityIndicator = ({ children }) => {
  return (
    <View style={[GLOBAL_STYLES.container, GLOBAL_STYLES.submitContainer]}>
        {children}
    </View>
  )
}

export default CustomActivityIndicator