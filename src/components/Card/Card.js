import React from "react";
import { View,Text,Image } from "react-native";
import styles from './Card.style'

const Card=(props)=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:props.song.imageUrl}}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.song.title}</Text>
                <View style={styles.info_container}>
                    <Text style={styles.name}>{props.song.artist}</Text>
                    <Text style={styles.year}>{props.song.year}</Text>
                </View>
            </View>
            {props.song.isSoldOut && (<View>
                <Text style={styles.stock}>TÜKENDİ</Text>
            </View>)}
        </View>
    )
}

export default Card