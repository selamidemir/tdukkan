import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

import style from './Details.styles';

function Details({route}) {
    const product = route.params.product;
    return (
        <SafeAreaView style={style.container}>
            <Image style={style.image} source={{uri: product.image }} />
            <Text style={style.title}>{product.title}</Text>
            <Text style={style.description}>{product.description}</Text>
            <Text style={style.price}>{product.price} TL</Text>
        </SafeAreaView>
    );
}

export default Details;