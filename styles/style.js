import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from '../helpers/constants'

const GLOBAL_STYLES = StyleSheet.create({
    container:{
        'flex':1,
        'justifyContent':'center',
        'alignItems':'center'
    },

    button: {
        'backgroundColor':'red',
        'width':'100%',
        'padding':10,
    },

    buttonText: {
        'color': COLORS.WHITE,
        'textAlign':'center',
    }
})

export {GLOBAL_STYLES, COLORS}