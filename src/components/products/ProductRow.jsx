import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  const productData = {
    name: "Product 1",
    supplier: "Supplier 1",
    price: 350,
    image: "https://source.unsplash.com/1024x768/?nature",
  };

  return (
    <View style={{ marginTop: SIZES.medium }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView product={productData} />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({});
