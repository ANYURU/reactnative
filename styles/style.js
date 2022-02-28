import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, FONTS } from '../helpers/constants'

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
        fontSize:20,
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
    },

    dashboardFont:{
        fontFamily:FONTS.PRIMARY

    },

    headings:{
        fontFamily:FONTS.HEADINGS
    },

    formInputTagError:{
        borderBottomColor:COLORS.RED,
        borderBottomWidth:1,
        paddingLeft:10,
        paddingRight:10
    },

    formInputTagValid:{
        borderBottomColor:COLORS.BLACK,
        borderBottomWidth:1,
        paddingLeft:10,
        paddingRight:10
    },

    feedback:{
        color:COLORS.RED,
    },

    requestButton:{
        paddingTop:10,
    },

    field:{
        borderBottomColor:COLORS.PURPLE,
        borderBottomWidth:1,
        color: COLORS.PURPLE,
    }, 

    submitContainer:{
        backgroundColor: COLORS.PURPLE,
        opacity:0.8
    },



    

})

export {GLOBAL_STYLES, COLORS}