import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "../helpers/constants"


const GLOBAL_STYLES = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    customHeader:{
        paddingTop:10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.LIGHTGREY
    },
    stickTopContainer: {
        backgroundColor: COLORS.WHITE,
        zIndex:999,
        position:'absolute',
        top:0,
        width:'100%',
        paddingHorizontal:10,
    },
    flexRow:{
        flexDirection:'row',
        alignItems:'center',
    },
    spaceHorizontal: {
        paddingHorizontal:10,
    },
    button: {
        backgroundColor:'red',
        width:'100%',
        padding:10,
    },
    buttonText: {
        color: COLORS.WHITE,
        textAlign:'center',
    }, 
    greyButton:{
        backgroundColor:COLORS.LIGHTGREY,
        paddingVertical:2,
        paddingHorizontal:10,
        borderRadius:40,
        marginRight:5
    },
    iconText:{
        paddingLeft:5,
    },
    dashboard:{
        flex:1,
        justifyContent:'space-between',
    },

    dashboardItem:{
        flex:1, 
        borderWidth:1, 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center'
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
        // fontFamily:FONTS.PRIMARY

    },
    headings:{
        // fontFamily:FONTS.HEADINGS
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
    searchField:{
        margin:0,
        padding:0,
        width:'90%'
    },
    searchFieldContainer:{
        backgroundColor: COLORS.LIGHTGREY,
        borderRadius: 20,
        padding: 2, 
        paddingLeft:15,
        marginLeft: 15,
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

const OVERLAY_STYLES = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.LIGHTBLACK,
        justifyContent:'flex-end',
        borderWidth: 1,
        // borderColor: 'red',
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    contentWrapper:{
        backgroundColor: COLORS.WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 10,

    },
    title:{
        flexDirection:'row',
        borderBottomColor:COLORS.LIGHTGREY,
        borderBottomWidth: 1,
        height:30,
        alignItems:'center',

    },
    titleIconColor:{

    },
    titleText:{
        color:COLORS.GREY,
        paddingLeft: 10,
        fontSize: 14,
    },
    body:{
        padding:10,
    }
})


export {GLOBAL_STYLES, COLORS, OVERLAY_STYLES}