import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        margin:5,
        padding:10,
        flexDirection:'row'
    },
    image:{
        width:75,
        height:75,
        borderRadius:50
    },
    inner_container:{
        flex:1,
        justifyContent:'center',
        padding:10,
        paddingLeft:20
    },
    title:{
        fontSize:25,
        fontWeight:'bold'
    },
    info_container:{
        flexDirection:'row'
    },
    name:{
        fontSize:15,
        fontWeight:'bold'
    },
    year:{
        fontSize:10,
        fontWeight:'bold',
        color:'gray',
        marginStart:5,
        marginTop:3

    },
    stock:{
        color:'red',
        fontWeight:'bold',
        borderWidth:2,
        borderColor:'red',
        padding:4,
        borderRadius:5,
        marginTop:40
    }
})