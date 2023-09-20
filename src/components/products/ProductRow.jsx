import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SIZES } from "../../constants";
import { data } from "../../data";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  return (
    <View style={{ marginTop: SIZES.medium }}>
      <FlatList
        data={data.productsData}
        renderItem={({ item }) => <ProductCardView product={item} />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({});
