import React, { useState } from "react";
import { View ,Text, FlatList, SafeAreaView,StyleSheet, Dimensions, Alert} from "react-native";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import music_data from "./music-data.json"; 

const App=()=>{
    const [music,setMusic]=useState(music_data)
    const render=({item})=><Card song={item}/>
    const separator=()=><View style={styles.separator}/>
    const handleSearch=(text)=>{
        const filteredList=music_data.filter(song=>{
            const searchedText=text.toLowerCase();
            const currentTitle=song.title.toLowerCase();

            return currentTitle.indexOf(searchedText)> -1;
        });
        setMusic(filteredList);
    };
    return(
        <SafeAreaView style={{flex:1}}>
            <View>
                <SearchBar onSearch={handleSearch}/>
            </View>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item)=>item.id}
                    data={music}
                    renderItem={render}
                    ItemSeparatorComponent={separator}
                />
            </View>
        </SafeAreaView>
    )
}
export default App;

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row"
    },
    separator:{
        backgroundColor:'gray',
        height:1,
        marginHorizontal:10
    }
    
})