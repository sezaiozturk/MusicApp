import React from "react";
import { View,TextInput } from "react-native";
import styles from './Search.style'

const SearchBar=(props)=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.search_bar} placeholder="Ara..." onChangeText={props.onSearch}/>
        </View>
    )
}

export default SearchBar;