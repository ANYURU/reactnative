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
    sucessText:{
        color:COLORS.GREEN
    },
    flatListItem:{
        flex:1,
        flexDirection:'row',
        padding:10
    },
    flatListItemText:{
        paddingHorizontal:10,
        flex:2,
    },
    flatListItemIcons:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row',
        // borderWidth:1,
        alignItems:'center'
    },
    flatListItemSeparator:{
        borderTopWidth:1, 
        marginLeft:10, 
        borderTopColor:COLORS.PURPLE
    },
    flatListFooter:{
        justifyContent:'space-between',
        flexDirection:'row',
        flex:1, 
        padding:10,
        backgroundColor:COLORS.PURPLE,
    },
    flatListContainer:{
        flex:17, 
        // borderWidth:1, 
        // borderColor:COLORS.RED,
    },
    flatListPhoto:{
        height:55,
        width:55,
        borderRadius:55/2
    },
    flatListTitleText:{
        fontWeight:'bold',
    },  
    flatListNormalText: {
        fontSize:10,
    },
    flatListHeader:{
        flexDirection:'row',
        alignItems:'center',
        
    }
})

export {GLOBAL_STYLES, COLORS}