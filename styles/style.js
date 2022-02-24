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
    }, 

    dashboard:{
        'flex':1,
        'justifyContent':'space-between',
        // 'alignItems':'space-between',
    },

    dashboardItem:{
        'flex':1,
        'justifyContent':'center',
        'alignItems':'center',
        'marginBottom':10,
    },

    dashboardItemText:{
        'fontSize':20,
        'fontWeight':'bold'
    },

    dashboardItemPurple:{
        backgroundColor:COLORS.PURPLE
    },

    dashboardItemGreen:{
        backgroundColor:COLORS.GREEN
    },

    dashboardItemOrange:{
        backgroundColor:COLORS.ORANGE
    },

    dashboardItemWhite:{
        backgroundColor:COLORS.WHITE
    },

    dashboardItemPink:{
        backgroundColor:COLORS.PINK
    }



})

export {GLOBAL_STYLES, COLORS}