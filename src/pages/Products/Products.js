import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';
import Config from 'react-native-config';

import style from './Products.styles';

import ProductCard from '../../components/ProductCard';
import Details from '../Details';

import useFetch from '../../hooks/useFetch';

function Products({navigation}) {

  const {error, loading, data} = useFetch(Config.API_URL);

  const handleProductSelect = (item) => {
    navigation.navigate('DetailPage', {product: item});
  }

  const renderProduct = ({item}) => <ProductCard product={item} onSelect={handleProductSelect} />;
  

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView style={style.container}>
      <FlatList data={data} renderItem={renderProduct} style={style.products} />
    </SafeAreaView>
  );
}

export default Products;
