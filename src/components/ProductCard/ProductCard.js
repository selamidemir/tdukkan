import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import style from './ProductCard.styles';

function ProductCard({product, onSelect}) {
  const handleProduct = () => onSelect(product);

  return (
    <TouchableWithoutFeedback style={style.container} onPress={handleProduct}>
      <View style={style.container}>
        <Image style={style.image} source={{uri: product.image}} />
        <View style={style.body_container}>
          <Text style={style.title}>{product.title}</Text>
          <Text style={style.price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;
